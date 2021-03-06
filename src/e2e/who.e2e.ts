import { Selector } from "testcafe";
import page from "./who.model.e2e";

fixture`Who Page`.page`http://localhost:5000/who`.beforeEach(async t =>
  t.resizeWindow(1536, 864),
);

test("loads without error", async t => {
  await t.expect(Selector("body").textContent).contains("Alt Storefront");
});

test("shows signup form by default", async t => {
  await t.expect(page.signupForm.exists).eql(true);
});

test("shows login form", async t => {
  await page.openLoginTab();
  await t.expect(page.loginForm.exists).eql(true);
});

test("switching tabs works", async t => {
  await page.openLoginTab();
  await page.openSignupTab();
  await t.expect(page.signupForm.exists).eql(true);
});

test("has log in or sign up in title", async t => {
  await t
    .expect(Selector("head").find("title").textContent)
    .contains("Log In or Sign Up");
});
