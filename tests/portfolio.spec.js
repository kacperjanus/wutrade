import { test, expect } from "@playwright/test";

test("user goes to portfolio tab, buys and sells 2 shares of T stock", async ({
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
    //User moves to Portfolio tab
    await page.getByRole("link", { name: "Portfolio" }).click();
    //Check if Portfolio tab has been loaded properly and user has 224 shares of AT&T
    await expect(page.getByRole("main")).toContainText("Portfolio");
    await expect(page.getByText("T - ")).toContainText("224 shares");
    //Users buys 2 shares of AT&T
    await page
        .locator("li")
        .filter({ hasText: "T - 224 shares" })
        .getByRole("button")
        .first()
        .click();
    await page.getByRole("spinbutton").fill("2");
    await page.getByRole("button", { name: "Submit" }).click();
    //Check if user now has 226 shares of AT&T
    await expect(page.getByText("T - ")).toContainText("226 shares");
    //User sells 2 shares of AT&T
    await page
        .locator("li")
        .filter({ hasText: "T - 226 shares" })
        .getByRole("button")
        .nth(1)
        .click();
    await page.getByRole("spinbutton").fill("2");
    await page.getByRole("button", { name: "Submit" }).click();
    //Check if user now has 224 shares of AT&T
    await expect(page.getByRole("main")).toContainText("T - 224 shares", {
        timeout: 10000,
    });
    //User logs out
    await page.getByRole("button", { name: "Log out" }).click();
    //Check if the log out was successful
    await expect(page.locator("#root")).toContainText("LOG IN");
});
