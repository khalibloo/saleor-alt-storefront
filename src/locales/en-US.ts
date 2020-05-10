import config from "@/config";
import { formatTitle } from "@/utils/utils";

export default {
  // layout
  "footer.createdby": "Created by Khalibloo",
  "navbar.search.placeholder": "Search products...",
  "navbar.menu": "Menu",
  "navbar.cart": "Shopping Cart",
  "navbar.account": "My Account",
  "navbar.profile": "My Profile",
  "navbar.orders": "My Orders",
  "navbar.settings": "Settings",
  "navbar.language": "Language",
  "navbar.logout": "Logout",

  // misc
  "misc.pleaseSelect": "Please Select",
  "misc.edit": "Edit",
  "misc.delete": "Delete",
  "misc.saveChanges": "Save Changes",
  "misc.save.success": "Changes Saved Successfully",
  "misc.form.invalid": "Please check form for errors and try again",

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
  "cart.shippingAddress": "Shipping Address",
  "cart.shippingMethod": "Shipping Method",
  "cart.shippingFee": "Shipping Fee",
  "cart.total": "Total",
  "cart.checkout": "Checkout",
  "cart.selectAddress": "Select Address",

  // profile
  "profile.title": formatTitle("Profile"),
  "profile.heading": "My Profile",
  "profile.personalInfo": "Personal Information",
  "profile.contactInfo": "Contact Information",
  "profile.name": "Name",
  "profile.email": "Email",
  "profile.phone": "Phone",
  "profile.addresses": "Addresses",
  "profile.editName": "Edit Name",
  "profile.changeEmail": "Change Email",
  "profile.changeEmail.newEmail": "New Email",
  "profile.changeEmail.newEmail.match":
    "New email is the same as current email",

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
  "who.title": formatTitle("Log In or Sign Up"),
  "who.heading": "Log In or Sign Up",
  "who.signup": "Sign Up",
  "who.email": "Email",
  "who.pwd": "Password",
  "who.pwd.reenter": "Re-enter Password",
  "who.signup.email.required": "Please enter your email",
  "who.signup.email.invalid": "Please enter a valid email",
  "who.signup.fname": "First Name",
  "who.signup.fname.required": "Please enter your first name",
  "who.signup.lname": "Last Name",
  "who.signup.lname.required": "Please enter your last name",
  "who.signup.name.min": "Name should be at least 2 characters",
  "who.signup.name.max": "Name is too long",
  "who.signup.pwd.required": "Please enter password",
  "who.signup.pwd.minLength": "Must be 8 characters or more",
  "who.signup.pwd2": "Confirm password",
  "who.signup.pwd2.required": "Please confirm password",
  "who.signup.pwd2.match": "Passwords do not match",
  "who.signup.agree": "I agree to the {terms} and {priv}",
  "who.signup.agree.required": "You must agree to our terms to use our service",
  "who.terms": "Terms of Service",
  "who.privacyPolicy": "Privacy Policy",
  "who.signup.success": "Successfully Signed Up",
  "who.signup.success.confirm": "Please Check Your Email",
  "who.signup.success.confirm.desc":
    "We've sent you an email. Please click the link in the email to proceed.",
  "who.login": "Log In",
  "who.login.remember": "Remember me",

  // 404
  "404.title": formatTitle("Page Not Found"),
  "404.heading": "Page Not Found",
};
