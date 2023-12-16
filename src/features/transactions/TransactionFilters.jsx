import Multiselect from "multiselect-react-dropdown";
import Button from "../../ui/Button";
import { useRef } from "react";

function TransactionFilters({
    companies,
    filteredCompanies,
    setSellBuyFilter,
    setFilteredCompanies,
    sellBuyFilter,
    setPage,
}) {
    const singleDropdown = useRef();
    const multiDropdown = useRef();

    const filtersActive =
        sellBuyFilter !== "" || filteredCompanies.length !== 0;
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex flex-row gap-2">
                    <Multiselect
                        // singleSelect={true}
                        selectionLimit={1}
                        displayValue="key"
                        className="bg-black text-black w-[12rem]"
                        placeholder="Select transactions"
                        hidePlaceholder={true}
                        options={[
                            { key: "All transactions", val: "" },
                            { key: "Buy transactions", val: "buy" },
                            { key: "Sell transactions", val: "sell" },
                        ]}
                        selectedValues={[{ key: "All transactions", val: "" }]}
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
                        className="bg-black text-black border-tranparent w-[12rem]"
                        isObject={false}
                        options={companies}
                        placeholder="Select companies"
                        hidePlaceholder={true}
                        onSelect={(selectedList, selectedItem) => {
                            setPage(1);
                            setFilteredCompanies((s) => s.concat(selectedItem));
                        }}
                        onRemove={(remainingList, removedItem) => {
                            filteredCompanies.length === 1
                                ? setFilteredCompanies([])
                                : setFilteredCompanies((s) => [
                                      ...s.slice(0, s.indexOf(removedItem)),
                                      ...s.slice(s.indexOf(removedItem) + 1),
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
        </>
    );
}

export default TransactionFilters;
