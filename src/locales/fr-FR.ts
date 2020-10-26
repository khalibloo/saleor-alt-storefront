import config from "@/config";
import { formatTitle } from "@/utils/utils";

export default {
  // layout
  "footer.createdby": "Créé par Khalibloo",
  "navbar.search.placeholder": "Recherche de produits...",
  "navbar.menu": "Menu",
  "navbar.cart": "Panier",
  "navbar.account": "Mon Compte",
  "navbar.profile": "Mon Profil",
  "navbar.orders": "Mes Commandes",
  "navbar.settings": "Réglages",
  "navbar.language": "Langue",
  "navbar.logout": "Se Déconnecter",
  "navbar.loginAsk": "Souhaitez-vous vous connecter et prendre un panier?",
  "navbar.continueAsGuest": "Ou continuer en tant qu'invité",
  "cookies.notice":
    "Ce site web utilise des cookies. En continuant à utiliser le site Web, vous indiquez que cela vous convient.",
  "cookies.privacyPolicy": "Politique de Confidentialité",
  "cookies.accept": "Accepter les Cookies",

  // misc
  "misc.pleaseSelect": "Veuillez Sélectionner",
  "misc.edit": "Éditer",
  "misc.delete": "Effacer",
  "misc.save": "Sauvegarder",
  "misc.saveChanges": "Sauvegarder les Modifications",
  "misc.save.success": "Changements Sauvegardés Avec Succès",
  "misc.apply": "Appliquer",
  "misc.address.createNew": "Créer une Nouvelle Adresse",
  "misc.address.edit": "Modifier l'Adresse",
  "misc.showMore": "Montre Plus",
  "misc.showLess": "Montrer Moins",
  "misc.expand": "Développer",
  "misc.collapse": "Effondrer",
  "misc.error.generic": "Une Erreur s'est Produite",
  "misc.back": "Retour",
  "misc.backToHome": "De retour à la maison",
  "misc.offline.msg": "Vous êtes maintenant hors ligne",
  "misc.online.msg": "Vous êtes de retour en ligne",
  "misc.qty": "Qté",

  // forms
  "form.optional": "Optionnel",
  "form.invalid":
    "Veuillez vérifier le formulaire pour les erreurs et réessayer",
  "form.address.phone": "Numéro de Téléphone",
  "form.address.phone.required": "Veuillez saisir un numéro de téléphone",
  "form.address.phone.invalid":
    "S'il vous plaît entrer un numéro de téléphone valide",
  "form.address.companyName": "Nom de la Compagnie",
  "form.address.streetAddress1": "Nom de Rue Ligne 1",
  "form.address.streetAddress1.required": "Veuillez saisir l'adresse",
  "form.address.streetAddress2": "Nom de Rue Ligne 2",
  "form.address.city": "Ville",
  "form.address.city.required": "Veuillez entrer la ville",
  "form.address.state": "État/Province",
  "form.address.state.required": "Veuillez entrer l'état",
  "form.address.postalCode": "Code Postal",
  "form.address.postalCode.required": "Veuillez entrer le code postal",
  "form.address.postalCode.invalid": "Le code postal n'est pas valide",
  "form.address.postalCode.len": "Le code postal doit contenir 5 caractères",
  "form.address.postalCode.type": "Le code postal doit être un nombre",
  "form.address.country": "Pays",
  "form.address.country.required": "Veuillez sélectionner le pays",
  "form.address.fail": "Échec de l'enregistrement de l'adresse",

  // home
  "site.title": config.siteName,
  "site.meta": config.siteDescription,

  // search
  "search.title": formatTitle("Résultats de Recherche"),
  "search.meta": "Rechercher des produits dans notre catalogue",
  "search.heading": "Résultats de Recherche",
  "search.sortby": "Trier par",
  "search.sort.relevance": "Pertinence",
  "search.sort.price.lowtohigh": "Prix (Croissant)",
  "search.sort.price.hightolow": "Prix (Décroissant)",
  "search.sort.newest": "Nouveautés",
  "search.filters": "Filtres",

  // products
  // detail
  "products.detail.addToCart": "Ajouter au Panier",
  "products.detail.suggestions": "Suggestions",

  // cart
  "cart.title": formatTitle("Panier"),
  "cart.heading": "Mon Panier",
  "cart.viewOrders": "Afficher les Commandes",
  "cart.continueShopping": "Continuer Vos Achats",
  "cart.summary": "Résumé du Panier",
  "cart.subtotal": "Subtotal",
  "cart.shippingAddress": "Adresse de Livraison",
  "cart.billingAddress": "Adresse de Facturation",
  "cart.shippingMethod": "Mode de Livraison",
  "cart.shippingFee": "Frais d'Expédition",
  "cart.discount": "Remise",
  "cart.total": "Total",
  "cart.paymentMethod": "Mode de Paiement",
  "cart.checkout": "Checkout",
  "cart.proceedToCheckout": "Passer à la Caisse",
  "cart.selectAddress": "Sélectionner une Adresse",
  "cart.addItem.success": "Article Ajouté au Panier",
  "cart.deleteItem.success": "Article Retiré du Panier",
  "cart.shippingAddress.fail": "Impossible de définir l'adresse de livraison",
  "cart.billingAddress.fail":
    "Échec de la définition de l'adresse de facturation",
  "cart.billingAddress.same": "Même que l'adresse d'expédition",
  "cart.vouchers": "Cartes de Bons",
  "cart.voucherCode": "Code du Bon",
  "cart.voucherCode.required": "Veuillez entrer le code du bon",
  "cart.voucherCode.invalid": "Le code du bon n'est pas valide ou a expiré",
  "cart.voucherCode.inapplicable":
    "Le panier n'a pas satisfait aux exigences minimales pour ce bon",
  "cart.voucherCode.success": "Bon Appliqué",

  // profile
  "profile.title": formatTitle("Profil"),
  "profile.heading": "Mon Profil",
  "profile.personalInfo": "Informations Personnelles",
  "profile.contactInfo": "Informations de Contact",
  "profile.name": "Nom",
  "profile.email": "Email",
  "profile.phone": "Téléphone",
  "profile.addresses": "Adresses",
  "profile.addresses.defaultShipping": "Adresse de Livraison par Défaut",
  "profile.addresses.defaultBilling": "Adresse de Facturation par Défaut",
  "profile.editName": "Modifier le Nom",
  "profile.editAddress": "Modifier l'Adresse",
  "profile.address.delete.confirm": "Voulez-vous supprimer cette adresse?",
  "profile.changeEmail": "Changer l'Email",
  "profile.changeEmail.newEmail": "Nouveau courriel",
  "profile.changeEmail.newEmail.match":
    "Le nouvel e-mail est identique à l'e-mail actuel",

  // orders
  "orders.title": formatTitle("Ordres"),
  "orders.heading": "Mes Commandes",
  "orders.placedOn": "Placé Sur",
  "orders.orderID": "Numéro de Commande",
  "orders.total": "Total",
  "orders.status": "Statut",
  "orders.status.draft": "Brouillon",
  "orders.status.unfulfilled": "En Attente",
  "orders.status.partially_fulfilled": "Partiellement Livré",
  "orders.status.fulfilled": "Livré",
  "orders.status.canceled": "Annulé",

  // profile
  "settings.title": formatTitle("Paramètres du Compte"),
  "settings.heading": "Paramètres du Compte",
  "settings.security": "Sécurité",
  "settings.pwd": "Mot de Passe",
  "settings.changePwd": "Changer le Mot de Passe",
  "settings.changePwd.oldPwd": "Mot de Passe Actuel",
  "settings.changePwd.newPwd": "Nouveau Mot de Passe",
  "settings.changePwd.newPwd.match":
    "Le nouveau mot de passe doit être différent de l'ancien",
  "settings.changePwd.oldPwd.incorrect": "Mot de passe actuel incorrect",
  "settings.email": "Email",
  "settings.changeEmail": "Changer l'Email",
  "settings.dangerZone": "Zone Dangereuse",
  "settings.shutdownAccount": "Arrêter le Compte",
  "settings.confirmation":
    "Êtes-vous sûr de vouloir fermer définitivement votre compte?",

  // who
  "who.title": formatTitle("Identifiez-vous ou Inscrivez-vous"),
  "who.meta": "Connectez-vous à notre boutique ou créez un nouveau compte",
  "who.heading": "Identifiez-vous ou Inscrivez-vous",
  "who.loginOrSignup": "Identifiez-vous ou Inscrivez-vous",
  "who.signup": "S'inscrire",
  "who.email": "Email",
  "who.pwd": "Mot de Passe",
  "who.pwd.reenter": "Retaper le Mot de Passe",
  "who.signup.email.required": "Veuillez entrer votre email",
  "who.signup.email.invalid": "Veuillez saisir un email valide",
  "who.signup.fname": "Prénom",
  "who.signup.fname.required": "Entrez votre prénom s'il vous plait",
  "who.signup.lname": "Nom de Famille",
  "who.signup.lname.required": "Veuillez entrer votre nom de famille",
  "who.signup.name.min": "Le nom doit comporter au moins 2 caractères",
  "who.signup.name.max": "Le nom est trop long",
  "who.signup.pwd.required": "Veuillez entrer le mot de passe",
  "who.signup.pwd.minLength": "Doit contenir au moins 8 caractères",
  "who.signup.pwd2": "Confirmez le Mot de Passe",
  "who.signup.pwd2.required": "Veuillez confirmer le mot de passe",
  "who.signup.pwd2.match": "Les mots de passe ne correspondent pas",
  "who.signup.agree": "J'accepte les {terms} et {priv}",
  "who.signup.agree.required":
    "Vous devez accepter nos conditions pour utiliser notre service",
  "who.terms": "Conditions d'Utilisation",
  "who.privacyPolicy": "Politique de Confidentialité",
  "who.signup.success": "Inscription Réussie",
  "who.signup.success.confirm": "Merci de Consulter Vos Emails",
  "who.signup.success.confirm.desc":
    "Nous vous avons envoyé un email. Veuillez cliquer sur le lien dans l'email pour continuer.",
  "who.signup.email.unique": "Email déjà enregistré",
  "who.login": "S'identifier",
  "who.login.remember": "Souviens-toi de moi",
  "who.login.forgotPwd": "Mot de passe oublié?",
  "who.login.success": "Connexion Réussie",
  "who.login.incorrect": "Email ou mot de passe incorrect",
  "who.resetPwd": "Réinitialiser le Mot de Passe",
  "who.reqResetPwd.info":
    "Saisissez votre adresse email ci-dessous. S'il a été enregistré sur ce site, nous vous enverrons des instructions supplémentaires pour réinitialiser votre mot de passe.",
  "who.resetPwd.success": "Le Mot de Passe a Été Eéinitialisé",
  "who.resetPwd.success.desc":
    "Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.",
  "who.reqResetPwd.success": "Merci de Donsulter Vos Emails",
  "who.reqResetPwd.success.desc":
    "Si l'email est enregistré sur ce site, vous devriez recevoir sous peu des instructions de réinitialisation.",
  "who.emailVerify.success": "Email Verifié",
  "who.emailVerify.success.desc": "Vous êtes maintenant connecté.",

  // 404
  "404.title": formatTitle("Page Non Trouvée"),
  "404.heading": "Page Non Trouvée",
  "404.subheading": "Désolé, la page que vous avez visitée n'existe pas.",

  // account confirm
  "account.confirm.invalidUrl": "URL Invalide",
  "account.confirm.invalidUrl.desc":
    "Veuillez utiliser le lien envoyé à votre email.",

  // account deactivation
  "account.deactivate.title": formatTitle("Désactiver le Compte"),
  "account.deactivate.challenge.info":
    "Si vous avez des préoccupations ou des difficultés avec notre service, veuillez contacter l'assistance et nous le faire savoir. Si vous souhaitez continuer à désactiver votre compte, veuillez saisir la phrase de confirmation ci-dessous.",
  "account.deactivate.challenge": 'Veuillez taper "confirmer" ci-dessous',
  "account.deactivate.challenge.answer": "confirmer",
  "account.deactivate.challenge.match":
    "Veuillez saisir la phrase de confirmation",
  "account.deactivate.request.success":
    "Demande de Désactivation de Compte Envoyée",
  "account.deactivate.request.success.desc":
    "Nous vous avons envoyé un email contenant des instructions supplémentaires",
  "account.deactivate.success": "Compte Désactivé",
  "account.deactivate.success.desc": "Nous sommes tristes de vous voir partir.",

  // reset pwd
  "account.resetpwd.title": formatTitle("Réinitialiser le Mot de Passe"),
  "account.resetpwd.heading": "Réinitialiser le Mot de Passe",

  // reset pwd
  "account.emailchange.title": formatTitle(
    "Modifier la Confirmation de l'Email",
  ),
  "account.emailchange.success": "Email Modifié",
  "account.emailchange.success.desc": "Votre adresse e-mail a été mise à jour.",

  // verify email
  "account.emailverify.title": formatTitle("Vérification de l'Adresse email"),
};
