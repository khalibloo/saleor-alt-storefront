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
  "search.sortby": "Sort By",
  "search.sort.relevance": "Relevance",
  "search.sort.price.lowtohigh": "Price (Low to High)",
  "search.sort.price.hightolow": "Price (High to Low)",
  "search.sort.newest": "Newest Arrivals",
  "search.filters": "Filters",

  // products
  // detail
  "products.detail.addToCart": "Add To Cart",
  "products.detail.suggestions": "Suggestions",

  // cart
  "cart.title": formatTitle("Cart"),
  "cart.heading": "My Cart",
  "cart.summary": "Cart Summary",
  "cart.subtotal": "Subtotal",
  "cart.shipping": "Shipping",
  "cart.total": "Total",
  "cart.checkout": "Checkout",

  // profile
  "profile.title": formatTitle("Profile"),
  "profile.heading": "My Profile",
  "profile.personalInfo": "Personal Information",
  "profile.contactInfo": "Contact Information",
  "profile.name": "Name",
  "profile.email": "Email",
  "profile.addresses": "Addresses",

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
