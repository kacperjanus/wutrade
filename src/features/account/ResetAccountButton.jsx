import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

function ResetAccountButton({ updateBalance, resetAccount, user }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    let myTimeout;

    //TODO cancel timer when modal is closed before button is clickable
    const changeModal = () => {
        if (isOpenModal === false) {
            myTimeout = setTimeout(() => setDisabledButton(false), 3000);
            console.log("HERE");
        } else {
            clearTimeout(myTimeout);
            setDisabledButton(true);
        }
        setIsOpenModal((s) => !s);
    };

    function handleResetAccount() {
        //Reset balance
        updateBalance(200000 - user.user_metadata.balance);
        resetAccount(user.id);
    }

    return (
        <div className="flex justify-center">
            <Button onClick={changeModal} type="danger" className={"w-[120px]"}>
                Reset account
            </Button>
            {isOpenModal && (
                <Modal closeFunction={changeModal}>
                    <div className="items-center justify-center flex flex-col">
                        <p className="text-center text-white">
                            Are you sure you want to reset your account?
                        </p>
                        <p className="text-center text-white">
                            This action cannot be undone
                        </p>
                        <Button
                            disabled={disabledButton}
                            type={disabledButton ? "disabled" : "danger"}
                            onClick={handleResetAccount}
                        >
                            Reset account
                        </Button>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default ResetAccountButton;
