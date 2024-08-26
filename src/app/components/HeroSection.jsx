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
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-8xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kanchana",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about design and enhancing user experiences, I create intuitive and visually compelling interfaces.
          </p>
          
          <div>
            <Link
              href="/#contact"
              className="inline-block w-full px-6 py-3 mr-4 font-bold text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-900 to-secondary-700 hover:bg-slate-200"
            >
              Hire Me
            </Link>
            
            <Link
              href="/"
              className="inline-block w-full px-1 py-1 mt-3 text-black rounded-full sm:w-fit bg-gradient-to-br from-primary-900 to-secondary-500 hover:bg-slate-900"
            >
              <span className="block bg-[#ffffff] hover:bg-slate-800 rounded-full px-5 py-2 font-bold">
                Download CV
              </span>
            </Link>
            
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#962265] to-[#c24dc2] blur-[100px] rounded-full"></div>
            <div className="relative w-full h-full rounded-full">
              <Image
                src="/images/hero'''image - Copy.png"
                alt="hero image"
                className="absolute transform -translate-y-1/2 -translate-x-1/4 top-1/2 left-1/4"
                width={500}
                height={500}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
