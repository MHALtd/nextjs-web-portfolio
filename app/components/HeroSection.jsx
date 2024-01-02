import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-sky mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Hasbi</h1>
          <p className="text-sky text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, eligendi.
          </p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-primary lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-profile.png"
              alt="hero image"
              width={300}
              height={300}></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
