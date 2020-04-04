import config from "@/config";
import { formatTitle } from "@/utils/utils";

export default {
  // layout
  "footer.createdby": "Created by Khalibloo",
  "navbar.search.placeholder": "Search products...",

  // home
  "site.title": config.siteName,

  // search
  "search.title": formatTitle("Search Results"),
  "search.heading": "Search Results",

  // products
  // detail
  "products.detail.addToCart": "Add To Cart",
  "products.detail.suggestions": "Suggestions",

  // cart
  "cart.title": formatTitle("Cart"),
  "cart.heading": "My Cart",

  // profile
  "profile.title": formatTitle("Profile"),
  "profile.heading": "My Profile",

  // orders
  "orders.title": formatTitle("Orders"),
  "orders.heading": "My Orders",

  // who
  "who.title": formatTitle("Who"),
  "who.heading": "Login or Signup",

  // 404
  "404.title": formatTitle("Page Not Found"),
  "404.heading": "Page Not Found",
};
