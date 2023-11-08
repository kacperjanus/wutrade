function PrimaryButton({ onClick, children }) {
    return (
        <button
            className="rounded-md bg-blue-400 px-2 py-1 m-2 text-white"
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
