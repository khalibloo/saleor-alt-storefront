/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryTreeQuery
// ====================================================

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node_children_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges_node_children_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node_children_edges_node;
}

export interface categoryTreeQuery_categories_edges_node_children {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges_node_children_edges[];
}

export interface categoryTreeQuery_categories_edges_node {
  __typename: "Category";
  /**
   * The ID of the object.
   */
  id: string;
  name: string;
  slug: string;
  level: number;
  /**
   * List of children of the category.
   */
  children: categoryTreeQuery_categories_edges_node_children | null;
}

export interface categoryTreeQuery_categories_edges {
  __typename: "CategoryCountableEdge";
  /**
   * The item at the end of the edge.
   */
  node: categoryTreeQuery_categories_edges_node;
}

export interface categoryTreeQuery_categories {
  __typename: "CategoryCountableConnection";
  edges: categoryTreeQuery_categories_edges[];
}

export interface categoryTreeQuery {
  /**
   * List of the shop's categories.
   */
  categories: categoryTreeQuery_categories | null;
}
