"use client";

import { useScrollHook } from "@/utils/scrollHook";
import { ReactNode } from "react";
import {
  AdsModelsType,
  AdsenseArticleComponent,
  AdsenseHorizontalComponent,
  AdsenseMultiComponent,
  AdsenseSquareComponent,
  AdsenseVerticalComponent,
} from "../google/AdsenseComponent";

interface ISideShowAds {
  children?: ReactNode;
  adsTypes: AdsModelsType[];
  device: "lg" | "xl" | "2xl";
}

const useAdsHooks = () => {
  const { scrollHeight, scrollPercentage } = useScrollHook({
    id: "section-content-lyt",
  });

  const getAdsComponent = (ads: AdsModelsType) => {
    switch (ads) {
      case "horizontal":
        return <AdsenseHorizontalComponent />;
      case "vertical":
        return <AdsenseVerticalComponent />;
      case "article":
        return <AdsenseArticleComponent />;
      case "multi":
        return <AdsenseMultiComponent />;
      default:
        return <AdsenseSquareComponent />;
    }
  };

  return {
    scrollHeight,
    scrollPercentage,
    getAdsComponent,
  };
};

export const SideShowAds = ({ children, adsTypes, device }: ISideShowAds) => {
  const { scrollHeight, getAdsComponent } = useAdsHooks();

  const divHeight = scrollHeight / (adsTypes.length + 1);
  const displayOn =
    device === "lg" ? "lg:block" : device === "xl" ? "xl:block" : "2xl:block";

  return (
    <div className={`hidden ${displayOn} h-full w-2/12 px-2`}>
      {children && <div className="sticky top-8 z-[9999]">{children}</div>}
      <div className="relative">
        {adsTypes.map((ads, idx) => (
          <div key={idx}>
            <div
              className={`w-full sticky ${
                !!children ? "inset-2/4" : "inset-10"
              }`}
            >
              {getAdsComponent(ads)}
            </div>
            <div style={{ height: divHeight }}></div>
          </div>
        ))}
        {getAdsComponent("multi")}
      </div>
    </div>
  );
};
