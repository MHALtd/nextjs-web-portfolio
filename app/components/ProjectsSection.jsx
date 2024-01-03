import React from "react";
import ProjectCard from "./ProjectCard";

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
];

const ProjectsSection = () => {
  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-tartiary mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}></ProjectCard>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
