import React from "react";
function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        Mokshe Jain
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I am a full-stack web and app developer with expertise in building
        scalable solutions. I specialize in front-end and back-end development
        using frameworks like React, Node.js, and Express. With experience in
        React Native, I turn ideas into high-performance, responsive
        applications. Let’s build something great!
      </p>
    </div>
  );
}
export default Intro;