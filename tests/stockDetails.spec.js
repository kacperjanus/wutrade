import { test, expect, locator } from "@playwright/test";
import { differenceInDays, parse } from "date-fns";

test("user checks if NKE stock details page works correctly", async ({
    page,
}) => {
    //Load the page
    await page.goto("http://localhost:5173/");
    //User logs in
    await page.getByRole("link", { name: "Start investing" }).click();
    await page.getByRole("button", { name: "Log in here" }).click();
    //Check if the log in page has been loaded properly
    await expect(page.locator("#root")).toContainText("LOG IN");
    //User enters email
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill("kacperjanus8@gmail.com");
    //User enters password
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill("kacper");
    //User logs in
    await page.getByRole("button", { name: "Log in" }).click();
    //Check if dashboard has been loaded properly
    await expect(page.getByRole("banner")).toContainText("Hello Kacper");
    await expect(page.getByRole("main")).toContainText("Dashboard");
    await expect(
        page.getByText(
            "DashboardExplorePortfolioTransactionsWatchlistLeaderboardsAccountCopyright ©"
        )
    ).toBeVisible();
    //User searches for AAPL stock in the search bar
    await page.getByPlaceholder("Search symbol").click();
    await page.getByPlaceholder("Search symbol").fill("AAPL");
    await page.getByPlaceholder("Search symbol").press("Enter");
    //Check for AAPL header
    await expect(page.getByTestId("company-header")).toContainText(
        "Apple Inc (AAPL)"
    );

    //Check for correct number of owned shares - 6
    await expect(page.getByTestId("company-header")).toContainText(
        "You own 6 shares"
    );

    //Check for overview elements
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Overview"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Asset type"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Exchange"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Sector"
    );

    //Check graph and time intervals
    await expect(page.getByTestId("price-graph-container")).toContainText(
        "PriceVolume"
    );
    await page.getByRole("combobox").selectOption({ label: "1 week" });
    await page.goto("http://localhost:5173/");
    await page.waitForSelector("tspan");
    const xAxisTicks = (await page.locator("tspan").all()).slice(0, -10);
    const firstTick = xAxisTicks[0];
    const lastTick = xAxisTicks[xAxisTicks.length - 1];
    const firstTickText = await firstTick.textContent();
    const lastTickText = await lastTick.textContent();
    console.log(firstTickText);
    console.log(lastTickText);
    const daysOnGraph = differenceInDays(
        parse(lastTickText, "yyyy-MM-dd", new Date()),
        parse(firstTickText, "yyyy-MM-dd", new Date())
    );
    console.log(daysOnGraph);
    if (daysOnGraph > 9 && daysOnGraph < 7) throw new Error();

    await page.getByRole("combobox").selectOption({ label: "1 month" });
    await page.waitForSelector("tspan");
    const xAxisTicksMonth = (await page.locator("tspan").all()).splice(0, -10);
    console.log(xAxisTicksMonth);
    const firstTickMonth = xAxisTicksMonth[0];
    const lastTickMonth = xAxisTicksMonth[xAxisTicksMonth.length - 1];
    console.log(firstTickMonth);
    console.log(lastTickMonth);
    const firstTickTextMonth = await firstTickMonth.textContent();
    const lastTickTextMonth = await lastTickMonth.textContent();
    const daysOnGraphMonth = differenceInDays(
        parse(lastTickTextMonth, "yyyy-MM-dd", new Date()),
        parse(firstTickTextMonth, "yyyy-MM-dd", new Date())
    );
    if (daysOnGraphMonth > 32 && daysOnGraphMonth < 27) throw new Error();

    await page.getByRole("combobox").selectOption({ label: "6 months" });

    await page.getByRole("combobox").selectOption({ label: "1 year" });

    await page.getByRole("combobox").selectOption({ label: "5 years" });

    await page.getByRole("combobox").selectOption({ label: "All" });

    //Check financials
    await expect(page.getByTestId("financials-container")).toContainText(
        "Financials"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "Market capitalization"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "52-week-high"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "Profit margin"
    );

    //Check dividend
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Next dividend date"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend per share"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend yield"
    );

    //User searches for MSFT stock in the search bar
    await page.getByPlaceholder("Search symbol").click();
    await page.getByPlaceholder("Search symbol").fill("MSFT");
    await page.getByPlaceholder("Search symbol").press("Enter");
    //Check for MSFT header
    await expect(page.getByTestId("company-header")).toContainText(
        "Microsoft Corporation (MSFT)"
    );

    //TODO check if the data is different from AAPL stock
    //Check for correct number of owned shares - 0
    await expect(page.getByTestId("company-header")).toContainText(
        "You don't own any shares"
    );

    //Check for overview elements
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Overview"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Asset type"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Exchange"
    );
    await expect(page.getByTestId("company-overview-container")).toContainText(
        "Sector"
    );

    //Check graph

    //Check financials
    await expect(page.getByTestId("financials-container")).toContainText(
        "Financials"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "Market capitalization"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "52-week-high"
    );
    await expect(page.getByTestId("financials-container")).toContainText(
        "Profit margin"
    );

    //Check dividend
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Next dividend date"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend per share"
    );
    await expect(page.getByTestId("dividend-container")).toContainText(
        "Dividend yield"
    );

    //User logs out
    await page.getByRole("button", { name: "Log out" }).click();
    //Check if the log out was successful
    await expect(page.locator("#root")).toContainText("LOG IN");
});
