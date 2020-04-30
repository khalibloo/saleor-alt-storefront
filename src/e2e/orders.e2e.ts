import { Selector } from "testcafe";
import page from "./orders.model.e2e";

fixture`Orders Page`.page`http://localhost:5000/orders`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows order items", async t => {
  await t.expect(page.orderListItems.count).eql(2);
});

test("has orders in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Orders");
});
