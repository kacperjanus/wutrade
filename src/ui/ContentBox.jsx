function ContentBox({ className, dataTestId, children }) {
    return (
        <div
            className={`bg-[#282828] h-auto w-full mx-aut py-[30px] px-10 text-white rounded-sm ${className}`}
            data-testid={dataTestId}
        >
            {children}
        </div>
    );
}

export default ContentBox;
