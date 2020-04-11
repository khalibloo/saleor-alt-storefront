import { Selector } from "testcafe";
import page from "./id.model.e2e";

fixture`Product Detail Page`.page`http://localhost:5000/products/1`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows product details", async t => {
  await t.expect(page.name.innerText).contains("Sample Product");
  await t.expect(page.desc.textContent).contains("Fell straight from the tree");
});

test("shows product suggestions", async t => {
  await t.expect(page.suggestionsTitle.innerText).contains("Suggestions");
});

test("has product name in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Sample Product");
});
