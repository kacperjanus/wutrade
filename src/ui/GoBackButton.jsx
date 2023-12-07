import { useNavigate } from "react-router-dom";
import Button from "./Button";

function GoBackButton() {
    const navigate = useNavigate();
    return (
        <div className="absolute mt-4 ml-4" onClick={() => navigate(-1)}>
            <Button type="secondary">GO BACK</Button>
        </div>
    );
}

export default GoBackButton;
