import ContentBox from "../../ui/ContentBox";

function CompanyOverview({ data }) {
    return (
        <ContentBox>
            <span className="font-bold">Overview</span>
            <div className="flex flex-col">
                <span className="mb-5">{data.Description}</span>
                <span>Asset type: {data.AssetType}</span>
                <span>Exchange: {data.Exchange}</span>
                <span>Sector: {data.Sector}</span>
            </div>
        </ContentBox>
    );
}

export default CompanyOverview;
