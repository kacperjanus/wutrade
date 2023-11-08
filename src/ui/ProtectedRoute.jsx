import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
    const { isAuthenticated, isLoading } = useUser();
    const navigate = useNavigate();

    useEffect(
        function () {
            if (!isAuthenticated && !isLoading) navigate("/login");
        },
        [navigate, isAuthenticated, isLoading]
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;
