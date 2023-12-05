import { useState } from "react";
import Modal from "../../ui/Modal";
import BuySellForm from "./BuySellForm";
import { useStockPrice } from "../transactions/useStockPrice";

function BuySellButtons({ company }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isBuying, setIsBuying] = useState(false);

    const { data, isLoading: isLoadingPrice } = useStockPrice({
        stockId: company,
    });

    const price =
        data?.["Global Quote - DATA DELAYED BY 15 MINUTES"]?.["02. open"];

    const changeModal = () => setIsOpenModal((s) => !s);

    const handleBuy = () => {
        setIsBuying(true);
        changeModal();
    };

    const handleSell = () => {
        setIsBuying(false);
        changeModal();
    };

    //TODO make button disabled based on the fact if the market is open
    return (
        <div className="text-white ml-auto mr-2 flex flex-row gap-2">
            <button
                onClick={handleBuy}
                className="bg-green-500 bg-opacity-60 rounded-lg py-1 px-4"
            >
                Buy
            </button>
            <button
                onClick={handleSell}
                className="bg-red-500 bg-opacity-60 rounded-lg py-1 px-4"
            >
                Sell
            </button>

            {isOpenModal && (
                <Modal closeFunction={changeModal}>
                    <BuySellForm
                        company={company}
                        price={price}
                        isBuying={isBuying}
                        closeFunction={changeModal}
                    />
                </Modal>
            )}
        </div>
    );
}

export default BuySellButtons;
