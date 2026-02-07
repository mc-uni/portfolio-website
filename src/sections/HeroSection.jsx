import React from "react";
import Button from "../components/Button"
import AnimateOnView from "../components/AnimateOnView"
import profile from "../assets/profile.jpg"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-24 bg-bgLight min-h-screen flex items-center"
    >
      <AnimateOnView>
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl md:text-6xl w-100 font-heading font-bold text-primary mb-4">
            Hi, I’m Uguru Michael
          </h1>
          <p className="text-gray-700 text-lg mb-6 w-100">
            Frontend Developer | React & Tailwind Enthusiast | Building modern web experiences
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button text="View Projects" link="#projects" />
            <Button text="Contact Me" link="#contact" secondary />
          </div>
        </div>

        {/* Profile Image */}
        {/* Profile Image */}
        <div className="md:w-1/2 mb-10 flex justify-center">
          <div className="relative">
            <img
              src={profile}
              alt="Uguru Michael"
              className="w-200 rounded h-200 object-cover shadow-lg m-10"
            />
          </div>
        </div>

        {/*<div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img
            src="/profile.jpg"
            alt="Uguru Michael"
            className="w-56 h-56 rounded-full object-cover shadow-lg"
          />
        </div>*/}
      </div>
      </AnimateOnView>
    </section>
  );
};

export default HeroSection;
