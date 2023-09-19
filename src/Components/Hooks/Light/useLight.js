import { useEffect, useState } from "react";
import { ColorBg } from "./Color";

function useLight() {
  const [CurrentINdex, setCurrentIndex] = useState(0);
  const [CountClick, setCountClick] = useState(0);
  const [IsActive, setIsActive] = useState(false);

  useEffect(() => {
    let Timer;
    if (!IsActive) {
      Timer = setTimeout(() => {
        setCurrentIndex((n) => {
          return n > CurrentINdex
            ? ColorBg[CurrentINdex]
            : n === ColorBg.length - 1
            ? 0
            : n + 1;
        });
      }, 100);
    }

    return () => {
      clearTimeout(Timer);
    };
  }, [CurrentINdex, IsActive]);

  // const CLickCallBack = ColorBg.filter((Color,i) => {
  //   if (Color[i] === ColorBg[0]) {
  //     setCountClick((count) => {
  //       return count * 0;
  //     });
  //     IsActive;
  //   } else if (Color[i] === ColorBg[1]) {
  //     setCountClick((count) => {
  //       return count + 1;
  //     });
  //     !IsActive;
  //   } else {
  //     return CountClick;
  //   }
  // });

  const OnClickColor = () => {
    setCountClick((count) => {
      if (ColorBg[0]) {
        return count * 0;
      } else {
        return count + 1;
      }
    });
  };

  const ClickStart = () => {
    setIsActive((active) => !active);
  };

  return {
    CountClick,
    ClickStart,
    IsActive,
    setCountClick,
    CurrentINdex,
    OnClickColor,
  };
}

export default useLight;
