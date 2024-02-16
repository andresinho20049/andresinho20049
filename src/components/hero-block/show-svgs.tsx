import Image from "next/image";


export const ShowSvgsComponent = () => {
    return (
      <div className="hidden md:block h-96 bg-fixed bg-cover bg-[url('/background/20200608_144908.svg')] p-8">
        <div className="w-6/12 h-5/6 border flex flex-col justify-between">
          <div className="w-full flex justify-evenly">
            <Image
              alt="spring Logo"
              src={"/svg/spring.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="redis Logo"
              src={"/svg/redis.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="java Logo"
              src={"/svg/java.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="postgres Logo"
              src={"/svg/postgres.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="junit Logo"
              src={"/svg/junit.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="w-full flex justify-between">
            <Image
              alt="docker Logo"
              src={"/svg/docker.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="nginx Logo"
              src={"/svg/nginx.svg"}
              width={80}
              height={80}
            />
          </div>
          <div className="w-full flex justify-evenly">
            <Image
              alt="react Logo"
              src={"/svg/react-simple.svg"}
              width={60}
              height={60}
            />
            <Image
              alt="next Logo"
              src={"/svg/next.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="nodejs Logo"
              src={"/svg/nodejs.svg"}
              width={80}
              height={80}
            />
            <Image
              alt="tailwind Logo"
              src={"/svg/tailwind.svg"}
              width={110}
              height={110}
            />
          </div>
        </div>
      </div>
    );
}