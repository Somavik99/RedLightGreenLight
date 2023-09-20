import { useEffect, useState } from "react";
import { ColorBg } from "./Color";

function useLight() {
  const [CurrentINdex, setCurrentIndex] = useState(0);
  const [CountClick, setCountClick] = useState(0);
  const [IsActive, setIsActive] = useState(true);
  const [TimeCount,setTimeCount] = useState(40)

  useEffect(() => {
    let Timer;
    let CountTimer;
    if (!IsActive) {
      Timer = setTimeout(() => {
        setCurrentIndex((n) => {
          return n > CurrentINdex
            ? ColorBg[CurrentINdex]
            : n === ColorBg.length - 1
            ? 0
            : n + 1;
        });
      }, 500);
    }
if(TimeCount!==0){
    CountTimer = setTimeout(()=>{
setTimeCount((t)=>t-1)
    },1000)}

    return () => {
      clearTimeout(Timer,CountTimer);

    };
  }, [CurrentINdex, IsActive,TimeCount]);

  const OnClickColor = () => {
    setCountClick((count) => {
      return CurrentINdex === 0
        ? count
        : CurrentINdex === ColorBg.length - 1
        ? count + 1
        : count;
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
    TimeCount
  };
}

export default useLight;
