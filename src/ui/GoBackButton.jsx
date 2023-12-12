import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";

function GoBackButton() {
    const navigate = useNavigate();
    return (
        <div className="absolute mt-4 ml-4" onClick={() => navigate("/")}>
            <Button type="secondary">
                <HiOutlineArrowCircleLeft color="white" size={25} />
            </Button>
        </div>
    );
}

export default GoBackButton;
