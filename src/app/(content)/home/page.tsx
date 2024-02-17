import { FullHeroSection } from "@/components/hero-block/full-hero-section";
import { IntroduceMeBlock } from "@/components/hero-block/introduce-me";
import { SeeMyWorks } from "@/components/hero-block/see-my-work";
import { ShowSvgsComponent } from "@/components/hero-block/show-svgs";
import { ShowcaseChooseUs } from "@/components/hero-block/showcase-chose-us";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <IntroduceMeBlock />
      <SeeMyWorks />
      <div className="hidden md:block">
        <ShowSvgsComponent />
      </div>
      <FullHeroSection
        msg="With my experience in both software development and hardware, I began my career as a confident and skilled back-end programmer, so Bitwise."
        title={
          <>
            Would you like to <span className="text-blue-700">know me</span>{" "}
            better?
          </>
        }
        urlLink="/portfolio"
        textLink="Visit my portfolio"
        imgSrc="/avatar/me-and-family.png"
      />
      <ShowcaseChooseUs />
    </div>
  );
}
