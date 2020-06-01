import { Selector, RequestMock } from "testcafe";
import page from "./settings.model.e2e";
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

fixture`Settings Page`.page`http://localhost:5000/settings`
  .beforeEach(async t => t.resizeWindow(1536, 864))
  .requestHooks(mock);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows page heading", async t => {
  await t.expect(page.pageHeading.innerText).contains("Settings");
});

test("shows security card", async t => {
  await t.expect(page.securityCard.exists).eql(true);
});

test("shows email", async t => {
  await t.expect(page.emailLbl.innerText).eql("peach@example.com");
});

test("shows danger zone card", async t => {
  await t.expect(page.dangerZoneCard.exists).eql(true);
});

test("has settings in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Settings");
});
