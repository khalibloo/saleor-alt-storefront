import { Selector, t } from "testcafe";

class Page {
  name = Selector("#product-name");
  desc = Selector("#product-desc");
  addToCartBtn = Selector("#add-to-cart-btn");
  suggestionsTitle = Selector("#product-suggestions-title");
  suggestionsRow = Selector("#product-suggestions-row");

  async addToCart(qty: number = 1) {
    await t
      // TODO: set qty
      .click(this.addToCartBtn);
  }
}

export default new Page();
