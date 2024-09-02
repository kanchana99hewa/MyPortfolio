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
                "Software Engineer",
                1000,
                "UI/UX Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate about crafting efficient and scalable software solutions, I focus on designing and developing intuitive, user-friendly applications.
          </p>
          
          <div>
            <Link
              href="/#contact"
              className="inline-block w-full px-6 py-3 mr-4 font-bold text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-900 to-secondary-700 hover:bg-slate-200"
            >
              Hire Me
            </Link>
            
            <Link
              href="/UI UX Intern- Kanchana Hewamadduma.pdf" // Link to your uploaded CV
              target="_blank"
              rel="noopener noreferrer"
              download="Kanchana_Hewamadduma_CV.pdf" // This triggers the download
              className="inline-block w-full mt-3 text-white border-2 border-white rounded-full sm:w-fit hover:bg-white hover:text-black"
            >
              <span className="block px-5 py-2 font-bold rounded-full">
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
                src="/images/propic2.png"
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
