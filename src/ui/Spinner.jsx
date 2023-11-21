import ContentBox from "./ContentBox";

function Spinner() {
    return (
        <ContentBox>
            <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600  top-2/4 left-2/4" />
        </ContentBox>
    );
}

export default Spinner;
