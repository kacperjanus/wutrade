import { useState } from "react";
import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import Transaction from "./Transaction";
import { useTransactions } from "./useTransactions";
import Button from "../../ui/Button";

function TransactionList() {
    const { data, isLoading } = useTransactions();

    //Allows for filtering out just buy or sell orders
    const [sellBuyFilter, setSellBuyFilter] = useState("");
    //Allows for filtering transaction to those including
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    //Allows for filtering transactions by dates
    const [dateFilter, setDateFilter] = useState();

    //Get all unique companies in transactions
    const companies = [];
    const values = Object.values(data);
    for (let i = 0; i < values.length; i++)
        if (!companies.includes(values[i]?.stockId))
            companies.push(values[i].stockId);

    let filteredData = data;
    filteredData = filteredData.filter((transaction) =>
        sellBuyFilter === ""
            ? transaction
            : sellBuyFilter === "buy"
            ? transaction.quantity > 0
            : transaction.quantity < 0
    );

    if (filteredCompanies.length > 0)
        filteredData = filteredData.filter((companyData) =>
            filteredCompanies.find((company) => company === companyData.stockId)
        );

    if (isLoading) return <Spinner />;
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <select
                        value={sellBuyFilter}
                        className="text-white bg-black px-2 py-1"
                        onChange={(e) => setSellBuyFilter(e.target.value)}
                    >
                        <option value="">All transactions</option>
                        <option value="buy">Buy transactions</option>
                        <option value="sell">Sell transactions</option>
                    </select>
                    <select
                        value={filteredCompanies}
                        className="text-white bg-black px-2 py-1"
                        onChange={(e) => {
                            filteredCompanies.find(
                                (company) => company === e.target.value
                            )
                                ? filteredCompanies.length === 1
                                    ? setFilteredCompanies([])
                                    : setFilteredCompanies((s) => [
                                          ...s.slice(
                                              0,
                                              s.indexOf(e.target.value)
                                          ),
                                          ...s.slice(
                                              s.indexOf(e.target.value) + 1
                                          ),
                                      ])
                                : setFilteredCompanies((s) => [
                                      ...s,
                                      e.target.value,
                                  ]);
                        }}
                        multiple
                    >
                        {companies.map((company) => (
                            <option key={company} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                </div>
                <Button
                    type="secondary"
                    onClick={() => setFilteredCompanies([])}
                >
                    RESET
                </Button>
            </div>
            {filteredData.length === 0 ? (
                <ContentBox>
                    <p>
                        Nothing to see here. Visit explore tab to make a
                        transaction
                    </p>
                </ContentBox>
            ) : (
                <ul>
                    {Object.values(filteredData)
                        .reverse()
                        .map((transaction, i) => (
                            <Transaction
                                key={i}
                                data={transaction}
                                number={data.length - i}
                            />
                        ))}
                </ul>
            )}
        </>
    );
}

export default TransactionList;
