"use client";

import React from "react";
import { motion } from "framer-motion";

const TalentedTeamHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 20,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut" as const,
      },
    },
  };

  const pillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      y: [-3, 3, -3],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const bottomPillsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.6,
      },
    },
  };

  const singlePillVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      borderColor: "rgba(255, 255, 255, 0.2)",
      boxShadow: "0 0 100px rgba(139,92,246,0.25)",
      transition: { duration: 0.3 },
    },
  };

  const bottomPills = [
    "Focused",
    "Collaborative",
    "United",
    "Vibrant",
    "Dynamic",
    "Motivated",
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0a0a1a] flex items-center justify-center p-4 sm:p-8 lg:p-12">
      {/* Animated Background Gradient Blobs - Left Purple */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-purple-700/40 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Right Purple/Pink Blob */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/35 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Card Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl"
      >
        {/* Large Capsule Card */}
        <motion.div
          variants={cardVariants}
          className="relative bg-[#14142a]/50 backdrop-blur-xl rounded-[200px] border-2 border-white/[0.15] shadow-[0_0_80px_rgba(139,92,246,0.15)] px-8 py-20 sm:px-16 sm:py-24 lg:px-24 lg:py-28 overflow-visible"
          whileHover="hover"
        >
          {/* Top Pills - Fun (left) and Inclusive (right) positioned outside main heading */}
          <motion.div
            variants={pillVariants}
            className="absolute top-[28%] left-[2%] sm:left-[6%] lg:left-[8%] transform rotate-45 bg-[#2a2a3e]/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/[0.12] shadow-xl"
            whileHover={{
              scale: 1.1,
              y: -6,
              backgroundColor: "rgba(42, 42, 62, 0.9)",
            }}
          >
            <span className="text-gray-200 text-base font-medium">Fun</span>
          </motion.div>
          <motion.div
            variants={pillVariants}
            className="absolute top-[28%] right-[2%] sm:right-[6%] lg:right-[8%] transform -rotate-45 bg-[#2a2a3e]/70 backdrop-blur-sm px-6 py-3 rounded-full border border-white/[0.12] shadow-xl"
            whileHover={{
              scale: 1.1,
              y: -6,
              backgroundColor: "rgba(42, 42, 62, 0.9)",
            }}
          >
            <span className="text-gray-200 text-base font-medium">
              Inclusive
            </span>
          </motion.div>

          {/* Content */}
          <div className="text-center relative">
            {/* Handwritten Text with Arrow */}
            <motion.div
              variants={textVariants}
              className="flex items-center justify-center gap-2 mb-3"
            >
              <span className="text-pink-400 text-lg sm:text-xl font-caveat tracking-wide">
                we are the team of
              </span>
              <motion.svg
                width="50"
                height="30"
                viewBox="0 0 50 30"
                className="text-pink-400"
              >
                <motion.path
                  d="M 5 10 Q 20 2, 35 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  variants={arrowVariants}
                />
                <motion.path
                  d="M 32 8 L 35 10 L 33 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={arrowVariants}
                />
              </motion.svg>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={textVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide"
            >
              20+Talented Folks
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-gray-300/90 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed px-4"
            >
              From passion-driven dedication to impactful contribution,
              <br className="hidden sm:block" />
              we do it all here. We are growing and will be excited to hear
              <br className="hidden sm:block" />
              from you !
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative bg-gradient-to-r from-[#e74c6d] via-[#f26d5e] to-[#ff8a4f] text-white px-10 py-4 rounded-full font-medium text-base sm:text-lg shadow-lg shadow-pink-500/25 overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Join our team
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff8a4f] via-[#f26d5e] to-[#e74c6d] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Bottom Pills */}
            <motion.div
              variants={bottomPillsVariants}
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-20"
            >
              {bottomPills.map((pill, index) => (
                <motion.div
                  key={pill}
                  variants={singlePillVariant}
                  className="bg-[#252538]/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/[0.08] shadow-md"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    backgroundColor: "rgba(37, 37, 56, 0.85)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    transition: { duration: 0.2 },
                  }}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 2 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                >
                  <span className="text-gray-300 text-sm font-medium">
                    {pill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TalentedTeamHero;
