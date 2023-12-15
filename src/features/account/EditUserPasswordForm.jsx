import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import ContentBox from "../../ui/ContentBox";
import InputField from "../../ui/InputField";
import { useUpdatedUser } from "./useUpdatedUser";
import toast from "react-hot-toast";

function EditUserPasswordForm() {
    const { register, handleSubmit } = useForm();
    const { updateUser, isUpdatingUser } = useUpdatedUser();

    const onSubmit = function ({ oldPass, newPass, confirmNewPass }) {
        if (!oldPass || !newPass || !confirmNewPass) return;
        if (newPass !== confirmNewPass) toast.error("Passwords have to match!");
        if (newPass.length < 6)
            toast.error("Password needs to have at least 6 characters!");
        //TODO check if old password is correct
        updateUser({ password: newPass });
    };

    return (
        <ContentBox>
            <form
                className="text-white flex flex-col gap-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <InputField
                    registerFunction={register}
                    fieldName="oldPass"
                    label="Old password"
                    type="password"
                />
                <InputField
                    registerFunction={register}
                    fieldName="newPass"
                    label="New Password"
                    type="password"
                />
                <InputField
                    registerFunction={register}
                    fieldName="confirmNewPass"
                    label="Confirm New Password"
                    type="password"
                />
                <Button
                    disabled={isUpdatingUser}
                    className="w-40"
                    type="secondary"
                >
                    Change password
                </Button>
            </form>
        </ContentBox>
    );
}

export default EditUserPasswordForm;
