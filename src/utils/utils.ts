import config from "@/config";
import { getIntl } from "umi";

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
