import { Selector, t } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  signupForm = Selector("form[id=signup]");
  signupBtn = this.signupForm.find("button[type=submit]");
  loginForm = Selector("form[id=login]");
  loginBtn = this.loginForm.find("button[type=submit]");

  signupTabBtn = Selector("#tab-signup");
  loginTabBtn = Selector("#tab-login");

  async openLoginTab() {
    await t.click(this.loginTabBtn);
  }
  async openSignupTab() {
    await t.click(this.signupTabBtn);
  }
}

export default new Page();
