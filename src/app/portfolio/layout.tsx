import { CardResume } from "@/components/cards/cardResume";
import  { FooterComponent }  from "@/components/footer/footer";
import { HeaderNav } from "@/components/header/header_nav";
import { ReactNode } from "react";

interface ILayoutProps {
    children: ReactNode;
}
export default function LayoutContent({ children }: ILayoutProps) {

    return (
      <section className="flex flex-col	justify-between min-h-screen">
        <header className="flex-none">
          <HeaderNav />
        </header>
        <main>
          <div>
            <div className="container mx-auto py-8">
              <div className="grid grid-cols-4 md:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 md:col-span-2">
                  <CardResume />
                </div>
                <div className="col-span-4 md:col-span-10">{children}</div>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-none mt-auto">
          <FooterComponent />
        </footer>
      </section>
    );
}