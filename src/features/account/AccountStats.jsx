import ContentBox from "../../ui/ContentBox";

function AccountStats() {
    return (
        <ContentBox>
            <p className="font-bold">Account statistics</p>
            <p>Highest transaction: </p>
            <p>Profit made: </p>
            <p>Most often traded stock: </p>
            <p>Number of stocks in portfolio: </p>
            <p>Average transaction price: </p>
            <p>Cash reserve percentage: </p>
        </ContentBox>
    );
}

export default AccountStats;
