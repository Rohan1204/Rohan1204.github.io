import React from 'react';
import { FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-[#4B3F2F] via-[#5C4A3D] to-[#4B3F2F] text-[#ECE2D0]"
    >
      <div className="text-center max-w-xl w-full bg-[#4B3F2F]/70 backdrop-blur-md rounded-2xl p-10 shadow-lg border border-[#ECE2D0]/20">
        {/* Heading */}
        <h2
          style={{ fontFamily: "'Limelight', cursive" }}
          className="text-5xl font-bold mb-8 text-[#D97B66]"
        >
          Contact Me{''}
          <Typewriter
            words={['']}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={10000}
          />
        </h2>

        {/* Subtext */}
        <p
          className="text-[#ECE2D0]/80 text-lg mb-10"
          style={{ fontFamily: "'Merriweather', serif" }}
        >
          Feel free to reach out via email or LinkedIn, or download my resume below!
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-5">
          <a
            href="mailto:rohan94539@gmail.com"
            className="flex items-center gap-3 px-6 py-3 bg-[#D97B66] hover:bg-[#c76a58] text-[#ECE2D0] font-medium rounded-lg shadow transition transform hover:scale-105"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            <FaEnvelope size={18} /> Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/rohan1204/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 bg-[#D97B66] hover:bg-[#c76a58] text-[#ECE2D0] font-medium rounded-lg shadow transition transform hover:scale-105"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            <FaLinkedin size={18} /> Connect on LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-3 px-6 py-3 bg-[#D97B66] hover:bg-[#c76a58] text-[#ECE2D0] font-medium rounded-lg shadow transition transform hover:scale-105"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            <FaFileDownload size={18} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
