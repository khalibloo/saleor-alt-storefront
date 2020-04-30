import { Selector } from "testcafe";
import page from "./404.model.e2e";

fixture`404 Page`.page`http://localhost:5000/404`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows page heading", async t => {
  await t.expect(page.pageHeading.innerText).contains("Page Not Found");
});

test("has page not found in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Page Not Found");
});
