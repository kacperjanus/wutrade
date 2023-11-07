function Header() {
    return (
        <header className="bg-red-500 py-[1.2rem] px-[3.6rem] gap-[2.4rem] border-b-1 items-center justify-end grid grid-cols-[1fr,1fr,auto,auto]">
            <h1>Hello XYZ</h1>
            <input
                className="w-60 focus:w-80 transition-width ease-in-out duration-300 justify-self-end rounded-full px-3 py-2"
                placeholder="Search"
            ></input>
            <h1>Balance: XXX</h1>
            <button>Log out</button>
        </header>
    );
}

export default Header;
