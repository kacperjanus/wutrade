import { useRef, useState } from "react";
import ContentBox from "../../ui/ContentBox";
import Spinner from "../../ui/Spinner";
import Transaction from "./Transaction";
import { useTransactions } from "./useTransactions";
import Button from "../../ui/Button";
import PageSelector from "../../ui/PageSelector";
import { ITEMS_PER_PAGE } from "../../utils/constants";
import Multiselect from "multiselect-react-dropdown";

function TransactionList() {
    const { data, isLoading } = useTransactions();

    //Allows for filtering out just buy or sell orders
    const [sellBuyFilter, setSellBuyFilter] = useState("");
    //Allows for filtering transaction to those including
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    //Allows for filtering transactions by dates
    const [dateFilter, setDateFilter] = useState();

    const filtersActive =
        sellBuyFilter !== "" || filteredCompanies.length !== 0;

    const singleDropdown = useRef();
    const multiDropdown = useRef();

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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-2">
                        <Multiselect
                            // singleSelect={true}
                            selectionLimit={1}
                            displayValue="key"
                            className="bg-black text-black"
                            placeholder="Select transactions"
                            hidePlaceholder={true}
                            options={[
                                { key: "All transactions", val: "" },
                                { key: "Buy transactions", val: "buy" },
                                { key: "Sell transactions", val: "sell" },
                            ]}
                            selectedValues={[
                                { key: "All transactions", val: "" },
                            ]}
                            onSelect={(selectItem) => {
                                setPage(1);
                                setSellBuyFilter(selectItem[0].val);
                            }}
                            onRemove={() => {
                                sellBuyFilter !== "" && setSellBuyFilter("");
                            }}
                            ref={singleDropdown}
                        />
                        <Multiselect
                            className="bg-black text-black border-tranparent"
                            isObject={false}
                            options={companies}
                            placeholder="Select companies"
                            hidePlaceholder={true}
                            onSelect={(selectedList, selectedItem) => {
                                setPage(1);
                                setFilteredCompanies((s) =>
                                    s.concat(selectedItem)
                                );
                            }}
                            onRemove={(remainingList, removedItem) => {
                                filteredCompanies.length === 1
                                    ? setFilteredCompanies([])
                                    : setFilteredCompanies((s) => [
                                          ...s.slice(0, s.indexOf(removedItem)),
                                          ...s.slice(
                                              s.indexOf(removedItem) + 1
                                          ),
                                      ]);
                            }}
                            ref={multiDropdown}
                        />
                    </div>
                    {filtersActive && (
                        <Button
                            type="secondary"
                            onClick={() => {
                                singleDropdown.current.resetSelectedValues();
                                multiDropdown.current.resetSelectedValues();
                                setSellBuyFilter("");
                                setFilteredCompanies([]);
                            }}
                        >
                            RESET
                        </Button>
                    )}
                </div>
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
