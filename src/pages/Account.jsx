import { useQueryClient } from "@tanstack/react-query";
import ContentBox from "../ui/ContentBox";
import InputField from "../ui/InputField";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { useUpdatedBalance } from "../features/transactions/useUpdatedBalance";
import Spinner from "../ui/Spinner";
import { useResetAccount } from "../features/authentication/useResetAccount";

function Account() {
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const { updateBalance, isLoading } = useUpdatedBalance();
    const { resetAccount, isLoading: isResettingAccount } = useResetAccount();

    function handleResetAccount() {
        //Reset balance
        updateBalance(200000 - user.user_metadata.balance);
        resetAccount(user.id);
    }

    if (isLoading || isResettingAccount) return <Spinner />;
    return (
        <>
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
            <div className="flex justify-center">
                <Button
                    onClick={handleResetAccount}
                    type="danger"
                    className={"w-[120px]"}
                >
                    Reset account
                </Button>
            </div>
        </>
    );
}

export default Account;
