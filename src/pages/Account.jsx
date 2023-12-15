import { useQueryClient } from "@tanstack/react-query";
import SectionHeader from "../ui/SectionHeader";
import { useUpdatedBalance } from "../features/transactions/useUpdatedBalance";
import Spinner from "../ui/Spinner";
import { useResetAccount } from "../features/account/useResetAccount";
import EditUserMetadataForm from "../features/account/EditUserMetadataForm";
import EditUserPasswordForm from "../features/account/EditUserPasswordForm";
import AccountStats from "../features/account/AccountStats";
import ResetAccountButton from "../features/account/ResetAccountButton";

function Account() {
    const queryClient = useQueryClient();
    const user = queryClient.getQueryData(["user"]);
    const { updateBalance, isLoading } = useUpdatedBalance();
    const { resetAccount, isLoading: isResettingAccount } = useResetAccount();

    if (isLoading || isResettingAccount) return <Spinner />;
    return (
        <>
            <SectionHeader>Account</SectionHeader>
            <AccountStats />
            <EditUserMetadataForm user={user} />
            <EditUserPasswordForm />
            <ResetAccountButton
                updateBalance={updateBalance}
                resetAccount={resetAccount}
                user={user}
            />
        </>
    );
}

export default Account;
