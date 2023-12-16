import { useState } from "react";
import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import Transaction from "./Transaction";
import { useTransactions } from "./useTransactions";
import PageSelector from "../../ui/PageSelector";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import TransactionFilters from "./TransactionFilters";

function TransactionList() {
    const { data, isLoading } = useTransactions();

    //Allows for filtering out just buy or sell orders
    const [sellBuyFilter, setSellBuyFilter] = useState("");
    //Allows for filtering transaction to those including
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    //Allows for filtering transactions by dates
    const [dateFilter, setDateFilter] = useState();

    //Pagination
    const [page, setPage] = useState(1);

    //Get all unique companies in transactions
    const companies = [];
    const values = Object.values(data);
    for (let i = 0; i < values.length; i++)
        if (!companies.includes(values[i]?.stockId))
            companies.push(values[i].stockId);

    let filteredData = data;
    let pagedData;

    //Apply sell/buy filter
    filteredData = filteredData.filter((transaction) =>
        sellBuyFilter === ""
            ? transaction
            : sellBuyFilter === "buy"
            ? transaction.quantity > 0
            : transaction.quantity < 0
    );

    //Apply company filter
    if (filteredCompanies.length > 0) {
        filteredData = filteredData.filter((companyData) =>
            filteredCompanies.find((company) => company === companyData.stockId)
        );
    }

    //Display only transactions for current page
    if (filteredData.length > ITEMS_PER_PAGE) {
        pagedData = filteredData.slice(
            (page - 1) * ITEMS_PER_PAGE,
            page * ITEMS_PER_PAGE
        );
    } else {
        pagedData = filteredData;
    }

    if (isLoading) return <Spinner />;
    return (
        <>
            {data.length > 0 && (
                <TransactionFilters
                    companies={companies}
                    filteredCompanies={filteredCompanies}
                    setFilteredCompanies={setFilteredCompanies}
                    sellBuyFilter={sellBuyFilter}
                    setSellBuyFilter={setSellBuyFilter}
                    setPage={setPage}
                />
            )}
            {filteredData.length === 0 ? (
                <ContentBox>
                    <p>
                        Nothing to see here. Visit explore tab to make a
                        transaction
                    </p>
                </ContentBox>
            ) : (
                <ul>
                    {Object.values(pagedData)
                        .reverse()
                        .map((transaction, i) => (
                            <Transaction
                                key={i}
                                data={transaction}
                                number={(page - 1) * ITEMS_PER_PAGE + i + 1}
                            />
                        ))}
                </ul>
            )}
            {data.length > 0 && (
                <PageSelector
                    page={page}
                    setPage={setPage}
                    length={filteredData.length}
                />
            )}
        </>
    );
}

export default TransactionList;
