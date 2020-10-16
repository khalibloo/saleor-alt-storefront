import React from "react";
import _ from "lodash";

import HomeBannerSection from "@/components/HomeBannerSection";
import HomeProductListSection from "@/components/HomeProductListSection";
import HomeSignupSection from "@/components/HomeSignupSection";
import VSpacing from "@/components/VSpacing";
import config from "@/config";
import HomeCatalogListSection from "@/components/HomeCatalogListSection";
import HomeSplitBannerSection from "@/components/HomeSplitBannerSection";

const HomePage = () => {
  const homeLayout = config.altConfig.homeLayout;
  return (
    <div>
      {homeLayout.map((section, i) => {
        if (section.type === "banner") {
          return <HomeBannerSection key={i} {...section} />;
        } else if (section.type === "split-banner") {
          return <HomeSplitBannerSection key={i} {...section} />;
        } else if (section.type === "product-list") {
          return <HomeProductListSection key={i} {...section} />;
        } else if (section.type === "collection-list") {
          return <HomeCatalogListSection key={i} {...section} />;
        } else if (section.type === "signup") {
          return <HomeSignupSection key={i} {...section} />;
        } else if (section.type === "vertical-spacing") {
          return <VSpacing key={i} height={section.spacing} />;
        }
      })}
    </div>
  );
};

HomePage.title = "site.title";
export default HomePage;
