"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-tartiary">Hello, I'm </span>{" "}
            <br></br>
            <TypeAnimation
              sequence={["Hasbi", 1000, "Frontend Developer", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-tartiary text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur qui provident repellendus iusto saepe in
            laborum amet quam atque dignissimos!
          </p>
          <div>
            <Link
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary hover:bg-slate-200 text-tartiary">
              Contact Me
            </Link>
            <Link
              href="/"
              className="inline-block w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary to-secondary px-1 py-1 text-tartiary mt-3">
              <span className="block bg-bg hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-primary lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
            <Image
              src="/images/hero-profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}></Image>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
