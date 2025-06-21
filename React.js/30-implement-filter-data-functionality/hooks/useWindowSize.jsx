import React, { useEffect, useState } from "react";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect (() => {
    const handleEvent = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleEvent);

      return () => {
        window.removeEventListener("resize", handleEvent);
      };
  }, []);

  return windowSize
}
