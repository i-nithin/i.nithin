import React from "react";
import { projData } from "../data";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/solid";
import Card from "./Card";
import { certifications } from "../data";

const Certifications = () => {
  return (
    <section id="certification" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <ClipboardDocumentListIcon className="mx-auto inline-block w-10 mb-4" />
          <h1
            className="sm:text-4xl text-3xl font-medium title-font mb-4
text-white"
          >
            Certifications
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Acknowledgement for the knowledge that I've acquired.
          </p>
        </div>
        <div className="flex flex-wrap m-4">
          {certifications.map((item) => {
            return <Card src={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
