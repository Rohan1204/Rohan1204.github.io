import React from "react";
import { RobotModel } from "../RobotModel";
import { Typewriter } from "react-simple-typewriter";

export const Home = () => {
  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#4B3F2F] text-[#ECE2D0] px-10"
    >

      {/* Particles Layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content Layer */}
      <div className="relative z-10 flex flex-row items-center justify-between w-full max-w-6xl mx-auto">

        {/* Text Section */}
        <div className="flex flex-col text-left px-4 w-1/2">
          <h1
            style={{ fontFamily: "'Limelight', cursive" }}
            className="text-5xl md:text-6xl mb-6 leading-tight"
          >
            Hello, my name is{' '}
            <span style={{ color: '#D97B66' }}>
              <Typewriter
                words={['Rohan Shah.']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>

          <p
            style={{ fontFamily: "'Limelight', cursive" }}
            className="text-xl mb-8 max-w-md text-[#ECE2D0]/80"
          >
            <span
              style={{
                fontFamily: "'Merriweather', serif",
                color: '#ECE2D0',
              }}
            >
              + Computer Engineering @ Illinois <br />
              + Embedded Systems, Software, and FPGA <br />
            </span>
          </p>

          {/* BUTTONS HERE BELOW PARAGRAPH */}
          <div className="flex gap-10 mt-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-[#ECE2D0] hover:bg-[#D97B66] text-[#ECE2D0] rounded-lg text-lg font-semibold transition transform hover:scale-105"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              View Resume
            </a>

            <a
              href="https://www.linkedin.com/in/rohan1204"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border border-[#ECE2D0] hover:bg-[#D97B66] text-[#ECE2D0] rounded-lg text-lg font-semibold transition transform hover:scale-105"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Robot Section */}
        <div className="relative z-10 w-1/2 flex justify-end">
          <RobotModel />
        </div>
      </div>
    </section>
  );
};
