"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the AnimatedNumbers component with SSR disabled
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Projects",
    value: 9,  // Changed value to a number
    postfix: "+",
  },
  {
    
    metric: "Certifications",
    value: 14,  // Changed value to a number
    postfix: "+",
  },
  {
    metric: "Hackathons",
    value: 4,  // Changed value to a number
  },
  {
    metric: "Years",
    value: 3,  // Changed value to a number
  },
];

const AchievementsSection = () => {
  return (
    <div className="px-4 py-8 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="flex flex-row text-4xl font-bold text-white">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={achievement.value}
                locale="en-US"
                className="text-4xl font-bold text-white"
                configs={() => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
