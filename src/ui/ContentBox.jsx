function ContentBox({ className, children }) {
    return (
        <div
            className={`bg-[#282828] h-auto w-full mx-aut py-[30px] px-10 text-white rounded-sm ${className}`}
        >
            {children}
        </div>
    );
}

export default ContentBox;
