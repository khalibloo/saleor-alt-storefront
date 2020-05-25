import { Selector, RequestMock } from "testcafe";
import page from "./cart.model.e2e";
import { cartQuery } from "./cart.mock.e2e";
import { profileQuery } from "./profile.mock.e2e";
import { anonCartBadgeQuery } from "./index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = {
      cartQuery,
      profileQuery,
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

fixture`Cart Page`.page`http://localhost:5000/cart`.requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows cart items", async t => {
  await t.expect(page.productListItems.count).eql(4);
});

test("shows summary card", async t => {
  await t.expect(page.summaryCard.innerText).contains("Summary");
});

test("has cart in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Cart");
});
