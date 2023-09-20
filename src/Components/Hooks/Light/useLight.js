import { useEffect, useState } from "react";
import { ColorBg } from "./Color";

function useLight({ TimeCount,setTimeCount }) {
  const [CurrentINdex, setCurrentIndex] = useState(0);
  const [CountClick, setCountClick] = useState(0);
  const [IsActive, setIsActive] = useState(true);

  useEffect(() => {
    let Timer;

    if (!IsActive && TimeCount !== 0) {
      Timer = setTimeout(() => {
        setCurrentIndex((n) => {
          return n > CurrentINdex
            ? ColorBg[CurrentINdex]
            : n === ColorBg.length - 1
            ? 0
            : n + 1;
        });
      }, 200);
    }

    return () => {
      clearTimeout(Timer);
    };
  }, [CurrentINdex, IsActive, TimeCount]);

  const OnClickColor = () => {
    setCountClick((count) => {
      return CurrentINdex === 0
        ? 0
        : CurrentINdex === ColorBg.length - 1
        ? count + 1
        : count;
    });
  };
  const ClickStart = () => {
    setIsActive((active) => !active);
  };

  const ClickStop = ()=>{
    setCountClick(0)
    setTimeCount(40)
    setCurrentIndex(0)
    setIsActive(true)
  }

  return {
    CountClick,
    ClickStart,
    IsActive,
    setCountClick,
    CurrentINdex,
    OnClickColor,
    ClickStop
  };
}

export default useLight;
