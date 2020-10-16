/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homeBannerSectionQuery
// ====================================================

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
  backgroundImage: homeBannerSectionQuery_menu_items_category_backgroundImage | null;
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
}
