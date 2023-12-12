import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import Transaction from "./Transaction";
import { useTransactions } from "./useTransactions";

function TransactionList() {
    const { data, isLoading } = useTransactions();

    //TODO implement pagination

    if (isLoading) return <Spinner />;
    return data.length === 0 ? (
        <ContentBox>
            <p>Nothing to see here. Visit explore tab to make a transaction</p>
        </ContentBox>
    ) : (
        <ul>
            {Object.values(data)
                .reverse()
                .map((transaction, i) => (
                    <Transaction
                        key={i}
                        data={transaction}
                        number={data.length - i}
                    />
                ))}
        </ul>
    );
}

export default TransactionList;
