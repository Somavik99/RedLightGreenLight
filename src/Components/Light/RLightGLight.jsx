import useLight from "../Hooks/Light/useLight";
import { ColorBg } from "../Hooks/Light/Color";

const RlightGLight = () => {
  const { CountClick, ClickStart, CurrentINdex, IsActive } = useLight({ ColorBg });

  return (
    <div>
      <div className="">
        <div className="w-[30vw] md:w-[30vw] md:h-[30vw] h-[30vw] flex justify-center items-center flex-col  border-gray-800 m-auto mt-24 rounded-2xl bg-gray-200">
          <div
            className="md:w-[15vw] w-[8vw] h-[8vw] md:h-[15vw] border-[2px] border-gray-800  rounded-full  mt-[12%] "
            style={{
              backgroundColor: !IsActive? ColorBg.map((color, i) => {
                return i === CurrentINdex ? color.colors : null;
              }):"red"
            }}
          ></div>
          <button
            className="m-auto w-[100px] h-[50px] border-[2px] border-gray-800 rounded-xl  bg-blue-gray-200 mt-[5%]"
            onClick={ClickStart}
          >
            START
          </button>
          <div>{CountClick}</div>
        </div>
      </div>
    </div>
  );
};

export default RlightGLight;
