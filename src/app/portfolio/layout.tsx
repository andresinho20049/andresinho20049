import { CardResume } from "@/components/cards/cardResume";
import  { FooterComponent }  from "@/components/footer/footer";
import { HeaderNav } from "@/components/header/header_nav";
import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode;
}
export default function LayoutContent({ children }: ILayoutProps) {

    return (
      <section className="flex flex-col justify-start items-center h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <nav className="snap-start w-full">
          <HeaderNav />
        </nav>
        <main className="flex-1">
          <div className="px-8 py-4">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-6">
              <div className="col-span-4 md:col-span-3 xl:col-span-2 max-md:snap-start py-8">
                <CardResume />
              </div>
              <div className="col-span-4 md:col-span-9 xl:col-span-10 xl:px-4">
                {children}
              </div>
            </div>
          </div>
        </main>
        <div className="snap-end w-full">
          <FooterComponent />
        </div>
      </section>
    );
}