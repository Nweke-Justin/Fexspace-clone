"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  MessageCircleMore,
  UsersRound,
  ListCheck,
  ChartSpline,
  BriefcaseBusiness,
} from "lucide-react";

function Timer() {
  const textArray = [
    {
      imageUrl: "/pictures/fexspace3.png",
      title: "Easily Communicate With Teammates",
      description:
        "Connect with your teams using group chat, audio, and video conferencing. Accelerate communication speed and boost responsiveness.",
    },
    {
      imageUrl: "/pictures/fexspace4.jpg",
      title: "Manage On-Site & Remote Teams",
      description:
        "Create and manage teams for improved collaboration, efficiency, and effectiveness. Use project boards and team folders to track progress.",
    },
    {
      imageUrl: "/pictures/fexspace3.png",
      title: "Manage Tasks Seamlessly and Easily",
      description:
        "Meet project deadlines by assigning priority tasks to teams using automated workflows, shared calendars, and project resources.",
    },
    {
      imageUrl: "/pictures/fexspace6.png",
      title: "Collaborate With Teammates Quickly",
      description:
        "Innovate communication, coordination, and task management, while tracking progress along a project timeline.",
    },
    {
      imageUrl: "/pictures/fexspace7.jpg",
      title: "Work From Anywhere in the World",
      description:
        "Securely access work files anywhere. View, edit, delete, and approve documents on the go.",
    },
  ];

  // Store icon components, NOT JSX elements
  const icons = [
    MessageCircleMore,
    UsersRound,
    ListCheck,
    ChartSpline,
    BriefcaseBusiness,
  ];

  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % textArray.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [textArray.length]);

  useEffect(() => {
    setIsAnimating(true);
  }, [index]);

  return (
    <div className="gap-15 items-center w-[95vw] md:w-[80vw] mx-auto block md:flex">
      {/* Left side image and text block */}
      <div className="w-full md:w-[55%] h-[800px] relative overflow-hidden ">
        {textArray.map((item, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full text-left p-4 transition-all duration-4000 ease-in-out transform
                ${i === index ? "opacity-100 translate-y-0 z-10" : "opacity-0 translate-y-5 z-0"}
              `}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full rounded-xl mb-15"
            />
            <h3 className="text-md md:text-3xl font-bold mb-2 text-center md:text-left">
              {item.title}
            </h3>
            <p className="text-md text-gray-600 text-center md:text-left">
              {item.description}
            </p>
            <div className="w-full md:static px-4 flex">
              <button className="bg-teal-500 font-bold text-white p-3 px-6 mt-5 rounded w-full md:w-[70%]">
                Get Started Now
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Right side bullet & progress circle */}
      <div className="w-[40%] items-center h-[650px] mr-[-5px] border-l-2 border-l-gray-400 border-dashed hidden md:block">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className={`flex relative ${isAnimating ? "pointer-events-none opacity-60" : "cursor-pointer"
              } mb-6`}
          >
            <div className="w-[100px] h-[100px] mb-6">
              <svg className="w-[100px] h-[100px] transform -rotate-90 ml-[-55px]">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="#2dd4bf"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="282.6"
                  strokeDashoffset="282.6"
                  strokeLinecap="round"
                  animate={
                    index === i ? { strokeDashoffset: 0 } : { strokeDasharray: 282.6 }
                  }
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              </svg>
              <motion.div
                className="absolute top-2.5 left-[-46px] bg-white p-5 rounded-full"
                animate={index === i ? { color: "#2dd4bf" } : { color: "#0f172a" }}
                onAnimationComplete={() => setIsAnimating(false)}
              >
                <Icon className="w-10 h-10" />
              </motion.div>
            </div>
            <motion.h1
              className="text-center font-medium text-2xl mt-9"
              initial={{ color: "#6b7280" }}
              animate={index === i ? { color: "#111827" } : { color: "#6b7280" }}
              onAnimationComplete={() => setIsAnimating(false)}
            >
              {textArray[i].title}
            </motion.h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timer;
