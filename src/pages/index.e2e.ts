import "expect-playwright";
// import { firefox } from "playwright";

describe("Home Page", () => {
  // let browser, context, page;

  beforeAll(async () => {
    // browser = await firefox.launch();
    // context = await browser.newContext();
    // page = await context.newPage();
    await page.goto("http://localhost:4444");
  });

  it("should load without error", async () => {
    // let text = await page.evaluate(() => document.body.textContent);
    // expect(text).toContain("Alt Storefront");
    //using expect-playwright to perform the above
    await expect(page).toHaveText("#root", "Alt Storefront");
  });

  it('should be titled "Alt Storefront"', async () => {
    await expect(page.title()).resolves.toContain("Alt Storefront");
  });

  afterAll(async () => {
    await browser.close();
  });
});
