import React from "react";
import AnimateOnView from "../components/AnimateOnView";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <AnimateOnView>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-primary mb-6">
            About Me
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            I am a passionate Frontend Developer specializing in React and Tailwind.
            I enjoy building modern, responsive web applications that provide great
            user experiences and clean, maintainable code.
          </p>
        </div>
      </AnimateOnView>
      
    </section>
  );
};

export default AboutSection;
