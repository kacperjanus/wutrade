import { useSignOut } from "../features/authentication/useSignout";
import PrimaryButton from "./Button";
import { formatCurrency } from "../utils/helpers";
import FullSpinner from "./FullSpinner";
import SeachBar from "./SearchBar";

function Header({ user }) {
    const { signOut, isLoading } = useSignOut();

    return (
        <header className="bg-[#282828] py-5 px-14 gap-10 border-b-1 items-center justify-end grid grid-cols-[1fr,1fr,auto,auto]">
            {isLoading ? <FullSpinner /> : ""}
            <h1 className="text-white">
                Hello {user?.user_metadata.firstName}
            </h1>
            <SeachBar />
            <h1 className="text-white">
                Balance: {formatCurrency(user?.user_metadata.balance)}
            </h1>
            <PrimaryButton type="secondary" onClick={() => signOut()}>
                Log out
            </PrimaryButton>
        </header>
    );
}

export default Header;
