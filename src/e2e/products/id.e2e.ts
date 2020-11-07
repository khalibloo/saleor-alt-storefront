import { Selector, RequestMock } from "testcafe";
import page from "./id.model.e2e";
import { productDetailQuery } from "./id.mock.e2e";
import { anonCartBadgeQuery } from "../index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = { productDetailQuery, cartBadgeQuery: anonCartBadgeQuery };
    const opName = JSON.parse(req.body?.toString()).operationName;
    const mockData = opMap[opName];
    if (!mockData) {
      console.error(`Missing mock data for ${opName}`);
    }
    res.setBody(mockData);
    res.statusCode = 200;
    res.headers = {
      ...res.headers,
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    };
  });

fixture`Product Detail Page`.page`http://localhost:5000/products/apple-juice`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows product details", async t => {
  await t
    .expect((await page.name.innerText).toLowerCase())
    .contains("carrot juice");
  await t
    .expect((await page.desc.textContent).toLowerCase())
    .contains("improve your eyesight the natural way");
});

test("shows all product images initially", async t => {
  // should only test thumb btns as carousel creates duplis
  await t.expect(await page.thumbBtns.count).eql(8);
});

test("qty selector is disabled initially", async t => {
  await t.expect(await page.qtyFld.hasAttribute("disabled")).ok();
  await t.expect(await page.qtyDec.hasAttribute("disabled")).ok();
  await t.expect(await page.qtyInc.hasAttribute("disabled")).ok();
});

test("add to cart button is disabled initially", async t => {
  await t.expect(await page.addToCartBtn.hasAttribute("disabled")).ok();
});

test("can select variant", async t => {
  await page.selectVariant(0, "1l");
  await t.expect(await page.qtyFld.hasAttribute("disabled")).notOk();
  await t.expect(await page.qtyDec.hasAttribute("disabled")).ok();
  await t.expect(await page.qtyInc.hasAttribute("disabled")).notOk();
});

test("add to cart button is enabled after selecting variant", async t => {
  await page.selectVariant(0, "1l");
  await t.expect(await page.addToCartBtn.hasAttribute("disabled")).notOk();
});

test("shows product suggestions", async t => {
  await t.expect(page.suggestionsTitle.innerText).contains("Suggestions");
});

test("shows 4 fetched product suggestions on desktop", async t => {
  await t
    .resizeWindow(1536, 864)
    .expect(page.suggestionListItems.count)
    .eql(4);
});

test("shows 3 fetched product suggestions on ipad portrait", async t => {
  await t
    .resizeWindowToFitDevice("ipad", { portraitOrientation: true })
    .expect(page.suggestionListItems.count)
    .eql(3);
});

test("shows 2 fetched product suggestions on iphone6 landscape", async t => {
  await t
    .resizeWindowToFitDevice("iphone6", { portraitOrientation: false })
    .expect(page.suggestionListItems.count)
    .eql(2);
});

test("shows 1 fetched product suggestion on iphone6 portrait", async t => {
  await t
    .resizeWindowToFitDevice("iphone6", { portraitOrientation: true })
    .expect(page.suggestionListItems.count)
    .eql(1);
});

test("has product name in title", async t => {
  await t
    .expect((await Selector("head").find("title").textContent).toLowerCase())
    .contains("carrot juice");
});
