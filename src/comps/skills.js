import React from "react";

// Import react-circular-progressbar module and styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";


// Radial separators

const Skills = () => {
  // return (
  //   <AnimatedProgressProvider
  //     valueStart={0}
  //     valueEnd={66}
  //     duration={1.4}
  //     easingFunction={easeQuadInOut}
  //     repeat
  //   >
  //     {(value) => {
  //       const roundedValue = Math.round(value);
  //       return (
  //         <CircularProgressbar
  //           value={value}
  //           text={`${roundedValue}%`}
  //           /* This is important to include, because if you're fully managing the
  // animation yourself, you'll want to disable the CSS animation. */
  //           styles={buildStyles({ pathTransition: "none" })}
  //         />
  //       );
  //     }}
  //   </AnimatedProgressProvider>
  // );
};

export default Skills;
