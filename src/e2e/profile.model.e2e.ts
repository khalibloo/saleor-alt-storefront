import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  contentCol = Selector("#content-col");
  personalInfoCard = Selector("#personal-info-card");
  name = Selector("#name");
  addressesCard = Selector("#addresses-card");
  addresses = Selector(".address-list-items");
}

export default new Page();
