import { Selector } from "testcafe";
import page from "./id.model.e2e";

fixture`Category Detail Page`.page`http://localhost:5000/categories/1`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows category name", async t => {
  await t.expect(page.title.innerText).eql("Sample Category");
});

test("shows filters column", async t => {
  await t.expect(page.filtersCol.textContent).contains("Filters");
});

test("has category name in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Sample Category");
});
