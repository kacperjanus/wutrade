import { useQueryClient } from "@tanstack/react-query";
import { useSignOut } from "../features/authentication/useSignout";
import PrimaryButton from "./Button";
import { formatCurrency } from "../utils/helpers";
import FullSpinner from "./FullSpinner";
import SeachBar from "./SearchBar";
import { useEffect } from "react";

function Header() {
    const { signOut, isLoading } = useSignOut();
    const queryClient = useQueryClient();

    const data = queryClient.getQueryData(["user"]);

    return (
        <header className="bg-[#282828] py-5 px-14 gap-10 border-b-1 items-center justify-end grid grid-cols-[1fr,1fr,auto,auto]">
            {isLoading ? <FullSpinner /> : ""}
            <h1 className="text-white">
                Hello {data?.user_metadata.firstName}
            </h1>
            <SeachBar />
            <h1 className="text-white">
                Balance: {formatCurrency(data?.user_metadata.balance)}
            </h1>
            <PrimaryButton type="secondary" onClick={() => signOut()}>
                Log out
            </PrimaryButton>
        </header>
    );
}

export default Header;
