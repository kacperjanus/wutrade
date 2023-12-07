import Spinner from "../../ui/Spinner";
import Transaction from "./Transaction";
import { useTransactions } from "./useTransactions";

function TransactionList() {
    const { data, isLoading } = useTransactions();

    //TODO implement pagination

    if (isLoading) return <Spinner />;
    return (
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
