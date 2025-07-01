"use client"
import { useState } from "react";
import { ChevronDown, ChevronUp, Users, Cloud, MessageSquare, CircleArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    icon: <Users className="text-purple-500 w-8 h-8" />,
    title: "Team Collaboration",
    description: "Manage your teams, stay connected, flexible and productive. Get work done anytime, anywhere with the right collaboration tools.",
  },
  {
    id: 2,
    icon: <Cloud className="text-sky-400 w-8 h-8" />,
    title: "Cloud File Management",
    description:
      "Manage your personal and project files in a secure cloud workspace and access them across multiple devices.",
  },
  {
    id: 3,
    icon: <MessageSquare className="text-orange-400 w-8 h-8" />,
    title: "Seamless Communication",
    description: "All the essential tools you need to communicate and share content with teams are organized in one place.",
  },
];

export default function FeatureAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Start with no item open

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      {features.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-xl shadow-sm p-4 flex flex-col transition-all duration-300 ease-in-out"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex items-center gap-3">
              <div className="bg-slate-100 rounded-full p-3">{item.icon}</div>
              <h2 className="font-semibold text-lg text-slate-800">{item.title}</h2>
            </div>
            {activeIndex === index ? (
              <ChevronUp className="text-slate-500" />
            ) : (
              <ChevronDown className="text-slate-500" />
            )}
          </div>

          {activeIndex === index && item.description && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 text-gray-500 text-sm leading-relaxed pl-[60px]"
            >
              {item.description}
            </motion.p>
          )}
        </div>
      ))}

      <button className="font-semibold text-md border border-teal-500 text-teal-700 rounded-lg p-3 w-full md:w-[300px] flex space-x-3 justify-center">
        <span>More Features</span>
        <CircleArrowRight className="w-4 h-4 mt-1 text-teal-600" />
      </button>
    </div>
  );
}
