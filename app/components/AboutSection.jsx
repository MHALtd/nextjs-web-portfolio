"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc space-y-2 pl-2">
        <li>Node.js</li>
        <li>React.js</li>
        <li>Vite.js</li>
        <li>Next.js</li>
        <li>CodeIgniter4</li>
        <li>TailwindCSS</li>
        <li>BootstrapCSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc space-y-2 pl-2">
        <li>
          Informatics | Bhayangkara Jakarta Raya University <br />{" "}
          <span className="italic font-light">Sep 2020 - Present</span>
        </li>
        <li>
          Cloud Computing | Bangkit Academy H2 2023 By Google, GoTo, Traveloka <br />{" "}
          <span className="italic font-light">Aug 2023 - Jan 2024</span>
        </li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc space-y-2 pl-2">
        <li>
          Cloud Computing Cohort | Bangkit Academy <br />
          <span className="italic font-light">Aug 2023 - Jan 2024</span>
        </li>
        <li>
          IT Support | PT. Wahana Duta Jaya Rucika <br />
          <span className="italic font-light">Apr 2023 - Jun 2023</span>
        </li>
        <li>
          Transcriber | Transcribe Guru <br />
          <span className="italic font-light">Jun 2022 - Aug 2022</span>
        </li>
        <li>
          Video Editor | Al-Muchtar TV <br />
          <span className="italic font-light">Oct 2018 - Mar 2019</span>
        </li>
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
    <section id="about" className="pt-8 text-tartiary">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-profile.jpeg" className="rounded-xl" width={500} height={500} alt="about profile"></Image>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            I am a Frontend Developer with a passion for creating interactive and responsive web applications. Ihave
            experience working with JavaScript, React.js, Node.js, Next.js, HTML, CSS and Git. I am a creative and
            perfectionist person. Also I am always looking to expand my knowledge and skill set. I am excited to work with
            others to amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
              Experience
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
