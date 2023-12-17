import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import toast from "react-hot-toast";
import { useNewTransaction } from "../transactions/useNewTransaction";
import { useQueryClient } from "@tanstack/react-query";
import { useUpdatedBalance } from "../transactions/useUpdatedBalance";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import { usePortfolio } from "../portfolio/usePortfolio";
import { useStockPrice } from "../transactions/useStockPrice";

function BuySellForm({ company, isBuying, closeFunction }) {
    const { register, handleSubmit } = useForm();
    const [buy, setBuy] = useState(isBuying);
    const [totalPrice, setTotalPrice] = useState(0);

    const { addTransaction, isLoading: isAddingTransaction } =
        useNewTransaction();
    const { updateBalance, isLoading: isUpdatingBalance } = useUpdatedBalance();

    const queryClient = useQueryClient();
    const { userMetadata } = queryClient.getQueryData(["user"]);

    const { data: globalQuote, isLoading } = useStockPrice({
        stockId: company,
    });

    const price =
        globalQuote?.["Global Quote - DATA DELAYED BY 15 MINUTES"]["02. open"];

    const navigate = useNavigate();

    const { portfolio } = usePortfolio();

    function onSubmit({ noShares }) {
        //Check if number of shares field is filled out
        if (!noShares || noShares === "0") return;

        //If user is buying, check if his balance allows for the transaction
        //If the user is selling, check if his portfolio has enough shares
        if (buy) {
            if (totalPrice > userMetadata.balance) {
                toast.error("Balance unsufficient");
                return;
            }
        } else {
            const portfolioContainsCompany = portfolio.find(
                (c) => c.company === company
            );
            if (
                !portfolioContainsCompany ||
                noShares > portfolioContainsCompany.noShares
            ) {
                toast.error("You don't own that many shares");
                return;
            }
        }

        //Create new transaction in a database
        addTransaction({
            userId: userMetadata.user_id,
            stockId: company,
            quantity: buy ? noShares : -noShares,
            pricePerShare: price,
        });

        //Update user's balance
        updateBalance(buy ? -totalPrice : totalPrice);

        //Display toast noticiation
        toast.success(
            `You just ${
                buy ? "bought" : "sold"
            } ${noShares} shares of ${company}`
        );

        //Close the modal and navigate to portfolio tab
        closeFunction();
        navigate("/portfolio");
    }

    function handleNumberOfSharesChange(e) {
        setTotalPrice(e.target.value * price);
    }

    return isAddingTransaction || isUpdatingBalance || isLoading ? (
        <Spinner className={"bg-transparent"} />
    ) : (
        <div className="flex flex-col w-96 h-72 mb-10">
            <div className="flex flex-row justify-between items-center">
                <p className="text-2xl">{buy ? "Buy" : "Sell"} stocks</p>
                <Button onClick={() => setBuy((s) => !s)} type="secondary">
                    {buy ? "Sell" : "Buy"}
                </Button>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        fieldName="company"
                        label="Company"
                        registerFunction={register}
                        defaultValue={company}
                        disabled={true}
                    />
                    <InputField
                        fieldName="price"
                        label="Price"
                        registerFunction={register}
                        defaultValue={formatCurrency(price)}
                        disabled={true}
                    />
                    <InputField
                        fieldName="noShares"
                        label="Number of shares"
                        registerFunction={register}
                        onChangeFunction={handleNumberOfSharesChange}
                        type="number"
                    />
                    <p>{`Total price of transaction: ${formatCurrency(
                        totalPrice
                    )}`}</p>
                    <Button type="primary">Submit</Button>
                </form>
            </div>
        </div>
    );
}

export default BuySellForm;
