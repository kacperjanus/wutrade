import { test, expect } from "@playwright/test";

test("user makes first transaction, appears on the leaderboard and resets the account", async ({
    page,
}) => {
    //Load the page
    await page.goto("http://localhost:5173/");

    //User signs up
    await page.getByRole("link", { name: "Start investing" }).click();
    await page.locator('input[name="firstName"]').click();
    await page.locator('input[name="firstName"]').fill("Casper");
    await page.locator('input[name="firstName"]').press("Tab");
    await page.locator('input[name="lastName"]').fill("Seabiscuit");
    await page.locator('input[name="lastName"]').press("Tab");
    await page.locator('input[name="email"]').fill("c.seabiscuit@gmail.com");
    await page.locator('input[name="email"]').press("Tab");
    await page.locator('input[name="password"]').fill("kacper");
    await page.locator('input[name="password"]').press("Tab");
    await page.locator('input[name="confirmPassword"]').fill("kacper");
    await page.getByRole("button", { name: "Register" }).click();

    //Check if the Explore tab has been loaded properly
    await expect(page.getByRole("main")).toContainText("Explore");

    //Check if the balance is $200,000
    await expect(page.getByRole("banner")).toContainText(
        "Balance: $200,000.00"
    );

    //Check if diplayed name is correct
    await expect(page.getByRole("banner")).toContainText("Hello Casper");

    //Check if there is no such first and last name in the leaderboards
    await page.getByRole("link", { name: "Leaderboards" }).click();
    await expect(page.getByTestId("leaderboards-container")).not.toContainText(
        "Seabiscuit",
        { timeout: 20000 }
    );

    //Go to AAPL stock and buy 5 shares
    await page.getByPlaceholder("Search symbol").click();
    await page.getByPlaceholder("Search symbol").fill("AAPL");
    await page.getByPlaceholder("Search symbol").press("Enter");
    await page.getByRole("button", { name: "Buy" }).click();
    await page.getByRole("spinbutton").click();
    await page.getByRole("spinbutton").fill("5");
    await page.getByRole("button", { name: "Submit" }).click();

    //Check if user's portfolio contains 5 AAPL shares
    await expect(page.getByRole("main")).toContainText("AAPL - 5 shares");

    //Go to Leaderboard tab
    await page.getByRole("link", { name: "Leaderboards" }).click();
    await page.goto("http://localhost:5173/leaderboards");

    //Check if the leaderboards tab has been loaded properly
    await expect(page.getByRole("main")).toContainText("Leaderboards");

    //Check if user's first and last name now appears on the leaderboard
    await expect(page.getByRole("main")).toContainText("Seabiscuit", {
        timeout: 20000,
    });

    //Go to account tab
    await page.getByRole("link", { name: "Account" }).click();

    //Check if the account tab has been loaded properly
    await expect(page.getByRole("main")).toContainText("Account");

    //Check the account statistics
    await expect(page.getByRole("main")).toContainText(
        "Most often traded stock: 1 for AAPL"
    );

    //User click button to reset the account
    await page.getByRole("button", { name: "Reset account" }).click();
    await page
        .getByRole("button", { name: "Reset account" })
        .nth(1)
        .click({ timeout: 10000 });

    //Check if leaderboards doesn't contain user's first and last name anymore
    await page.getByRole("link", { name: "Leaderboards" }).click();
    await page.goto("http://localhost:5173/leaderboards");
    await expect(page.getByTestId("leaderboards-container")).not.toContainText(
        "Seabiscuit",
        { timeout: 20000 }
    );

    //Log out
    await page.getByRole("button", { name: "Log out" }).click();

    //Check if logging out was successful
    await expect(page.locator("#root")).toContainText("LOG IN");
});
