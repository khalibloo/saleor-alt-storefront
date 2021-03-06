import { Selector, t } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  signupForm = Selector("form[id=who-signup-form]");
  signupBtn = this.signupForm.find("button[type=submit]");
  loginForm = Selector("form[id=who-login-form]");
  loginBtn = this.loginForm.find("button[type=submit]");

  signupTabBtn = Selector("#rc-tabs-0-tab-signup");
  loginTabBtn = Selector("#rc-tabs-0-tab-login");

  async openLoginTab() {
    await t.click(this.loginTabBtn);
  }
  async openSignupTab() {
    await t.click(this.signupTabBtn);
  }
}

export default new Page();
