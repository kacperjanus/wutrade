import Transaction from "../features/transactions/Transaction";
import { useTransactions } from "../features/transactions/useTransactions";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";
import Spinner from "../ui/Spinner";

function Transactions() {
    const { data, isLoading } = useTransactions();

    return isLoading ? (
        <Spinner />
    ) : (
        <>
            <SectionHeader>Transactions</SectionHeader>
            <ContentBox>
                <ul>
                    {data.map((transaction, i) => (
                        <Transaction data={transaction} number={i + 1} />
                    ))}
                </ul>
            </ContentBox>
            ;
        </>
    );
}

export default Transactions;
