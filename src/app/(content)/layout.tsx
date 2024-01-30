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
          {children}
        </main>
        <footer className="flex-none mt-auto">
          <FooterComponent />
        </footer>
      </section>
    );
}