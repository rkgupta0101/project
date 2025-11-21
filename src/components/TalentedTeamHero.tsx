"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TalentedTeamHero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Calculate rotation based on scroll progress
  const topLeftRotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-15, 12, 40]
  );

  const topRightRotation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [15, -12, -40]
  );

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
    <div
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden bg-[#0a0a14] flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12"
    >
      {/* Left Dark Pink Parabola/Curved Shape */}
      <motion.div
        className="absolute top-[15%] left-[-35%] sm:left-[-25%] md:left-[-15%] w-[300px] h-[350px] sm:w-[450px] sm:h-[500px] md:w-[600px] md:h-[650px] bg-[#5d2d4d] rounded-full blur-[60px] sm:blur-[75px] md:blur-[90px] opacity-70"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Dark Pink Parabola/Curved Shape */}
      <motion.div
        className="absolute top-[8%] right-[-35%] sm:right-[-25%] md:right-[-12%] w-[350px] h-[400px] sm:w-[500px] sm:h-[550px] md:w-[650px] md:h-[700px] bg-[#6d3a5a] rounded-full blur-[65px] sm:blur-[80px] md:blur-[95px] opacity-65"
        animate={{
          scale: [1, 1.08, 1],
          x: [0, -18, 0],
          y: [0, 15, 0],
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
          className="relative bg-[#252540]/50 backdrop-blur-2xl rounded-[80px] sm:rounded-[120px] md:rounded-[160px] lg:rounded-[200px] border border-white/[0.12] shadow-[0_0_120px_rgba(139,92,246,0.15)] px-6 py-16 sm:px-12 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-28 overflow-visible"
          whileHover="hover"
        >
          {/* Top Pills - Fun (left) and Inclusive (right) positioned outside main heading */}
          <motion.div
            variants={pillVariants}
            style={{ rotate: topLeftRotation }}
            className="absolute top-[24%] left-[2%] xs:left-[4%] sm:left-[6%] md:left-[8%] lg:left-[10%] bg-[#2d2d48]/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full border border-white/[0.12] shadow-lg"
            whileHover={{
              scale: 1.1,
              y: -6,
              backgroundColor: "rgba(45, 45, 72, 0.95)",
            }}
          >
            <span className="text-gray-200 text-xs sm:text-sm font-normal">
              Fun
            </span>
          </motion.div>
          <motion.div
            variants={pillVariants}
            style={{ rotate: topRightRotation }}
            className="absolute top-[24%] right-[2%] xs:right-[4%] sm:right-[6%] md:right-[8%] lg:right-[10%] bg-[#2d2d48]/85 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 rounded-full border border-white/[0.12] shadow-lg"
            whileHover={{
              scale: 1.1,
              y: -6,
              backgroundColor: "rgba(45, 45, 72, 0.95)",
            }}
          >
            <span className="text-gray-200 text-xs sm:text-sm font-normal">
              Inclusive
            </span>
          </motion.div>

          {/* Content */}
          <div className="text-center relative">
            {/* Handwritten Text with Arrow */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4"
            >
              <span className="text-[#ff6b9d] text-sm sm:text-base md:text-lg font-caveat tracking-wide">
                we are the team of
              </span>
              <motion.svg
                width="35"
                height="20"
                viewBox="0 0 50 30"
                className="text-[#ff6b9d] hidden sm:block"
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
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white mb-6 sm:mb-8 leading-tight tracking-normal px-2"
            >
              20+ Talented Folks
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={textVariants}
              className="text-gray-400 text-xs xs:text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-4 sm:px-6"
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
              className="relative bg-gradient-to-r from-[#e74c6d] via-[#ef5f5f] to-[#f97854] text-white px-6 py-2.5 sm:px-8 sm:py-3 md:px-9 md:py-3.5 rounded-full font-medium text-xs sm:text-sm md:text-base shadow-lg shadow-pink-500/20 overflow-hidden group"
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
                className="absolute inset-0 bg-gradient-to-r from-[#f97854] via-[#ef5f5f] to-[#e74c6d] opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            {/* Bottom Pills */}
            <motion.div
              variants={bottomPillsVariants}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-10 sm:mt-12 md:mt-16"
            >
              {bottomPills.map((pill, index) => (
                <motion.div
                  key={pill}
                  variants={singlePillVariant}
                  className="bg-[#2a2a45]/60 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/[0.08] shadow-sm"
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    backgroundColor: "rgba(42, 42, 69, 0.8)",
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
                  <span className="text-gray-400 text-xs sm:text-sm font-normal">
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
