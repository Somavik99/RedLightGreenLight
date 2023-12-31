import useLight from "../Hooks/Light/useLight";
import { ColorBg } from "../Hooks/Light/Color";
import { useEffect, useState } from "react";

const RlightGLight = () => {
  const [TimeCount, setTimeCount] = useState(40);
  const [ClickState, setClickState] = useState({
    Easy: 15,
    Medium: 25,
    Hard: 35,
  });

  const {
    CountClick,
    ClickStart,
    CurrentINdex,
    IsActive,
    OnClickColor,
    ClickStop,
    OnClickState,
  } = useLight({ TimeCount, setTimeCount, setClickState });

  useEffect(() => {
    let CountTimer;
    if (TimeCount !== 0) {
      CountTimer = setTimeout(() => {
        return setTimeCount((t) => t - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(CountTimer);
    };
  }, [TimeCount]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <div className="mb-[-20px] mt-[30px]">
          <button
            name="Easy"
            value={ClickState.Easy}
            onClick={OnClickState}
            className="m-[10px] w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200"
          >
            Easy
          </button>
          <button
            value={ClickState.Medium}
            onClick={OnClickState}
            name="Medium"
            className="m-[10px] w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200"
          >
            Medium
          </button>
          <button
            value={ClickState.Hard}
            onClick={OnClickState}
            name="Hard"
            className="m-[10px] w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200"
          >
            Hard
          </button>
        </div>
        <div className="w-[30vw] md:w-[30vw] md:h-[30vw] h-[30vw] flex justify-center items-center flex-col  border-gray-800 m-auto mt-24 rounded-2xl bg-gray-200">
          {!IsActive ? (
            ColorBg.map((color, index) => {
              return (
                <div key={index}>
                  {
                    index === CurrentINdex ? (
                      <button
                        className="md:w-[15vw] w-[8vw] h-[8vw] md:h-[15vw] border-[2px] border-gray-800  rounded-full  mt-[12%] "
                        style={{ backgroundColor: color.colors }}
                        onClick={OnClickColor}
                        disabled={TimeCount === 0}
                      ></button>
                    ) : null
                    // <div className="md:w-[15vw] w-[8vw] h-[8vw] md:h-[15vw] border-[2px] border-gray-800  rounded-full  mt-[12%] " style={{ backgroundColor:"red"}}></div>
                  }
                </div>
              );
            })
          ) : (
            <div
              className="md:w-[15vw] w-[8vw] h-[8vw] md:h-[15vw] border-[2px] border-gray-800  rounded-full  mt-[12%] "
              style={{ backgroundColor: "red" }}
            ></div>
          )}
          {!IsActive ? (
            <button
              className="m-auto w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200 mt-[5%]"
              onClick={ClickStop}
            >
              RESET
            </button>
          ) : (
            <button
              className="m-auto w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200 mt-[5%]"
              onClick={ClickStart}
            >
              START
            </button>
          )}
          <div className=" text-gray-500 text-[80px]">
            {!IsActive ? CountClick : 0}
          </div>
        </div>
        <div className="mb-[10%] text-gray-500 text-[80px]">
          Time: {!IsActive ? TimeCount : 0}s
        </div>
      </div>
    </div>
  );
};

export default RlightGLight;
