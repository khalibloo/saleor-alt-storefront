import { Selector } from "testcafe";
import page from "./profile.model.e2e";

fixture`Profile Page`.page`http://localhost:5000/profile`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows personal info", async t => {
  await t.expect(page.personalInfoCard.exists).eql(true);
});

test("shows addresses", async t => {
  await t.expect(page.addressesCard.exists).eql(true);
});

test("has profile in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Profile");
});
