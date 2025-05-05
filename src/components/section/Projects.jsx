import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export const Projects = () => (
  <motion.section
    id="Projects"
    className="min-h-screen flex flex-col items-center px-10 pt-10 snap-start scroll-mt-20 relative overflow-hidden bg-[#ECE2D0] text-[#4B3F2F]"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    {/* Heading */}
    <h2
      style={{ fontFamily: "'Limelight', cursive" }}
      className="text-6xl font-bold mb-12 text-[#D97B66]"
    >
      Projects
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

      {[
        {
          title: "Jetpack Joyride",
          subtitle: "Xilinx Spartan-7 FPGA, SystemVerilog, MicroBlaze SoC, Git",
          desc: "Interactive FPGA-based game leveraging BRAM, frame buffers, and VGA for 60Hz on-screen graphics; integrated a MicroBlaze soft-core to manage SPI/UART devices.",
          shadow: "rgba(59,110,54,0.3)",
        },
        {
          title: "16-bit RISC microprocessor",
          subtitle: "Xilinx Spartan-7 FPGA, SystemVerilog",
          desc: "16-bit RISC (SLC-3) Microprocessor in SystemVerilog with an register file, ALU, and state-based instruction sequencing. Verified results through timing waveforms and synthesis.",
          shadow: "rgba(17,23,12,0.4)",
        },
        {
          title: "Autonomous Rover",
          subtitle: "Arduino MEGA, SOLIDWORKS, Ultrasonic Detection, C",
          desc: "Worked with a team to design and build an autonomous rover to self-navigate through an obstacle course via sensor detection. Placed 2nd out of 8+ teams based on speed and performance.",
          shadow: "rgba(217,123,102,0.4)",
        },
        {
          title: "FIRST Tech Challenge",
          subtitle: "TensorFlow, Git, Mechanical Parts (Actuator, Chassis Design), Java ",
          desc: "Team #13380; Competed in various robotics tournaments to complete 'missions' on a specifed area. Senior design team and assisted with robot testing and performance.",
          shadow: "rgba(9,10,246,0.3)",
        }
      ].map((proj, i) => (
        <motion.div
          key={proj.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="rounded-3xl backdrop-blur-md border border-[#4B3F2F]/20 bg-[#ECE2D0cc] shadow-md hover:scale-[1.02] transition-all duration-300 p-6 w-full h-[220px] overflow-hidden"
          style={{
            boxShadow: `0 0 20px ${proj.shadow}`,
          }}
        >
          <div className="flex flex-col justify-between h-full gap-2">
            <div>
              <h3
                className="text-3xl font-bold text-[#D97B66]"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {proj.title}
              </h3>
              <h4
                className="text-lg text-[#4B3F2F]/80 italic"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {proj.subtitle}
              </h4>
            </div>
            {proj.desc ? (
              <p
                className="text-md text-[#4B3F2F]/80 mt-2"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                {proj.desc}
              </p>
            ) : (
              <div className="h-5" />
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
