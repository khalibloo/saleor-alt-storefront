import config from "@/config";
import { getIntl } from "umi";

export const getScreenSize = (responsive: {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}): ScreenSize => {
  if (responsive.xxl) {
    return "xxl";
  }
  if (!responsive.xxl && responsive.xl) {
    return "xl";
  }
  if (!responsive.xl && responsive.lg) {
    return "lg";
  }
  if (!responsive.lg && responsive.md) {
    return "md";
  }
  if (!responsive.md && responsive.sm) {
    return "sm";
  }
  if (!responsive.sm && responsive.xs) {
    return "xs";
  }
  return "xs";
};

export const formatTitle = (title: string) => `${title} | ${config.siteName}`;

export const formatPrice = (
  currency: string,
  minPrice: number,
  maxPrice?: number,
) => {
  const intl = getIntl();
  const minPriceFormatted = intl.formatNumber(minPrice, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const maxPriceFormatted =
    maxPrice &&
    intl.formatNumber(maxPrice, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  if (!maxPrice || minPrice === maxPrice) {
    return minPriceFormatted;
  }
  return `${minPriceFormatted} - ${maxPriceFormatted}`;
};
