function FullSpinner() {
    return (
        <div className="absolute bg-opacity-[0.2] top-0 right-0 left-0 bottom-0 bg-white">
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 absolute top-2/4 left-2/4" />
        </div>
    );
}

export default FullSpinner;
