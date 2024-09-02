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
    gitUrl: "https://github.com/kanchana99hewa/Mini_project-Group10-",
    previewUrl: "https://www.figma.com/design/x0on28yCpqcNcTuBOcucYa/interior-design-website-UI%5C?node-id=2-2&m=dev&t=a1o7C9qyokQtzL5s-1",
  },
  {
    id: 2,
    title: "IT Insights",
    description: "A web platform that connects IT enthusiasts and IT experts",
    image: "/images/projects/IT.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kanchana99hewa/Mini_project-Group10-",
    previewUrl: "https://www.figma.com/proto/HXmV7zYCNF9JVO2TjhFtbB/Mini-project?page-id=0%3A47&node-id=139-98&starting-point-node-id=139%3A98&scaling=scale-down-width&content-scaling=fixed&t=nSNqmuAIEjZYZJGq-1",
  },
  {
    id: 3,
    title: "Travel website",
    description: "Travel website for ideas about travel places in Sri Lanka",
    image: "/images/projects/tra.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/username/travel-website",
    previewUrl: "https://github.com/username/travel-website",
  },
  {
    id: 4,
    title: "Covid19 APP",
    description: "App designed to help COVID-19 patients in an emergency",
    image: "/images/projects/mob.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/design/WtZWxmPzMaZ0s2zvu5xyJk/Covid19-app?node-id=0-1&t=eeANljnWu6cAqcJx-1",
    previewUrl: "https://www.figma.com/design/WtZWxmPzMaZ0s2zvu5xyJk/Covid19-app?node-id=0-1&t=eeANljnWu6cAqcJx-1",
  },
  {
    id: 5,
    title: "Bookstore",
    description: "A full-stack website for a bookstore",
    image: "/images/projects/book.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kanchana99hewa/web-frontend",
    previewUrl: "https://github.com/kanchana99hewa/web-frontend",
  },
  {
    id: 6,
    title: "Orchid nursery website",
    description: "A web application for an orchid nursery using Adobe XD",
    image: "/images/projects/orch.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/kanchana99hewa/Orchid-Nursery-website",
    previewUrl: "https://github.com/kanchana99hewa/Orchid-Nursery-website",
  },
  {
    id: 7,
    title: "Chainshelter",
    description: "UI for a blockchain-based password manager",
    image: "/images/projects/chai.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/3aaTfpz6Tx3cSvwgKO0nhN/ChainShelter?node-id=0-1&t=w8J9UNRtHmbwtAzT-1",
    previewUrl: "https://www.figma.com/proto/3aaTfpz6Tx3cSvwgKO0nhN/ChainShelter?page-id=0%3A1&node-id=206-220&starting-point-node-id=16%3A11&scaling=scale-down-width&content-scaling=fixed&t=joGGjFfB7IwVfUha-1",
  },
  {
    id: 8,
    title: "FitNourish",
    description: "A nutritious app tailored for gym enthusiasts",
    image: "/images/projects/nutri.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/design/I2DK1n2c9c7ZmqdWdNMM5X/FitNourish?node-id=0-1&t=bIXZF6QxY3UWbet9-1",
    previewUrl: "https://www.figma.com/design/I2DK1n2c9c7ZmqdWdNMM5X/FitNourish?node-id=0-1&t=bIXZF6QxY3UWbet9-1",
  },
  {
    id: 9,
    title: "Eventify",
    description: "A web app for event management",
    image: "/images/projects/eve.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.figma.com/design/jmIp2dq9jdcXhNumHCTAnE/Eventify?node-id=0-1&t=FKooxCeh7xLLrxJ8-1",
    previewUrl: "https://www.figma.com/design/jmIp2dq9jdcXhNumHCTAnE/Eventify?node-id=0-1&t=FKooxCeh7xLLrxJ8-1",
  },
];
const ProjectsSection = ({ marginTop }) => { // Accept marginTop as a prop
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
    <section id="projects" style={{ marginTop }} className="transition-all duration-300"> {/* Apply dynamic marginTop */}
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-gradient md:mb-11">
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
      <ul
        ref={ref}
        className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="flex justify-center"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              className="w-full max-w-sm"
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;