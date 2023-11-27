import { HiArrowCircleRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function GoToStockButton({ company }) {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`/explore/${company}`)}>
            <HiArrowCircleRight size={30} color="#0ea5e9" />
        </button>
    );
}

export default GoToStockButton;
