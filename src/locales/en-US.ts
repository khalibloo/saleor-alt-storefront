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
  "profile.phone": "Phone",
  "profile.addresses": "Addresses",

  // orders
  "orders.title": formatTitle("Orders"),
  "orders.heading": "My Orders",
  "orders.placedOn": "Placed On",
  "orders.orderID": "Order ID",
  "orders.total": "Total",

  // profile
  "settings.title": formatTitle("Account Settings"),
  "settings.heading": "Account Settings",
  "settings.security": "Security",
  "settings.pwd": "Password",
  "settings.changePwd": "Change Password",
  "settings.email": "Email",
  "settings.changeEmail": "Change Email",
  "settings.dangerZone": "Danger Zone",
  "settings.shutdownAccount": "Shutdown Account",
  "settings.confirmation":
    "Are you sure you want to permanently shutdown your account?",

  // who
  "who.title": formatTitle("Who"),
  "who.heading": "LogIn or SignUp",
  "who.signup": "Sign Up",
  "who.email": "Email",
  "who.pwd": "Password",
  "who.signup.email.required": "Please enter your email",
  "who.signup.email.invalid": "Please enter a valid email",
  "who.signup.fname": "First Name",
  "who.signup.fname.required": "Please enter your first name",
  "who.signup.lname": "Last Name",
  "who.signup.lname.required": "Please enter your last name",
  "who.signup.pwd.required": "Please enter password",
  "who.signup.pwd.minLength": "Must be 8 characters or more",
  "who.signup.pwd2": "Confirm password",
  "who.signup.pwd2.required": "Please confirm password",
  "who.signup.pwd2.match": "Passwords do not match",
  "who.signup.agree": "I agree to the {terms} and {priv}",
  "who.signup.agree.required": "You must agree to our terms to use our service",
  "who.terms": "Terms of Service",
  "who.privacyPolicy": "Privacy Policy",
  "who.login": "Log In",
  "who.login.remember": "Remember me",

  // 404
  "404.title": formatTitle("Page Not Found"),
  "404.heading": "Page Not Found",
};
