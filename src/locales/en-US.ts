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
  "misc.save": "Save",
  "misc.saveChanges": "Save Changes",
  "misc.save.success": "Changes Saved Successfully",
  "misc.apply": "Apply",
  "misc.address.createNew": "Create New Address",
  "misc.address.edit": "Edit Address",
  "misc.showMore": "Show More",
  "misc.showLess": "Show Less",
  "misc.expand": "Expand",
  "misc.collapse": "Collapse",
  "misc.error.generic": "An Error Occurred",
  "misc.back": "Back",
  "misc.backToHome": "Back To Home",
  "misc.offline.msg": "You are now offline",
  "misc.online.msg": "You are back online",
  "misc.qty": "Qty",

  // forms
  "form.optional": "Optional",
  "form.invalid": "Please check form for errors and try again",
  "form.address.phone": "Phone Number",
  "form.address.phone.required": "Please enter a phone number",
  "form.address.phone.invalid": "Please enter a valid phone number",
  "form.address.companyName": "Company Name",
  "form.address.streetAddress1": "Street Address Line 1",
  "form.address.streetAddress1.required": "Please enter address",
  "form.address.streetAddress2": "Street Address Line 2",
  "form.address.city": "City",
  "form.address.city.required": "Please enter city",
  "form.address.state": "State/Province",
  "form.address.state.required": "Please enter state",
  "form.address.postalCode": "Postal Code",
  "form.address.postalCode.required": "Please enter postal code",
  "form.address.postalCode.invalid": "Postal code is invalid",
  "form.address.postalCode.len": "Postal code must be 5 characters long",
  "form.address.postalCode.type": "Postal code must be a number",
  "form.address.country": "Country",
  "form.address.country.required": "Please select country",
  "form.address.fail": "Failed to save address",

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
  "cart.billingAddress": "Billing Address",
  "cart.shippingMethod": "Shipping Method",
  "cart.shippingFee": "Shipping Fee",
  "cart.discount": "Discount",
  "cart.total": "Total",
  "cart.paymentMethod": "Payment Method",
  "cart.checkout": "Checkout",
  "cart.proceedToCheckout": "Proceed To Checkout",
  "cart.selectAddress": "Select Address",
  "cart.addItem.success": "Item Added to Cart",
  "cart.deleteItem.success": "Item Removed from Cart",
  "cart.shippingAddress.fail": "Failed to set shipping address",
  "cart.billingAddress.fail": "Failed to set billing address",
  "cart.billingAddress.same": "Same as shipping address",
  "cart.vouchers": "Vouchers",
  "cart.voucherCode": "Voucher Code",
  "cart.voucherCode.required": "Please enter voucher code",
  "cart.voucherCode.invalid": "Voucher code is invalid or has expired",
  "cart.voucherCode.inapplicable":
    "Cart has not met minimum requirements for this voucher",
  "cart.voucherCode.success": "Voucher Applied",

  // profile
  "profile.title": formatTitle("Profile"),
  "profile.heading": "My Profile",
  "profile.personalInfo": "Personal Information",
  "profile.contactInfo": "Contact Information",
  "profile.name": "Name",
  "profile.email": "Email",
  "profile.phone": "Phone",
  "profile.addresses": "Addresses",
  "profile.addresses.defaultShipping": "Default Shipping Address",
  "profile.addresses.defaultBilling": "Default Billing Address",
  "profile.editName": "Edit Name",
  "profile.editAddress": "Edit Address",
  "profile.address.delete.confirm": "Do you want to delete this address?",
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
  "orders.status": "Status",
  "orders.status.draft": "Draft",
  "orders.status.unfulfilled": "Pending",
  "orders.status.partially_fulfilled": "Partly Delivered",
  "orders.status.fulfilled": "Delivered",
  "orders.status.canceled": "Canceled",

  // profile
  "settings.title": formatTitle("Account Settings"),
  "settings.heading": "Account Settings",
  "settings.security": "Security",
  "settings.pwd": "Password",
  "settings.changePwd": "Change Password",
  "settings.changePwd.oldPwd": "Current Password",
  "settings.changePwd.newPwd": "New Password",
  "settings.changePwd.newPwd.match":
    "New password should be different from old password",
  "settings.changePwd.oldPwd.incorrect": "Incorrect current password",
  "settings.email": "Email",
  "settings.changeEmail": "Change Email",
  "settings.dangerZone": "Danger Zone",
  "settings.shutdownAccount": "Shutdown Account",
  "settings.confirmation":
    "Are you sure you want to permanently shutdown your account?",

  // who
  "who.title": formatTitle("Log In or Sign Up"),
  "who.heading": "Log In or Sign Up",
  "who.loginOrSignup": "Log In or Sign Up",
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
  "who.signup.email.unique": "Email already registered",
  "who.login": "Log In",
  "who.login.remember": "Remember me",
  "who.login.forgotPwd": "Forgot password?",
  "who.login.success": "Successfully Logged In",
  "who.login.incorrect": "Incorrect email or password",
  "who.resetPwd": "Reset Password",
  "who.reqResetPwd.info":
    "Enter your email below. If it has been registered on this site, we will send you further instructions to reset your password.",
  "who.resetPwd.success": "Password Has Been Reset",
  "who.resetPwd.success.desc": "You may now log in with your new password.",
  "who.reqResetPwd.success": "Please Check Your Email",
  "who.reqResetPwd.success.desc":
    "If email is registered on this site, you should receive reset instructions shortly.",
  "who.emailVerify.success": "Email Verified",
  "who.emailVerify.success.desc": "You're now logged in.",

  // 404
  "404.title": formatTitle("Page Not Found"),
  "404.heading": "Page Not Found",

  // account confirm
  "account.confirm.invalidUrl": "Invalid URL",
  "account.confirm.invalidUrl.desc": "Please use the link sent to your email.",

  // account deactivation
  "account.deactivate.title": formatTitle("Deactivate Account"),
  "account.deactivate.challenge.info":
    "If you have any concerns or difficulties with our service, please " +
    "contact support and let us know. If you still wish to proceed with " +
    "deactivating your account, kindly enter the confirmation phrase below.",
  "account.deactivate.challenge": 'Please type "confirm" below',
  "account.deactivate.challenge.answer": "confirm",
  "account.deactivate.challenge.match": "Please type the confirmation phrase",
  "account.deactivate.request.success": "Account Deactivation Request Sent",
  "account.deactivate.request.success.desc":
    "We've sent you an email containing further instructions",
  "account.deactivate.success": "Account Deactivated",
  "account.deactivate.success.desc": "We're sad to see you go.",

  // reset pwd
  "account.resetpwd.title": formatTitle("Reset Password"),
  "account.resetpwd.heading": "Reset Password",

  // reset pwd
  "account.emailchange.title": formatTitle("Change Email Confirmation"),
  "account.emailchange.success": "Email Changed",
  "account.emailchange.success.desc": "Your email address has been updated.",

  // verify email
  "account.emailverify.title": formatTitle("Verifying Email Address"),
};
