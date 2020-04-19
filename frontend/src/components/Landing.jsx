import React from "react";
import { useSpring, animated } from "react-spring";

function Landing() {
  const style = useSpring({
    from: { WebkitFilter: "hue-rotate(0deg)" },
    to: async (next) => {
      while (1) {
        await next({ WebkitFilter: "hue-rotate(20deg)"});
        await next({ WebkitFilter: "hue-rotate(40deg)" });
        await next({ WebkitFilter: "hue-rotate(60deg)"});
        await next({ WebkitFilter: "hue-rotate(80deg)" });
        await next({ WebkitFilter: "hue-rotate(100deg)" });
        await next({ WebkitFilter: "hue-rotate(120deg)"});
      }
    },
  });

  return (
    <animated.div className="container-fluid m-0 p-0" style={style}>
      <img
        className="img-fluid w-100"
        src="/images/neko.png"
        alt="maneki neko"
        style={{ style }}
      />
    </animated.div>
  );
}

export default Landing;
