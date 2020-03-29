import { formatTitle } from "../utils";
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
