import { Selector, t } from "testcafe";

class Page {
  name = Selector("#product-name");
  desc = Selector("#product-desc");
  priceLbl = Selector("#price-lbl");
  qtyRow = Selector("#qty-row");
  qtyFld = Selector("#qty-fld");
  qtyInc = Selector("#qty-inc");
  qtyDec = Selector("#qty-dec");
  varSelectRow = Selector("#var-select-row");
  varSelects = Selector(".var-select");
  varSelect0Options = Selector(".var-select-0-options");
  addToCartBtn = Selector("#add-to-cart-btn");
  thumbsContainer = Selector("#thumbs-container");
  thumbsScrollUpBtn = Selector("#thumbs-scroll-up-btn");
  thumbsScrollDownBtn = Selector("#thumbs-scroll-down-btn");
  thumbBtns = Selector(".thumb-btns");
  carouselImgs = Selector(".carousel-imgs");
  suggestionsTitle = Selector("#product-suggestions-title");
  suggestionsRow = Selector("#product-suggestions-row");
  suggestionListItems = Selector(".suggestion-list-items");

  async selectVariant(attrId: number, valueTxt: string) {
    await t
      .click(this.varSelects.nth(attrId))
      .click(this.varSelect0Options.withText(valueTxt));
  }

  async setQty(qty: number) {
    await t
      // .click(this.qtyFld)
      .typeText(this.qtyFld, qty.toString());
  }

  async addToCart(qty: number = 1) {
    await t
      // TODO: set qty
      .click(this.addToCartBtn);
  }
}

export default new Page();
