// import { firefox } from "playwright";
import "expect-playwright";

describe("Home Page", () => {
  // let browser, context, page;

  beforeAll(async () => {
    // console.log(page);
    // browser = await firefox.launch();
    // context = await browser.newContext();
    // page = await context.newPage();
    await page.goto("http://localhost:4444");
  });

  it("should load without error", async () => {
    // let text = await page.evaluate(() => document.body.textContent);
    // expect(text).toContain("Alt Storefront");
    await expect(page).toHaveText("#root", "Alt Storefront");
  });

  it('should be titled "Alt Storefront"', async () => {
    await expect(page.title()).resolves.toContain("Alt Storefront");
  });

  afterAll(async () => {
    await browser.close();
  });
});
