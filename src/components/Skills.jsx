import React from "react";
import { skillsData } from '../data'
import { CpuChipIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-900">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4 text-white" />
          <h1
            className="sm:text-4xl text-3xl font-medium title-font text-white
      
      mb-4"
          >
            Skills &amp; Technologies
          </h1>
          <p className="text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            TECH I'M FAMILIAR WITH
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skillsData.map((skilld) => {
            const { id, skill, value, bg } = skilld;
            return (
              <div key={id} className="p-2 sm:w-1/2 w-full">
                <div
                  className="bg-gray-800 rounded flex justify-between p-4
      
      h-full items-center"
                >
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                  <progress
                    value={value}
                    max="100"
                    style={{ background: bg }}
                  ></progress>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
