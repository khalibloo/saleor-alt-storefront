import { Selector } from "testcafe";

class Page {
  bannerContainer = Selector("#banner-container");
  bannerTitle = Selector("#banner-title");
  welcomeMsg = Selector("#welcome-msg");
  productListItems = Selector(".product-list-items");
}

export default new Page();
