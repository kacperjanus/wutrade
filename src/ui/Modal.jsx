function Modal({ closeFunction, children }) {
    return (
        <div
            onClick={closeFunction}
            className="fixed top-0 left-0 bg-slate-400 w-full h-screen backdrop-blur-sm z-[1000] bg-opacity-10"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="fixed top-1/2 left-1/2 bg-slate-500 rounded-lg px-16 py-14 shadow-xl -translate-x-1/2 -translate-y-1/2"
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
