import React from "react";
import { useSpring, animated } from "react-spring";

export default function AnimatedBg() {
  const style = useSpring({
    from: {
      position: "Absolute",
      top: "0%",
      left: "0%",
      transform: "rotate(0deg)",
    },
    to: async (next) => {
      while (1) {
        await next({
          transform: "rotate(45deg)",
        });
        await next({
          transform: "rotate(90deg)",
        });
        await next({
          transform: "rotate(135deg)",
        });
        await next({
          transform: "rotate(180deg)",
        });
        await next({
          transform: "rotate(225deg)",
        });
        await next({
          transform: "rotate(270deg)",
        });
        await next({
          transform: "rotate(315deg)",
        });
        await next({
          transform: "rotate(360deg)",
        });
        await next({
          transform: "rotate(0deg)",
        });
      }
    },
  });
  return (
    <React.Fragment>
      <animated.div style={style}>
        <img src="/images/SXG.png" width="50px" height="50px" alt="logo" />
      </animated.div>
    </React.Fragment>
  );
}
