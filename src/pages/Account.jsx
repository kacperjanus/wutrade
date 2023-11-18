import { useQueryClient } from "@tanstack/react-query";
import ContentBox from "../ui/ContentBox";
import InputField from "../ui/InputField";
import PageLayout from "../ui/PageLayout";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";

function Account() {
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);

    return (
        <PageLayout>
            <SectionHeader>Account</SectionHeader>
            <ContentBox>
                <form className="text-white flex flex-col gap-5">
                    <InputField
                        registerFunction={() => {}}
                        label="First name"
                        defaultValue={user?.user_metadata?.firstName}
                    />
                    <InputField
                        registerFunction={() => {}}
                        label="Last name"
                        defaultValue={user?.user_metadata?.lastName}
                    />
                    <InputField
                        registerFunction={() => {}}
                        label="Email"
                        defaultValue={user.email}
                    />
                </form>
            </ContentBox>
            <ContentBox>
                <form className="text-white flex flex-col gap-5">
                    <InputField
                        registerFunction={() => {}}
                        label="Old password"
                    />
                    <InputField
                        registerFunction={() => {}}
                        label="New Password"
                    />
                    <InputField
                        registerFunction={() => {}}
                        label="Confirm New Password"
                    />
                    <Button type="secondary">Change password</Button>
                </form>
            </ContentBox>
        </PageLayout>
    );
}

export default Account;
