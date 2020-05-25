import { Selector } from "testcafe";

class Page {
  summaryCard = Selector("#summary-card");
  subtotalPrice = Selector("#subtotal-price");
  shippingFee = Selector("#shipping-fee-txt");
  totalPrice = Selector("#total-price");
  shippingAddressSelect = Selector("#shipping-address-select");
  shippingMethodSelect = Selector("#shipping-method-select");
  checkoutBtn = Selector("#checkout-btn");
  productListItems = Selector(".product-list-items");
}

export default new Page();
