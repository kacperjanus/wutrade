import { ITEMS_PER_PAGE } from "../utils/constants";
import Button from "./Button";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

function PageSelector({ page, setPage, length }) {
    const lastPage = Math.floor(length / ITEMS_PER_PAGE + 1);
    return (
        <div className="flex flex-row justify-between items-center">
            {page === 1 ? (
                <p> </p>
            ) : (
                <Button
                    type="secondary"
                    onClick={() => setPage((page) => page - 1)}
                >
                    <HiArrowNarrowLeft />
                    {page - 1}
                </Button>
            )}
            <p>{page}</p>
            {page === lastPage ? (
                <p> </p>
            ) : (
                <Button
                    type="secondary"
                    onClick={() => setPage((page) => page + 1)}
                >
                    {page + 1}
                    <HiArrowNarrowRight />
                </Button>
            )}
        </div>
    );
}

export default PageSelector;
