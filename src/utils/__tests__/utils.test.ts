import { formatTitle, formatPrice } from "../utils";
import config from "@/config";

describe("formatTitle tests", () => {
  test("starts with supplied text", () => {
    expect(formatTitle("Blah").startsWith("Blah")).toBe(true);
  });
  test("contains separator ( | )", () => {
    expect(formatTitle("Blah")).toEqual(expect.stringContaining(" | "));
  });
  test("ends with site name", () => {
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
