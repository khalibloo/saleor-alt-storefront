import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  securityCard = Selector("#security-card");
  emailTxt = Selector("#email-text");
  changeEmailBtn = Selector("#change-email-btn");
  pwdTxt = Selector("#pwd-text");
  changePwdBtn = Selector("#change-pwd-btn");
  dangerZoneCard = Selector("#danger-zone-card");
  shutdownAccBtn = Selector("#shutdown-account-btn");
}

export default new Page();
