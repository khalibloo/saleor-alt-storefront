import { Selector } from "testcafe";

class Page {
  title = Selector("#title");
  bannerImg = Selector("#banner-img");
  filtersCol = Selector("#filters-col");
  productListItems = Selector(".product-list-items");
}

export default new Page();
