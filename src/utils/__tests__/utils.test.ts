import { formatTitle, formatPrice, getScreenSize } from "../utils";
import config from "@/config";

describe("getScreenSize tests", () => {
  test("returns xxl", async () => {
    const responsive = {
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: true,
    };
    expect(getScreenSize(responsive)).toEqual("xxl");
  });
  test("returns xl", async () => {
    const responsive = {
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: true,
      xxl: false,
    };
    expect(getScreenSize(responsive)).toEqual("xl");
  });
  test("returns lg", async () => {
    const responsive = {
      xs: true,
      sm: true,
      md: true,
      lg: true,
      xl: false,
      xxl: false,
    };
    expect(getScreenSize(responsive)).toEqual("lg");
  });
  test("returns md", async () => {
    const responsive = {
      xs: true,
      sm: true,
      md: true,
      lg: false,
      xl: false,
      xxl: false,
    };
    expect(getScreenSize(responsive)).toEqual("md");
  });
  test("returns sm", async () => {
    const responsive = {
      xs: true,
      sm: true,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
    };
    expect(getScreenSize(responsive)).toEqual("sm");
  });
  test("returns xs", async () => {
    const responsive = {
      xs: true,
      sm: false,
      md: false,
      lg: false,
      xl: false,
      xxl: false,
    };
    expect(getScreenSize(responsive)).toEqual("xs");
  });
});

describe("formatTitle tests", () => {
  test("starts with supplied text", async () => {
    expect(formatTitle("Blah").startsWith("Blah")).toBe(true);
  });
  test("contains separator ( | )", async () => {
    expect(formatTitle("Blah")).toEqual(expect.stringContaining(" | "));
  });
  test("ends with site name", async () => {
    expect(formatTitle("Blah").endsWith(config.siteName)).toBe(true);
  });
});

// uncomment when umi bug has been fixed
// https://github.com/umijs/umi/issues/4358

// describe("formatPrice tests", () => {
//   test("(USD, 30) should return $30.00", () => {
//     expect(formatPrice("USD", 30)).toEqual("$30.00");
//   });
//   test("(USD, 30, 30) should return $30.00", () => {
//     expect(formatPrice("USD", 30, 30)).toEqual("$30.00");
//   });
//   test("(USD, 30, 60) should return $30.00 - $60.00", () => {
//     expect(formatPrice("USD", 30, 30)).toEqual("$30.00 - $60.00");
//   });
//   test("(NGN, 30, 60) should return NGN30.00 - NGN60.00", () => {
//     expect(formatPrice("NGN", 30, 30)).toEqual("NGN 30.00 - NGN 60.00");
//   });
// });
