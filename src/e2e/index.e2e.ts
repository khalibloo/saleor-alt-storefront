import { Selector, RequestMock } from "testcafe";
import page from "./index.model.e2e";
import { homePageQuery, anonCartBadgeQuery } from "./index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = { homePageQuery, cartBadgeQuery: anonCartBadgeQuery };
    const opName = JSON.parse(req.body?.toString()).operationName;
    const mockData = opMap[opName];
    if (!mockData) {
      console.error(`Missing mock data for ${opName}`);
    }
    res.setBody(mockData);
    res.statusCode = 200;
    res.headers = {
      ...res.headers,
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    };
  });

fixture`Home Page`.page`http://localhost:5000`.requestHooks(mock);

test("loads initial page without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("fetches query and shows banner text", async t => {
  await t
    .expect((await page.bannerTitle.innerText).toLowerCase())
    .eql("summer collection");
});

test("shows 4 fetched products on desktop", async t => {
  await t
    .resizeWindow(1536, 864)
    .expect(page.productListItems.count)
    .eql(4);
});

test("shows 3 fetched products on ipad portrait", async t => {
  await t
    .resizeWindowToFitDevice("ipad", { portraitOrientation: true })
    .expect(page.productListItems.count)
    .eql(3);
});

test("shows 2 fetched products on iphone6 landscape", async t => {
  await t
    .resizeWindowToFitDevice("iphone6", { portraitOrientation: false })
    .expect(page.productListItems.count)
    .eql(2);
});

test("shows 1 fetched product on iphone6 portrait", async t => {
  await t
    .resizeWindowToFitDevice("iphone6", { portraitOrientation: true })
    .expect(page.productListItems.count)
    .eql(1);
});

test('is titled "Alt Storefront"', async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Alt Storefront");
});

test("shows welcome message", async t => {
  await t.expect(page.welcomeMsg.innerText).contains("Welcome");
});
