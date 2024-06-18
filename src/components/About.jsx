import React from "react";
import laptop from "../assets/imgs/laptop.jpg";
const About = () => {
  return (
    <div id="about" className="py-52 bg-white">
      <div className="mx-auto max-w-screen-lg px-4 flex flex-col md:flex-row justify-start md:justify-between gap-4">
        <div className="w-full">
          <img
            src={laptop}
            alt=""
            className="max-w-full h-auto align-middle bg-no-repeat bg-cover rounded-lg"
          />
        </div>
        <div className="w-full h-auto px-8">
          <p className="text-[#147efb] text-lg font-bold mb-2">ABOUT ME</p>
          <p className="text-2xl font-medium mt-2">I love building stuff 🚀</p>
          <p className="mt-2 text-gray-700 leading-8 font-normal">
            Hey folks👋! This is Raja Tirole, a 23 years old young Software
            Engineer living in Madhya Pradesh, India. I am Working as a Software
            Engineer at{" "}
            <a
              href="https://cuvette.tech/"
              target="_blank"
              rel="noreferrer"
              className="text-[#147efb]"
            >
              Cuvette
            </a>
            . My experience include working on diverse projects from{" "}
            <b>
              designing and implementing complex and scalable backend systems{" "}
            </b>{" "}
            to creating intuitive front-end interfaces. Have a look at this page
            or just connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/rajtirole/"
              target="_blank"
              style={{ color: "#147efb" }}
              rel="noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default About;
