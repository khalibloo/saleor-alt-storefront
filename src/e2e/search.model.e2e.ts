import { Selector } from "testcafe";

class Page {
  pageHeading = Selector("#page-heading");
  filtersCol = Selector("#filters-col");
  productListItems = Selector(".product-list-items");
}

export default new Page();
