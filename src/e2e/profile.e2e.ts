import { Selector, RequestMock } from "testcafe";
import page from "./profile.model.e2e";
import { profileQuery } from "./profile.mock.e2e";
import { anonCartBadgeQuery } from "./index.mock.e2e";

const mock = RequestMock()
  .onRequestTo("http://localhost:8000/graphql/")
  .respond((req, res) => {
    const opMap = { profileQuery, cartBadgeQuery: anonCartBadgeQuery };
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

fixture`Profile Page`.page`http://localhost:5000/profile`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows personal info", async t => {
  await t.expect(page.personalInfoCard.exists).ok();
  await t.expect(page.name.innerText).eql("Peach Toadstool");
});

test("shows addresses", async t => {
  await t.expect(page.addressesCard.exists).ok();
  await t.expect(page.addresses.count).eql(2);
});

test("has profile in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Profile");
});
