import React from "react";

const About = () => {
  return (
    <section id="about" className=" bg-gray-900 ">
      <div className="container  mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-4xl mb-8 font-medium leading-10 text-white " >
            Hi, I'm Nithin.
            <br className="hidden lg:inline-block sm:inline-block " />
            I'm a Software Developer.
          </h1>
          <p className="mb-10 leading-relaxed text-white" >
            I’m a front-end developer and general doodler with a keen eye for
            creating engaging UI, bringing products to life and also blending
            the art of design with programming skills to deliver an immersive
            and engaging user experience through efficient website development,
            proactive feature optimization, and relentless debugging.
          </p>
          <div className="flex justify-center">
            <a
              href="https://i.ibb.co/Gpj8FL8/Nithin-Dev-Fresher-2022.jpg"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6
    focus:outline-none hover:bg-green-600 rounded text-lg cursor-pointer"
            >
              Resume
            </a>
            
          </div>
        </div>
        <div className="md:w-1/2 h-96" >
          <div  
            className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 "
          >
            <img
              className="object-cover object-center rounded"
              alt="nithin"
              src="./coding.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
