import { CssSvg } from "../svg/css";
import { DockerSvg } from "../svg/docker";
import { GitSvg } from "../svg/git";
import { HtmlSvg } from "../svg/html";
import { JavaSvg } from "../svg/java";
import { JavaScriptSvg } from "../svg/javascript";
import { NextSvg } from "../svg/next";
import { NodeSvg } from "../svg/node";
import { PostgresSvg } from "../svg/postgres";
import { SpringSvg } from "../svg/spring";
import { TypeScriptSvg } from "../svg/typescript";


export const ShowSvgsComponent = () => {
    return (
      <div className="h-96 bg-fixed bg-cover bg-[url('/background/20200608_144908.svg')] p-8">
        <div className="lg:w-3/6 w-full h-5/6 relative group">
          <div className="size-28 absolute top-1/2 lg:top-0 left-0 animate-skewEffect">
            <DockerSvg />
          </div>
          <div className="size-28  absolute top-1/2 left-1/2 animate-sizeOpacity ">
            <JavaSvg />
          </div>
          <div className="size-28  absolute top-1/2 lg:top-0 right-0 animate-skewEffect">
            <PostgresSvg />
          </div>
          <div className="size-28 absolute left-0 bottom-0 animate-transformOpacity">
            <GitSvg />
          </div>
          <div className="size-28  absolute left-1/3 top-1/3 animate-skewEffect">
            <HtmlSvg />
          </div>
          <div className="size-28  absolute right-48 top-32 animate-fadeOutLeft">
            <JavaScriptSvg />
          </div>
          <div className="size-28  absolute left-48 bottom-96  animate-fadeOutSkew">
            <NextSvg />
          </div>
          <div className="size-28  absolute left-64 top-3/4 animate-pulseOpacity">
            <NodeSvg />
          </div>
          <div className="size-28  absolute left-1/3 top-0 animate-bounceOpacityLeft">
            <SpringSvg />
          </div>
          <div className="size-28  absolute right-0 top-36 animate-fadeOutSkew">
            <TypeScriptSvg />
          </div>
          <div className="size-28  absolute left-2/3 top-1/3 animate-fadeOutSkew">
            <CssSvg />
          </div>
        </div>
      </div>
    );
}