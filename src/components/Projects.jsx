import React from "react";
import { projData } from "../data";
import { CodeBracketIcon } from "@heroicons/react/24/solid";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeBracketIcon className="mx-auto inline-block w-10 mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-medium title-font mb-4
text-white"
          >
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Take a sneak peak into my github profile{" "}
            <a href="https://github.com/i-nithin" className="text-blue-500">
              i-nithin
            </a>
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {projData.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover

object-center"
                  src={project.image}
                />
                <div
                  className="px-8 py-10 relative z-10 w-full border-4

border-gray-800 bg-gray-900 opacity-0 hover:opacity-100"
                >
                  <h2
                    className="tracking-widest text-sm title-font font-medium

text-green-400 mb-1"
                  >
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3 inline-flex">
                    {project.title}{" "}
                    <svg
                      className="w-5 h-5 ml-2 mt-1 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                  </h1>
                  <p className="leading-relaxed ">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
