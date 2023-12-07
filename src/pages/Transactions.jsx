import TransactionList from "../features/transactions/TransactionList";
import ContentBox from "../ui/ContentBox";
import SectionHeader from "../ui/SectionHeader";

function Transactions() {
    return (
        <>
            <SectionHeader>Transactions</SectionHeader>
            <ContentBox>
                <TransactionList />
            </ContentBox>
        </>
    );
}

export default Transactions;
