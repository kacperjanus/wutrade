import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function SeachBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSubmit(e) {
        navigate(`/explore/${search}`);
        setSearch("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="w-40 focus:w-60 transition-width ease-in-out duration-300 justify-self-end rounded-full px-3 py-2 outline-none"
                placeholder="Search"
                value={search.toUpperCase()}
                onChange={(e) => setSearch(e.target.value)}
            ></input>
        </form>
    );
}

export default SeachBar;
