import { useQueryClient } from "@tanstack/react-query";
import SectionHeader from "../ui/SectionHeader";
import Button from "../ui/Button";
import { useUpdatedBalance } from "../features/transactions/useUpdatedBalance";
import Spinner from "../ui/Spinner";
import { useResetAccount } from "../features/account/useResetAccount";
import EditUserMetadataForm from "../features/account/EditUserMetadataForm";
import EditUserPasswordForm from "../features/account/EditUserPasswordForm";
import AccountStats from "../features/account/AccountStats";

function Account() {
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const { updateBalance, isLoading } = useUpdatedBalance();
    const { resetAccount, isLoading: isResettingAccount } = useResetAccount();

    //TODO add modal to confirm reseting the account
    function handleResetAccount() {
        //Reset balance
        updateBalance(200000 - user.user_metadata.balance);
        resetAccount(user.id);
    }

    if (isLoading || isResettingAccount) return <Spinner />;
    return (
        <>
            <SectionHeader>Account</SectionHeader>
            <AccountStats />
            <EditUserMetadataForm user={user} />
            <EditUserPasswordForm />
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
