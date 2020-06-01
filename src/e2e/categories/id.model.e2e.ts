import { Selector } from "testcafe";

class Page {
  title = Selector("#title");
  bannerImg = Selector("#banner-img");
  filtersCol = Selector("#filters-col");
  filtersBtn = Selector("#filters-btn");
  sortSelect = Selector("#sort-select");

  filtersSearchFld = Selector("#filters-search-fld");
  filtersPriceSldr = Selector("#filters-price-sldr");
  basicFiltersPanel = Selector("#basic-panel");
  catsFiltersPanel = Selector("#cats-panel");
  catsTree = Selector(".cats-tree");
  collsFiltersPanel = Selector("#colls-panel");
  summerCollCheckbox = Selector("#colls-checkbox-summer-collection");
  winterSaleCheckbox = Selector("#colls-checkbox-winter-sale");
  attrsFiltersPanel = Selector("#attrs-panel");
  attrsFilterLabels = Selector(".attrs-labels");

  productListItems = Selector(".product-list-items");
  firstProductListItem = Selector("#product-list-item-0");
  productGridCards = Selector(".product-grid-cards");
  productListCards = Selector(".product-list-cards");
}

export default new Page();
