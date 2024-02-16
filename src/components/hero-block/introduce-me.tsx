import Image from "next/image";

export const IntroduceMeBlock = () => {
  return (
    <div className="bg-fixed bg-cover bg-center lg:bg-right bg-[url('/background/resumeBg_home-min.png')] p-8 flex gap-4 h-screen border-b-2">
      <div className="h-5/6 flex flex-col items-center justify-center gap-1 md:gap-4 prose dark:prose-invert lg:prose-lg xl:prose-xl text-center">
        <div>
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary-500 pr-1 max-sm:text-2xl">
            {"I'm André Carlos"}
          </h1>
        </div>
        <div className="animate-fade-in">
          <p>
            {`As a developer with a Bachelor's degree in Computer Science, I have expertise primarily in technical skills in Java, TypeScript, JavaScript, SQL and Docker. Through my experience, I have learned to approach each project with a growth mindset, eager to contribute meaningfully and make the difference. I am constantly striving to improve and face new challenges, confident in my abilities to deliver high-quality work.`}
          </p>
        </div>
      </div>
      <div className="hidden lg:block border-4 border-blue-700  h-5/6 w-3/12 2xl:w-5/12">
        <DevIconsAnimation />
      </div>
    </div>
  );
};

const DevIconsAnimation = () => {
  return (
    <div className="flex justify-between group relative h-full w-full">
      <div className="flex flex-col justify-between">
        <Image
          alt="spring Logo"
          src={"/svg/spring.svg"}
          width={98}
          height={98}
        />
        <Image
          className="translate-x-20 hidden 2xl:block"
          alt="react Logo"
          src={"/svg/react-simple.svg"}
          width={80}
          height={80}
        />
        <Image alt="junit Logo" src={"/svg/junit.svg"} width={98} height={98} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="hidden xl:flex gap-2">
          <Image
            alt="html Logo"
            src={"/svg/html.svg"}
            width={80}
            height={80}
          />

          <Image
            alt="css Logo"
            src={"/svg/css.svg"}
            width={80}
            height={80}
          />
        </div>
        <div className="flex justify-evenly h-2/6 2xl:h-3/6 border">
          <div className="hidden 2xl:flex flex-col justify-between">
            <Image
              className="fill-white"
              alt="git Logo"
              src={"/svg/git.svg"}
              width={90}
              height={90}
            />
            <Image
              alt="docker Logo"
              src={"/svg/docker.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="self-center	">
            <Image
              alt="java Logo"
              src={"/svg/java.svg"}
              width={124}
              height={124}
            />
          </div>
          <div className="hidden 2xl:flex flex-col justify-between">
            <Image
              alt="jenkins Logo"
              src={"/svg/jenkins.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="jira Logo"
              src={"/svg/jira.svg"}
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="hidden xl:flex gap-2">
          <Image
            alt="typescript Logo"
            src={"/svg/typescript.svg"}
            width={80}
            height={80}
          />

          <Image
            alt="javascript Logo"
            src={"/svg/javascript.svg"}
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        <Image
          alt="maven Logo"
          src={"/svg/maven.svg"}
          width={106}
          height={106}
        />
        <Image
          className="-translate-x-20 hidden 2xl:block"
          alt="angular Logo"
          src={"/svg/angular.svg"}
          width={80}
          height={80}
        />
        <Image
          alt="eclipse Logo"
          src={"/svg/eclipse.svg"}
          width={110}
          height={110}
        />
      </div>
    </div>
  );
};
