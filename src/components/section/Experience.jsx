import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export const Experience = () => (
  <motion.section
    id="Experience"
    className="min-h-screen flex flex-col items-center px-10 pt-10 snap-start scroll-mt-20 relative overflow-hidden bg-[#4B3F2F] text-[#ECE2D0]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {/* Heading */}
    <h2
      style={{ fontFamily: "'Limelight', cursive" }}
      className="text-6xl font-bold mb-10 text-[#D97B66]"
    >
      Experience
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

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl place-items-center">
      
      {/* Experience Card */}
      {[
        {
          company: 'Siemens',
          role: 'Hardware Engineer Intern',
          desc: 'Siemens Healthineers => Summer 2025',
        },
        {
          company: 'Varian',
          role: 'Software Development Intern',
          desc: 'Developed a Python-based application to alleviate manual work for database file management. Parsed database exports to update 4+ years of obsolete and missing files for the QA division.',
        },
        {
          company: 'Illinois BioSensors Lab',
          role: 'Research Assistant',
          desc: 'Co-authored a research paper with several PhD students under professor mentorship. Developed and prototyped several camera mounts using Autodesk Fusion for precise cancer therapy cell detection.',
        },
        {
          company: 'Rensselaer Polytechnic',
          role: 'Research Assistant',
          desc: 'Analyzed chemical informatics Excel data sets through Python and Google Colab under an applied physics faculty member. Developed graphical models of data exports through Excel graph generation.',
        }
      ].map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="backdrop-blur-md border border-[#ECE2D0]/20 rounded-3xl transform transition duration-300 
          hover:scale-105 hover:shadow-[0_0_20px_rgba(217,123,102,0.4)] cursor-default p-6 shadow-md w-[550px] 
          flex flex-col h-[250px] bg-[#4B3F2F]/80"
        >
          <h3
            className="text-3xl mb-2 text-[#D97B66]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {exp.company}
          </h3>
          <h4
            className="text-xl mb-2 text-[#A7C957] italic"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {exp.role}
          </h4>
          <p
            className="text-md text-[#ECE2D0]/80"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            {exp.desc}
          </p>
        </motion.div>
      ))}

    </div>
  </motion.section>
);
