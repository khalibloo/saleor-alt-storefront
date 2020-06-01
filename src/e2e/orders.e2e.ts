import { Selector, RequestMock } from "testcafe";
import page from "./orders.model.e2e";
import { ordersQuery } from "./orders.mock.e2e";
import { anonCartBadgeQuery } from "./index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = { ordersQuery, cartBadgeQuery: anonCartBadgeQuery };
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

fixture`Orders Page`.page`http://localhost:5000/orders`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows order items", async t => {
  await t.expect(page.orderListItems.count).eql(2);
});

test("shows 3 products per order", async t => {
  await t
    .expect(page.orderListItems.nth(0).find(".product-list-items").count)
    .eql(3);
  await t
    .expect(page.orderListItems.nth(1).find(".product-list-items").count)
    .eql(3);
});

test("shows product pagination if order has more than 3 products", async t => {
  await t
    .expect(page.orderListItems.nth(0).find(".ant-list-pagination").exists)
    .ok();
  await t
    .expect(page.orderListItems.nth(1).find(".ant-list-pagination").exists)
    .notOk();
});

test("has orders in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Orders");
});
