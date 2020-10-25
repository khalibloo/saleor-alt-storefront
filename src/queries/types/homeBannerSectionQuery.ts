/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LanguageCodeEnum } from "./../../globalTypes";

// ====================================================
// GraphQL query operation: homeBannerSectionQuery
// ====================================================

export interface homeBannerSectionQuery_menu_items_category_translation {
  __typename: "CategoryTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface homeBannerSectionQuery_menu_items_category_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface homeBannerSectionQuery_menu_items_category {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * Returns translated category fields for the given language code.
   */
  translation: homeBannerSectionQuery_menu_items_category_translation | null;
  backgroundImage: homeBannerSectionQuery_menu_items_category_backgroundImage | null;
}

export interface homeBannerSectionQuery_menu_items_collection_translation {
  __typename: "CollectionTranslation";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
}

export interface homeBannerSectionQuery_menu_items_collection_backgroundImage {
  __typename: "Image";
  /**
   * The URL of the image.
   */
  url: string;
  /**
   * Alt text for an image.
   */
  alt: string | null;
}

export interface homeBannerSectionQuery_menu_items_collection {
  __typename: "Collection";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  /**
   * Returns translated collection fields for the given language code.
   */
  translation: homeBannerSectionQuery_menu_items_collection_translation | null;
  backgroundImage: homeBannerSectionQuery_menu_items_collection_backgroundImage | null;
}

export interface homeBannerSectionQuery_menu_items {
  __typename: "MenuItem";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  category: homeBannerSectionQuery_menu_items_category | null;
  collection: homeBannerSectionQuery_menu_items_collection | null;
  /**
   * URL to the menu item.
   */
  url: string | null;
}

export interface homeBannerSectionQuery_menu {
  __typename: "Menu";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  items: (homeBannerSectionQuery_menu_items | null)[] | null;
}

export interface homeBannerSectionQuery {
  /**
   * Look up a navigation menu by ID or name.
   */
  menu: homeBannerSectionQuery_menu | null;
}

export interface homeBannerSectionQueryVariables {
  menuName: string;
  lang: LanguageCodeEnum;
}
