import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  contentCol = Selector("#content-col");
  personalInfoCard = Selector("#personal-info-card");
  addressesCard = Selector("#addresses-card");
}

export default new Page();
