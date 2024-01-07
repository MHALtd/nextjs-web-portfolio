import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="group h-52 md:h-72 rounded-t-xl bg-center relative overflow-hidden"
        src={imgUrl}
        alt={title}
        width={300}
        height={200}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div className="overlay absolute top-0 left-0 w-full h-full bg-primary bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-tartiary hover:border-white mr-4 group/link">
            <CodeBracketIcon className="h-10 w-10 text-tartiary group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></CodeBracketIcon>
          </Link>
          <Link
            href={previewUrl}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-tartiary hover:border-white mr-4 group/link">
            <EyeIcon className="h-10 w-10 text-tartiary group-hover/link:text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></EyeIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-primary py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-tartiary">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
