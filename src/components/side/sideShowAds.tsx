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
  children: ReactNode;
  adsTypes: AdsModelsType[];
}

export const SideShowAds = ({ children, adsTypes }: ISideShowAds) => {
  const { scrollHeight } = useScrollHook({id: "section-content-lyt"});

  const divHeight = (scrollHeight) / (adsTypes.length + 1);
  console.log(divHeight, "heigth", scrollHeight)

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

  return (
    <div className="hidden lg:block h-full w-2/12 px-2">
      <div className="sticky top-8 z-[9999]">{children}</div>
      <div className="relative">
        {adsTypes.map((ads, idx) => (
          <div key={idx}>
            <div className="sticky inset-2/4">{getAdsComponent(ads)}</div>
            <div style={{height: divHeight}}></div>
          </div>
        ))}
        {getAdsComponent("multi")}
      </div>
    </div>
  );
};
