import { LinksNavigation } from "@/utils/links-navigation";
import Link from "next/link";

export default function Home() {

  const username = `Andresinho20049`;
  const summary = `Hi there! It's great to meet you. I'm André Carlos, known on the web as andresinho20049. 
                  I'd love to take a moment to introduce myself and share a bit about my portfolio.`;

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-hidden bg-cover bg-center bg-art_andresinho_mobile_bg sm:bg-art_andresinho_bg">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-10">
          {LinksNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-secondary-500 hover:text-secondary-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1
        className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title 
        font-semibold font-display sm:text-5xl md:text-8xl whitespace-nowrap bg-clip-text hover:bg-gradient-to-r from-white via-white to-primary-300"
      >
        {username}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 mx-2 text-center animate-fade-in px-2 bg-gradient-to-r from-primary-700/30 via-yellow-300/15 to-purple-300/30 rounded-lg w-1/2 self-start sm:self-center">
        <h2 className="text-lg text-white font-mono drop-shadow-md break-keep whitespace-pre-line">
          {summary}
        </h2>
      </div>
    </div>
  );
}