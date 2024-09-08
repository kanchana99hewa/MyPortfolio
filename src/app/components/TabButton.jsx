import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, style }) => {
  const buttonClasses = active ? "text-pink-500" : "text-gray-500";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-pink-500 ${buttonClasses}`}
        style={style} 
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 mt-2 mr-3 bg-pink-400"
      ></motion.div>
    </button>
  );
};

export default TabButton;
