"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "../components/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";



    
    const loadingStates = [
    {
      text: "Hi! What's up?",
    },
    {
      text: "Thank you for being here.",
    },
    {
      text: "I'm on a journey to become a better software developer every day.",
    },
    {
      text: "Learning new technologies and improving my skills.",
    },
    {
      text: "Writing clean and efficient code.",
    },
    {
      text: "Building innovative projects and solving real-world problems.",
    },
    {
      text: "Constantly seeking feedback and learning from others.",
    },
    {
      text: "Welcome to my portfolio! Let's explore together.",
    },
  ];
  

export function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      {/* The buttons are for demo only, remove it in your actual code ⬇️ */}
      <button
        onClick={() => setLoading(true)}
        className="bg-red-600  hover:bg-red-300 text-white font-bold mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center "
        
      >
        Visit My Portfolio
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
