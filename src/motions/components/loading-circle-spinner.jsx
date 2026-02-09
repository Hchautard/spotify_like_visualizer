"use client";

import { motion } from "motion/react";

function LoadingCircleSpinner() {
  return (
    <div className="container">
      <motion.div
        className="spinner"
        animate={{ transform: "rotate(360deg)" }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .spinner {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                border: 4px solid #e0e0e0;
                border-top-color: #ff0088;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingCircleSpinner;
