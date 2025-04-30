import React from "react";
import { Typewriter } from "react-simple-typewriter";

export const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-[#ECE2D0] text-[#4B3F2F] px-10
      "
    >

      {/* Particles Layer */}
      <div className="absolute inset-0 z-0">
        {/* You could add subtle brownish particles here later */}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-start justify-center w-5/6 mx-auto text-left px-4">

        {/* Text Section */}
        <div className="flex flex-col text-left px-4 w-full">
          <h1
            style={{ fontFamily: "'Limelight', cursive" }}
            className="text-5xl md:text-6xl mb-6 leading-tight text-[#D97B66]"
          >
            About Me{''}
            <span style={{ color: '#D97B66' }}>
              <Typewriter
                words={['']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={1}
                deleteSpeed={1}
                delaySpeed={100}
              />
            </span>
          </h1>

          <p 
            style={{ fontFamily: "'Limelight', cursive" }}
            className="text-xl mb-8 text-[#4B3F2F]/70"
          >
            <span
              style={{
                fontFamily: "'Merriweather', serif",
                color: '#4B3F2F',
              }}>
              I am currently a junior at the University of Illinois at Urbana-Champaign, pursuing a strong interest in Embedded Systems, Software Development, and Robotics. I am passionate about applying my technical skills to tackle real-world challenges across industries, including Technology, Finance, Automotive, and Consumer Products. <br /> <br />Beyond academics, I am an active and outdoors-oriented individual who enjoys taking on new challenges both personally and professionally. I am eager to connect and explore opportunities that allow me to create meaningful, user-impacting solutions. I am actively seeking internships and full-time roles where I can contribute, grow, and innovate.
            </span>
          </p>
        </div>

      </div>

    </section>
  );
};
