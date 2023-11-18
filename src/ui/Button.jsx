function Button({ onClick, type, className, children }) {
    return (
        <button
            className={[
                "rounded-md px-2 py-1 m-2 text-white",
                type === "primary" ? "bg-blue-400" : "",
                type === "secondary" ? "bg-blue-200 bg-opacity-30" : "",
                className,
            ].join(" ")}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
