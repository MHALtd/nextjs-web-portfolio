import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-tartiary my-2">Let's Connect</h5>
        <p className="text-secondary mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to
          say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon"></Image>
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" action="">
          <div className="mb-6">
            <label htmlFor="email" className="text-tartiary block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-primary border border-tartiary placeholder-[#9CA2A9] text-tartiary text-sm rounded-lg block w-full p-2.5"
              placeholder="john@google.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="subject" className="text-tartiary block mb-2 text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-primary border border-tartiary placeholder-[#9CA2A9] text-tartiary text-sm rounded-lg block w-full p-2.5"
              placeholder="Say hi to me"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="text-tartiary block mb-2 text-sm font-medium"></label>
            <textarea
              name="message"
              id="message"
              className="bg-primary border border-tartiary placeholder-[#9CA2A9] text-tartiary text-sm rounded-lg block w-full p-2.5"></textarea>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
