import { Selector } from "testcafe";

class Page {
  searchFld = Selector("#product-search-fld");
  pageHeading = Selector("#page-heading");
  pageSubheading = Selector("#page-subheading");
  filtersCol = Selector("#filters-col");
  productListItems = Selector(".product-list-items");
}

export default new Page();
