/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: homePageQuery
// ====================================================

export interface homePageQuery_shop_geolocalization_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface homePageQuery_shop_geolocalization {
  __typename: "Geolocalization";
  /**
   * Country of the user acquired by his IP address.
   */
  country: homePageQuery_shop_geolocalization_country | null;
}

export interface homePageQuery_shop_companyAddress_country {
  __typename: "CountryDisplay";
  /**
   * Country code.
   */
  code: string;
  /**
   * Country name.
   */
  country: string;
}

export interface homePageQuery_shop_companyAddress {
  __typename: "Address";
  /**
   * The ID of the object.
   */
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  cityArea: string;
  postalCode: string;
  /**
   * Shop's default country.
   */
  country: homePageQuery_shop_companyAddress_country;
  countryArea: string;
  phone: string | null;
  /**
   * Address is user's default shipping address.
   */
  isDefaultShippingAddress: boolean | null;
  /**
   * Address is user's default billing address.
   */
  isDefaultBillingAddress: boolean | null;
}

export interface homePageQuery_shop_translation {
  __typename: "ShopTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  headerText: string;
  description: string;
}

export interface homePageQuery_shop {
  __typename: "Shop";
  /**
   * Shop's name.
   */
  name: string;
  /**
   * Shop's description.
   */
  description: string | null;
  /**
   * Customer's geolocalization data.
   */
  geolocalization: homePageQuery_shop_geolocalization | null;
  /**
   * Company address.
   */
  companyAddress: homePageQuery_shop_companyAddress | null;
  /**
   * Returns translated shop fields for the given language code.
   */
  translation: homePageQuery_shop_translation | null;
}

export interface homePageQuery {
  /**
   * Return information about the shop.
   */
  shop: homePageQuery_shop;
}

export interface homePageQueryVariables {
  lang: LanguageCodeEnum;
}
