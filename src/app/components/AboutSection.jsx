"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>C</li>
        <li>Java</li>
        <li>Tailwind CSS</li>
        <li>ReactJS</li>
        <li>NextJS</li>
      </ul>
    ),
  },
  {
    title: "Technologies and Tools",
    id: "technologies",
    content: (
      <ul className="pl-2 list-disc">
        <li>AdobeXD</li>
        <li>Sabaragamuwa University of Sri Lanka</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>Sujatha Vidyalaya Matara</li>
        <li>BSc.Honours Degree in Computing and Information Systems</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>Code With WIE</li>
        <li>Pioneers</li>
        <li>Idealize</li>
        <li>Mora UXplore 1.0</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/frontt.png" width={400} height={200} />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a UI UX designer and a frontend web developer. I am very passionate about UI/UX design, which 
          has led me to work on several projects, like group projects as 
          well as individual projects. Through this experience, I was able  
          to develop skills in user research, wireframing, and prototyping. 
          I am proficient with tools like Figma, Adobe XD, and Sketch, and 
          I have a good understanding of front-end development, including 
          HTML, CSS, JavaScript, ReactJs, NextJs. 
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
