import Script from "next/script";

export const AdsenseComponent = () => {
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-3617432012620885"
        data-ad-slot="6487308684"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script
        id="ads-google-2"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
};

export const AdsenseComponentImageOnly = () => {
  return (
    <div className="container m-auto justify-items-stretch my-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-format="fluid"
        data-ad-layout-key="-6t+ed+2i-1n-4w"
        data-ad-client="ca-pub-3617432012620885"
        data-ad-slot="8357347021"
      ></ins>
      <Script
        id="ads-google-img-2"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
};

export const AdsenseArticleAds = () => {
  return (
    <div>
      <ins
        className="adsbygoogle"
        style={{ display: "block", textAlign: "center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-3617432012620885"
        data-ad-slot="6978263277"
      ></ins>
      <Script
        id="ads-google-article-2"
        dangerouslySetInnerHTML={{
          __html: `(adsbygoogle = window.adsbygoogle || []).push({});`,
        }}
      />
    </div>
  );
}
