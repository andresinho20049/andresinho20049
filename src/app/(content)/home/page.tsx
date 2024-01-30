import { FullHeroSection } from "@/components/hero-block/full-hero-section";
import { SeeMyWorks } from "@/components/hero-block/see-my-work";
import { ShowSvgsComponent } from "@/components/hero-block/show-svgs";
import { ShowcaseChooseUs } from "@/components/hero-block/showcase-chose-us";
import { AngularSvg } from "@/components/svg/angular";
import { CssSvg } from "@/components/svg/css";
import { DockerSvg } from "@/components/svg/docker";
import { GitSvg } from "@/components/svg/git";
import { HtmlSvg } from "@/components/svg/html";
import { JavaSvg } from "@/components/svg/java";
import { JavaScriptSvg } from "@/components/svg/javascript";
import { JenkinsSvg } from "@/components/svg/jenkins";
import { JiraSvg } from "@/components/svg/jira";
import { JQuerySvg } from "@/components/svg/jquery";
import { MarkdownSvg } from "@/components/svg/markdown";
import { NextSvg } from "@/components/svg/next";
import { NginxSvg } from "@/components/svg/nginx";
import { NodeSvg } from "@/components/svg/node";
import { NumpySvg } from "@/components/svg/numpy";
import { PandasSvg } from "@/components/svg/pandas";
import { PostgresSvg } from "@/components/svg/postgres";
import { PythonSvg } from "@/components/svg/python";
import { ReactSvg } from "@/components/svg/react";
import { SpringSvg } from "@/components/svg/spring";
import { TailwindSvg } from "@/components/svg/tailwind";
import { TypeScriptSvg } from "@/components/svg/typescript";

export default function Resume() {
  return (
    <div className="min-h-screen">
      <div className="bg-fixed bg-cover bg-[url('/background/resumeBg_home.png')] p-8 grid sm:grid-cols-4 lg:grid-cols-2 gap-4 h-dvh">
        <div className="sm:col-span-3 lg:col-span-1 w-full flex flex-col items-center justify-center gap-1 md:gap-4 prose dark:prose-invert md:prose-lg lg:prose-xl text-center">
          <div>
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary-500 pr-1">
              {"I'm André Carlos"}
            </h1>
          </div>
          <div className="animate-fade-in">
            <p>
              {`As a developer with a Bachelor's degree in Computer Science, I have expertise primarily in technical skills in Java, TypeScript, JavaScript, SQL and Docker. Through my experience, I have learned to approach each project with a growth mindset, eager to contribute meaningfully and make the difference. I am constantly striving to improve and face new challenges, confident in my abilities to deliver high-quality work.`}
            </p>
          </div>
          <div className="hidden lg:block h-72 w-full relative group">
            <div className="size-28 absolute top-1/2 lg:top-0 left-0 animate-skewEffect">
              <DockerSvg />
            </div>
            <div className="size-28  absolute top-0 left-1/2 animate-bounceOpacityRight ">
              <JavaSvg />
            </div>
            <div className="size-28  absolute top-1/2 lg:top-0 right-0 animate-skewEffect">
              <PostgresSvg />
            </div>
          </div>
        </div>
        <div className="w-4/6 h-5/6 relative group hidden lg:block">
          <div className="size-28 absolute left-0 top-0 animate-transformOpacity">
            <GitSvg />
          </div>
          <div className="size-28  absolute left-1/3 top-1/3 animate-sizeOpacity">
            <HtmlSvg />
          </div>
          <div className="size-28  absolute right-48 top-32 animate-fadeOutLeft">
            <JavaScriptSvg />
          </div>
          <div className="size-28  absolute right-0 top-0 animate-transformOpacity">
            <JenkinsSvg />
          </div>
          <div className="size-28  absolute left-4 bottom-0 animate-fade-left">
            <JiraSvg />
          </div>
          <div className="size-28  absolute left-10 top-96 animate-fadeOutRight">
            <JQuerySvg />
          </div>
          <div className="size-28  absolute top-2/3 right-24 transition duration-300 delay-150 animate-fade-right">
            <MarkdownSvg />
          </div>
          <div className="size-28  absolute left-64 bottom-1/3 animate-fadeOutSkew ">
            <NginxSvg />
          </div>
          <div className="size-28  absolute left-48 bottom-96  animate-bounceOpacityRight">
            <NextSvg />
          </div>
          <div className="size-28  absolute left-64 top-3/4 animate-pulseOpacity">
            <NodeSvg />
          </div>
          <div className="size-28  absolute right-64 bottom-1/4 animate-fadeOutLeft">
            <PandasSvg />
          </div>
          <div className="size-28  absolute left-2/3 top-2/4 animate-transformOpacity">
            <ReactSvg />
          </div>
          <div className="size-28  absolute left-1/3 top-0 animate-bounceOpacityLeft">
            <SpringSvg />
          </div>
          <div className="size-28  absolute right-3/4 top-1/3 animate-fadeOutSkew">
            <TailwindSvg />
          </div>
          <div className="size-28  absolute right-0 top-36 animate-fadeOutRight">
            <TypeScriptSvg />
          </div>
          <div className="size-28  absolute right-3/4 bottom-1/3 translate-y-1/3 animate-transformOpacity">
            <NumpySvg />
          </div>
          <div className="size-28  absolute left-2/3 top-1/3 animate-fadeOutSkew">
            <CssSvg />
          </div>
          <div className="size-28  absolute left-3/4 bottom-0 animate-fadeOutSkew">
            <AngularSvg />
          </div>
          <div className="size-28  absolute left-1/3 bottom-0 animate-bounceOpacityLeft">
            <PythonSvg />
          </div>
        </div>
      </div>
      <FullHeroSection
        msg="With my experience in both software development and hardware, I began my career as a confident and skilled back-end programmer, so Bitwise."
        title="Would you like to know me better?"
        urlLink="/about"
      />
      <ShowcaseChooseUs />
      <ShowSvgsComponent />
      <SeeMyWorks />
    </div>
  );
}
