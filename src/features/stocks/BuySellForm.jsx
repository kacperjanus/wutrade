import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import toast from "react-hot-toast";

function BuySellForm({ company, price, isBuying }) {
    const { register, handleSubmit } = useForm();
    const [buy, setBuy] = useState(isBuying);
    const [totalPrice, setTotalPrice] = useState(0);

    function onSubmit({ noShares }) {
        if (buy) {
            //Check if user's balance allows for the trasaction

            //If yes, create new transaction in the database

            //If not, create error toast notification

            //If creating transaction is successful, update user's balance

            //Update user's portfolio

            //Send toast notification
            toast.success(`You just bought ${noShares} shares of ${company}`);

            //Close modal
        } else {
            //Check if users has that many shares as he wants to sell

            //If yes, create new transaction in the database

            //If not, create error toast notification

            //If creating transaction is successful, update user's balance

            //Update user's portfolio

            //Send toast notification
            toast.success(`You just sold ${noShares} shares of ${company}`);

            //Close modal
        }
    }

    function handleNumberOfSharesChange(e) {
        setTotalPrice(e.target.value * price);
    }

    return (
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
