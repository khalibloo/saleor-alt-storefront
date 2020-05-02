import { Selector, RequestMock } from "testcafe";
import page from "./id.model.e2e";
import mockData from "./id.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    res.setBody(mockData);
    res.statusCode = 200;
    res.headers = {
      ...res.headers,
      "content-type": "application/json",
      "access-control-allow-origin": "*",
    };
  });

fixture`Product Detail Page`
  .page`http://localhost:5000/products/1`.requestHooks(mock);

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
