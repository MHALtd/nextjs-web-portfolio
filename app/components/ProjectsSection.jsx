"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
const projectsData = [
  {
    id: 1,
    title: "EnglishBuddy",
    description: "React.js IELTS Website Test Frontend using React.js framework, Vite.js build tool and Tailwind",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MHALtd/EnglishBuddy.git",
    previewUrl: "https://ielts-ebuddy.netlify.app/",
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Website Portfolio using React.js framework, Next.js build tool and Tailwind",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MHALtd/nextjs-web-portfolio.git",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Book Store",
    description: "CRUD Book Store using CodeIgniter4 framework and Bootstrap",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MHALtd/CRUD-toko-buku.git",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Simple Web Profile",
    description: "Website Portfolio using and Bootstrap",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MHALtd/bootstrap-profile.git",
    previewUrl: "https://hasbiportfolio.netlify.app/",
  },
  {
    id: 5,
    title: "Wedding Organization Page",
    description: "Wedding Org Website using and Bootstrap",
    image: "/images/projects/1.png",
    gitUrl: "https://github.com/MHALtd/wedding-org-bootstrap.git",
    previewUrl: "https://arjunaasmaralaya.netlify.app/",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-20">
      <h2 className="text-center text-4xl font-bold text-tartiary mt-4 mb-8 md:mb-12">My Projects</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}></ProjectCard>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
