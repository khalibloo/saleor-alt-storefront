import { Selector } from "testcafe";

class Page {
  summaryCard = Selector("#summary-card");
  productListItems = Selector(".product-list-items");
}

export default new Page();
