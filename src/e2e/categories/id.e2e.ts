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
  .page`http://localhost:5000/categories/Q2F0ZWdvcnk6MTQ=`.requestHooks(mock);

test("loads initial page without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("fetches query and shows category name", async t => {
  await t.expect((await page.title.innerText).toLowerCase()).eql("juices");
});

test("shows filters column", async t => {
  await t.expect(page.filtersCol.textContent).contains("Filters");
});

test("has category name in title", async t => {
  await t
    .expect((await Selector("head").find("title").textContent).toLowerCase())
    .contains("juices");
});
