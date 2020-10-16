import React from "react";
import _ from "lodash";

import HomeBannerSection from "@/components/HomeBannerSection";
import HomeProductListSection from "@/components/HomeProductListSection";
import VSpacing from "@/components/VSpacing";
import config from "@/config";

const HomePage = () => {
  const homeLayout = config.altConfig.homeLayout;
  return (
    <div>
      {homeLayout.map(section => {
        if (section.type === "banner") {
          return <HomeBannerSection {...section} />;
        } else if (section.type === "product-list") {
          return <HomeProductListSection {...section} />;
        } else if (section.type === "vertical-spacing") {
          return <VSpacing height={section.spacing} />;
        }
      })}
    </div>
  );
};

HomePage.title = "site.title";
export default HomePage;
