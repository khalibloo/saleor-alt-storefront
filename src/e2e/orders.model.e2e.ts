import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  orderListItems = Selector(".order-list-items");
  productListItems = Selector(".product-list-items");
}

export default new Page();
