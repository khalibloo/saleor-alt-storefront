import { Selector } from "testcafe";
import page from "./cart.model.e2e";

fixture`Cart Page`.page`http://localhost:5000/cart`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows summary card", async t => {
  await t.expect(page.summaryCard.innerText).contains("Summary");
});

test("has cart in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Cart");
});
