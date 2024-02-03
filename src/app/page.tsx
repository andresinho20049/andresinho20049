import { LinkAppearanceButton } from "@/components/button/link-appearance-button";

export default function Home() {

  const username = `Andresinho20049`;
  const summary = `Hi there! I'm André Carlos, known on the web as andresinho20049. 
                  I'd love to take a moment to introduce myself and share a bit about my portfolio.`;

  return (
    <div className="flex flex-col items-center justify-center h-dvh transition-transform overflow-hidden bg-cover bg-center bg-art_andresinho_mobile_bg sm:bg-art_andresinho_bg">
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <h1
        className="z-10 text-4xl md:text-5xl lg:text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title 
        font-semibold font-display  whitespace-nowrap bg-clip-text hover:bg-gradient-to-b from-white via-white to-primary-300"
      >
        {username}
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="my-16 mx-2 text-center animate-fade-in p-2 shadow-lg border border-white rounded-lg w-10/12 sm:w-8/12 md:w-6/12">
        <h2 className="text-md sm:text-lg text-white font-mono drop-shadow-md break-keep whitespace-pre-line">
          {summary}
        </h2>
      </div>

      <div className="w-48 animate-fade-in">
        <LinkAppearanceButton href={"/home"}>Get Started</LinkAppearanceButton>
      </div>
    </div>
  );
}