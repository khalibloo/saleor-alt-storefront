import { Selector } from "testcafe";

fixture`Getting Started`.page`http://localhost:5000`;

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test('is titled "Alt Storefront"', async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Alt Storefront");
});
