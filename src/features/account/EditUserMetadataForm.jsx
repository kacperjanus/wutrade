import { useForm } from "react-hook-form";
import ContentBox from "../../ui/ContentBox";
import InputField from "../../ui/InputField";
import { useUpdatedUser } from "./useUpdatedUser";
import Button from "../../ui/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function EditUserMetadataForm({ user }) {
    const { updateUser, isUpdatingUser } = useUpdatedUser();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const handleClick = function ({ firstName, lastName, email }) {
        if (!firstName || !lastName || !email) return;
        let newMetadata = {};
        if (firstName !== user?.user_metadata?.firstName)
            newMetadata = { ...newMetadata, firstName };
        if (lastName !== user?.user_metadata?.lastName)
            newMetadata = { ...newMetadata, lastName };
        if (email !== user?.email) newMetadata = { ...newMetadata, email };
        if (Object.keys(newMetadata).length === 0) {
            toast.error("Make some changes");
            return;
        }
        updateUser(newMetadata);
        navigate("/dashboard");
    };

    return (
        <ContentBox>
            <form
                className="text-white flex flex-col gap-5"
                onSubmit={handleSubmit(handleClick)}
            >
                <InputField
                    registerFunction={register}
                    label="First name"
                    fieldName="firstName"
                    defaultValue={user?.user_metadata?.firstName}
                />
                <InputField
                    registerFunction={register}
                    label="Last name"
                    fieldName="lastName"
                    defaultValue={user?.user_metadata?.lastName}
                />
                <InputField
                    registerFunction={register}
                    label="Email"
                    fieldName="email"
                    defaultValue={user.email}
                />
                <Button
                    className={"w-20"}
                    type="secondary"
                    disabled={isUpdatingUser}
                    onClick={handleClick}
                >
                    Submit
                </Button>
            </form>
        </ContentBox>
    );
}

export default EditUserMetadataForm;
