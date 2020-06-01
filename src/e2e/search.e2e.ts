import { Selector, RequestMock } from "testcafe";
import page from "./search.model.e2e";
import {
  collectionsQuery,
  categoryTreeQuery,
  ProductsQuery,
} from "./search.mock.e2e";
import { anonCartBadgeQuery } from "./index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = {
      collectionsQuery,
      categoryTreeQuery,
      ProductsQuery,
      cartBadgeQuery: anonCartBadgeQuery,
    };
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

fixture`Search Page`.page`http://localhost:5000/search?q=juice`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows search query in search field", async t => {
  await t.expect(page.searchFld.value).eql("juice");
});

test("shows search query as subheading", async t => {
  await t.expect(page.pageSubheading.innerText).contains("juice");
});

test("shows search result items", async t => {
  await t.expect(page.productListItems.count).eql(9);
});

test("shows filters column on default screen", async t => {
  await t
    .takeScreenshot("./blah.png")
    .expect(page.filtersCol.visible)
    .ok()
    .expect(page.filtersBtn.exists)
    .notOk();
});

test("doesn't show filters column on mobile", async t => {
  await t
    .resizeWindowToFitDevice("iphone6", { portraitOrientation: true })
    .expect(page.filtersCol.visible)
    .notOk()
    .expect(page.filtersBtn.exists)
    .ok();
});

test("shows categories filter panel", async t => {
  await t.expect(page.catsFiltersPanel.exists).ok();
});

test("shows collection filter panel", async t => {
  await t.expect(page.collsFiltersPanel.exists).ok();
});

test("has search in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Search");
});

test.page(`http://localhost:5000/404`)(
  "navigating away clears search field",
  async t => {
    await t.expect(page.searchFld.value).eql("");
  },
);
