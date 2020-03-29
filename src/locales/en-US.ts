import config from "@/config";
import { formatTitle } from "@/utils/utils";

export default {
  // home
  "site.title": config.siteName,

  //   cart
  "cart.title": formatTitle("Cart"),
  "cart.heading": "My Cart",

  //   profile
  "profile.title": formatTitle("Profile"),
  "profile.heading": "My Profile",

  //   orders
  "orders.title": formatTitle("Orders"),
  "orders.heading": "My Orders",

  //   who
  "who.title": formatTitle("Who"),
  "who.heading": "Login or Signup",

  //   404
  "404.title": formatTitle("Page Not Found"),
  "404.heading": "Page Not Found",
};
