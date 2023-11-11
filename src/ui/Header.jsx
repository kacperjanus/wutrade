import { useQuery } from "@tanstack/react-query";
import { useSignOut } from "../features/authentication/useSignout";
import { getCurrentUser } from "../services/apiAuth";
import PrimaryButton from "./PrimaryButton";
import { formatCurrency } from "../utils/helpers";
import Spinner from "./Spinner";

function Header() {
    const { signOut, isLoading } = useSignOut();

    const { data } = useQuery(["user"], () => getCurrentUser);

    return (
        <header className="bg-red-500 py-[1.2rem] px-[3.6rem] gap-[2.4rem] border-b-1 items-center justify-end grid grid-cols-[1fr,1fr,auto,auto]">
            {isLoading ? <Spinner /> : ""}
            <h1>Hello {data?.firstName}</h1>
            <input
                className="w-60 focus:w-80 transition-width ease-in-out duration-300 justify-self-end rounded-full px-3 py-2"
                placeholder="Search"
            ></input>
            <h1>Balance: {formatCurrency(data?.balance)}</h1>
            <PrimaryButton onClick={() => signOut()}>Log out</PrimaryButton>
        </header>
    );
}

export default Header;
