import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  securityCard = Selector("#security-card");
  emailLbl = Selector("#email-lbl");
  changeEmailBtn = Selector("#change-email-btn");
  changePwdBtn = Selector("#change-pwd-btn");
  dangerZoneCard = Selector("#danger-zone-card");
  shutdownAccBtn = Selector("#shutdown-account-btn");
}

export default new Page();
