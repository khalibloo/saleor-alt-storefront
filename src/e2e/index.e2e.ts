import { Selector } from "testcafe";
import page from "./index.model.e2e";

fixture`Home Page`.page`http://localhost:5000`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test('is titled "Alt Storefront"', async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Alt Storefront");
});

test("shows welcome message", async t => {
  await t.expect(page.welcomeMsg.innerText).contains("Welcome");
});
