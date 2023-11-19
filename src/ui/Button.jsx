function Button({ onClick, type, className, disabled, children }) {
    return (
        <button
            className={[
                "rounded-md px-2 py-1 m-2 text-white",
                type === "primary" ? "bg-blue-400" : "",
                type === "secondary"
                    ? "bg-blue-300 bg-opacity-30 hover:bg-opacity-100 transition duration-500 ease-in-out"
                    : "",
                className,
            ].join(" ")}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
