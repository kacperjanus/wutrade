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
    const userData = queryClient.getQueryData(["user"]);

    const { data: globalQuote, isLoading } = useStockPrice({
        stockId: company,
    });

    const price =
        globalQuote?.["Global Quote - DATA DELAYED BY 15 MINUTES"]["02. open"];

    const navigate = useNavigate();

    const portfolio = usePortfolio();

    function onSubmit({ noShares }) {
        if (!noShares) return;
        if (buy) {
            //Check if user's balance allows for the trasaction
            if (totalPrice > userData.user_metadata.balance) {
                toast.error("Balance unsufficient");
                return;
            }

            //If yes, create new transaction in the database
            addTransaction({
                userId: userData.id,
                stockId: company,
                quantity: noShares,
                pricePerShare: price,
            });

            //If creating transaction is successful, update user's balance
            updateBalance(-totalPrice);

            //Send toast notification
            toast.success(`You just bought ${noShares} shares of ${company}`);

            //Close modal and redirect to /portfolio
            closeFunction();
            navigate("/portfolio");
        } else {
            //Check if users has that many shares as he wants to sell
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

            //If yes, create new transaction in the database
            addTransaction({
                userId: userData.id,
                stockId: company,
                quantity: -noShares,
                pricePerShare: price,
            });

            //If creating transaction is successful, update user's balance
            updateBalance(totalPrice);

            //Send toast notification
            toast.success(`You just sold ${noShares} shares of ${company}`);

            //Close modal and navigate to Portfolio page
            closeFunction();
            navigate("/portfolio");
        }
    }

    function handleNumberOfSharesChange(e) {
        setTotalPrice(e.target.value * price);
    }

    return isAddingTransaction || isUpdatingBalance || isLoading ? (
        <Spinner />
    ) : (
        <div className="flex flex-col">
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
