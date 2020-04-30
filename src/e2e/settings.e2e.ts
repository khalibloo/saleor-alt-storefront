import { Selector } from "testcafe";
import page from "./settings.model.e2e";

fixture`Settings Page`.page`http://localhost:5000/settings`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows page heading", async t => {
  await t.expect(page.pageHeading.innerText).contains("Settings");
});

test("shows security card", async t => {
  await t.expect(page.securityCard.exists).eql(true);
});

test("shows danger zone card", async t => {
  await t.expect(page.dangerZoneCard.exists).eql(true);
});

test("has settings in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Settings");
});
