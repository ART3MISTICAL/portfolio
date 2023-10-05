import React from "react";

const About = () => {
  return (
    <section
      className="h-[100vh] w-[100%] flex flex-col justify-center items-center relative z-50"
      id="about"
    >
      {/*<h2 className="text-4xl font-bold mb-4 text-white">About</h2> Change text color to white*/}
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
			<h1 className="text-4xl py-5 font-bold tracking-tight text-gray-100 sm:text-6xl">
				About Me
			</h1>
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Who I am
            </h1>
            <p className="mt-6 text-lg lg:text-2xl leading-8 text-gray-100">
			Hello there! I am not your average developer, I am a true tech enthusiast with a passion for exploring the world of technology. Beyond writing code, I like experimenting with different operating systems on both my phone and laptop. I am also a huge fan of the Linux family, and I am currently using Garuda Linux as my daily driver.

When I am not immersed in the world of tech, you'll often find me diving into video games like Valorant, where precision and strategy are key. But my competitive spirit doesn't stop there. I am also a skilled chess player, having proudly represented my region in state-level chess tournaments.
            </p>
			<a href="" className="text-lg lg:text-2xl leading-8 text-gray-100 underline hover:text-indigo-600">
				These are some of my skills
			</a>
			</div>
        <div className="flex justify-center items-center opacity-30 lg:opacity-100">
          <img
            src="/code.svg"
            alt="Code Icon"
            className="h-64 w-64 mr-4 absolute top-2 left-2" // Enlarge code.svg and move it to top left
          />
          <img
            src="/chess.svg"
            alt="Chess Icon"
            className="h-64 w-64 absolute bottom-2 right-2" // Enlarge chess.svg and move it to bottom right
          />
        </div>
      </div>
    </section>
  );
};

export default About;
