import { Selector } from "testcafe";
import page from "./search.model.e2e";

fixture`Search Page`.page`http://localhost:5000/search?query=juice`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

// test("shows search result items", async t => {
//   await t.expect(page.productListItems.count).gt(1);
// });

test("has search in title", async t => {
  await t.expect(Selector("head").find("title").textContent).contains("Search");
});
