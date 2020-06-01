import { Selector, RequestMock } from "testcafe";
import page from "./id.model.e2e";
import {
  categoryDetailQuery,
  collectionsQuery,
  categoryTreeQuery,
  ProductsQuery,
} from "./id.mock.e2e";
import { anonCartBadgeQuery } from "../index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = {
      categoryDetailQuery,
      cartBadgeQuery: anonCartBadgeQuery,
      collectionsQuery,
      categoryTreeQuery,
      ProductsQuery,
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

fixture`Category Detail Page`
  .page`http://localhost:5000/categories/Q2F0ZWdvcnk6MTQ=`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads initial page without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("fetches query and shows category name", async t => {
  await t.expect((await page.title.innerText).toLowerCase()).eql("juices");
});

test("shows filters column on default screen", async t => {
  await t
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

test("hides categories filter panel", async t => {
  await t.expect(page.catsFiltersPanel.exists).notOk();
});

test("shows collection filter panel", async t => {
  await t.expect(page.collsFiltersPanel.exists).ok();
});

test("has category name in title", async t => {
  await t
    .expect((await Selector("head").find("title").textContent).toLowerCase())
    .contains("juices");
});
