import { test, expect } from "@playwright/test";

test("users add MA to watchlist from stock details page and removes it from watchlist tab", async ({
    page,
}) => {
    //Load the page
    await page.goto("http://localhost:5173/");
    //User moves to login form
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
    //User searches for MA stock in the search bar
    await page.getByPlaceholder("Search symbol").click();
    await page.getByPlaceholder("Search symbol").fill("MA");
    await page.getByPlaceholder("Search symbol").press("Enter");
    //Check if MA Stock details page has been loaded
    await expect(page.getByRole("main")).toContainText("Mastercard Inc (MA)", {
        timeout: 10000,
    });
    //Check if AddToWatchlist Heart button is just an outline
    await expect(page.getByTestId("heart-outline")).toBeVisible();

    //User adds MA to his watchlist
    await page.getByRole("button").nth(2).click();

    //Check if AddToWatchlist Heart button is filled out
    await expect(page.getByTestId("heart-button")).toBeVisible();

    //User goes to Watchlist Tab
    await page.getByRole("link", { name: "Watchlist" }).click();
    //Check if MA is listed on user's watchlist
    await expect(page.getByRole("main")).toContainText("MA -");
    //User hovers over MA in his watchlist
    await page.locator("li").filter({ hasText: "MA - " }).hover();

    //User removes MA from his watchlist by clicking Trash button
    await page
        .locator("li")
        .filter({ hasText: "MA - " })
        .getByRole("button")
        .first()
        .click();
    //Check if MA is no longer in user's watchlist
    await expect(
        page.locator("li").filter({ hasText: "MA - " })
    ).not.toBeVisible();
    //User searches for MA stock in the search bar
    await page.getByPlaceholder("Search symbol").click();
    await page.getByPlaceholder("Search symbol").fill("MA");
    await page.getByPlaceholder("Search symbol").press("Enter");
    //Check if the AddToWatchlist Heart icon is just an outline
    await expect(page.getByTestId("heart-outline")).toBeVisible();

    //User logs out
    await page.getByRole("button", { name: "Log out" }).click();
    //Check if the log out was successful
    await expect(page.locator("#root")).toContainText("LOG IN");
});
