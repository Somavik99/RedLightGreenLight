import { useEffect, useState } from "react";
import { ColorBg } from "./Color";

function useLight({ TimeCount, setTimeCount, setClickState }) {
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
      }, 400);
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

  const ClickStop = () => {
    setCountClick(0);
    setTimeCount(40);
    setCurrentIndex(0);
    setIsActive(true);
  };

  const OnClickState = () => {
    setClickState((click) => {
      return click.Easy
        ? CountClick === 15
        : click.Medium
        ? CountClick === 25
        : click.Hard
        ? CountClick === 35
        : click.Easy;
    });
  };

  return {
    CountClick,
    ClickStart,
    IsActive,
    setCountClick,
    CurrentINdex,
    OnClickColor,
    ClickStop,
    OnClickState,
  };
}

export default useLight;
