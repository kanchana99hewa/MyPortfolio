"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const SKILL_DATA = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "Tailwind", percentage: 70 },
  { name: "Bootstrap", percentage: 78 },
  { name: "JavaScript", percentage: 76 },
  { name: "React", percentage: 65 },
  { name: "Next.js", percentage: 50 },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-4">
        {SKILL_DATA.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="w-24 font-semibold">{skill.name}</div>
            <div className="w-full h-6 ml-2 overflow-hidden bg-white rounded-full">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
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
      <div className="space-y-4">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faSchool} className="w-6 h-6 mr-2 text-purple-500" />
          <div>
            <div className="font-semibold">Sujatha Vidyalaya Matara</div>
            <div className="text-sm">Secondary Education</div>
          </div>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6 mr-2 text-purple-500" />
          <div>
            <div className="font-semibold">BSc. Honours Degree in Computing and Information Systems</div>
            <div className="text-sm">Sabaragamuwa University of Sri Lanka</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <Image src="/images/xp.png" alt="Certification 1" width={200} height={150} className="mb-2" />
          <div className="text-center">
            <div className="font-semibold">Code With WIE</div>
            <div className="text-sm">Description or details about the Code With WIE certification.</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/xp.png" alt="Certification 2" width={200} height={150} className="mb-2" />
          <div className="text-center">
            <div className="font-semibold">Pioneers</div>
            <div className="text-sm">Description or details about the Pioneers certification.</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/xp.png" alt="Certification 3" width={200} height={150} className="mb-2" />
          <div className="text-center">
            <div className="font-semibold">Idealize</div>
            <div className="text-sm">Description or details about the Idealize certification.</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image src="/images/xp.png" alt="Certification 4" width={200} height={150} className="mb-2" />
          <div className="text-center">
            <div className="font-semibold">Mora UXplore 1.0</div>
            <div className="text-sm">Description or details about the Mora UXplore 1.0 certification.</div>
          </div>
        </div>
      </div>
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
        <Image src="/images/pio1.png" width={400} height={200} />
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
