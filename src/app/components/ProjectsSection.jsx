"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Interior Design Website",
    description: "UI for company creating creative interior designs",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/interior-design-website",
    previewUrl: "https://www.figma.com/file/Example/Interior-Design-Website",
  },
  {
    id: 2,
    title: "IT Insights",
    description: "A web platform that connects IT enthusiasts and IT experts",
    image: "/images/projects/IT.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/it-insights",
    previewUrl: "https://www.figma.com/file/Example/IT-Insights",
  },
  {
    id: 3,
    title: "Travel website",
    description: "Travel website for ideas about travel places in Sri Lanka",
    image: "/images/projects/tra.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/travel-website",
    previewUrl: "https://www.figma.com/file/Example/Travel-Website",
  },
  {
    id: 4,
    title: "Covid19 APP",
    description: "App designed to help COVID-19 patients in an emergency",
    image: "/images/projects/mob.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/username/covid19-app",
    previewUrl: "https://www.figma.com/file/Example/Covid19-App",
  },
  {
    id: 5,
    title: "Bookstore",
    description: "A full-stack website for a bookstore",
    image: "/images/projects/book.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/bookstore",
    previewUrl: "https://www.figma.com/file/Example/Bookstore",
  },
  {
    id: 6,
    title: "Orchid nursery website",
    description: "A web application for an orchid nursery using Adobe XD",
    image: "/images/projects/orch.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/orchid-nursery-website",
    previewUrl: "https://www.figma.com/file/Example/Orchid-Nursery-Website",
  },
  {
    id: 7,
    title: "Chainshelter",
    description: "UI for a blockchain-based password manager",
    image: "/images/projects/chai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/chainshelter",
    previewUrl: "https://www.figma.com/file/Example/Chainshelter",
  },
  {
    id: 8,
    title: "FitNourish",
    description: "A nutritious app tailored for gym enthusiasts",
    image: "/images/projects/nutri.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/username/fitnourish",
    previewUrl: "https://www.figma.com/file/I2DK1n2c9c7ZmqdWdNMM5X/FitNourish?node-id=0-1&t=n8v1HwfFgvqfu4s0-1",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
