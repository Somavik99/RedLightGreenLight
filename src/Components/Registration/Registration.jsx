import { Input } from "@material-tailwind/react";
import useRegistration from "../Hooks/useRegistration";

const Registration = () => {


   ///Custom Registration Hook
  const { InputChange, RegState, FormSubmit } = useRegistration({
    name:"",
    email:"",
    phone:"" ,
  });

  const ONSubmit = (e) => {
    e.preventDefault();
  };

  console.log(RegState)
 
  

  return (
    <>
      <h1 className="text-[50px] text-blue-800">Game User Registration</h1>
      <form onSubmit={ONSubmit}>
        <div className="flex justify-center items-center flex-col">
          <div className="mt-5">
            <label htmlFor="Name" className="float-left font-bold">
              Name
            </label>
            <div className="w-[30vw] mt-8">
              <Input
                label="name"
                type="text"
                value={RegState.Name}
                onChange={InputChange}
                name="name"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="Email" className="float-left font-bold">
              Email
            </label>
            <div className="w-[30vw] mt-8">
              <Input
                label="email"
                type="email"
                value={RegState.email}
                name="email"
                onChange={InputChange}
                className=""
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="Mobile" className="float-left font-bold">
              Mobile
            </label>
            <div className="w-[30vw] mt-8">
              <Input
                label="Phone"
                type="text"
                value={RegState.phone}
                name="phone"
                className=""
                onChange={InputChange}
              />
            </div>
          </div>
          <div className="m-8 w-[10vw]">
            <button
              onClick={FormSubmit}
              type="submit"
              className="text-red-500 font-bold border-[1px] border-blue-gray-500 w-[100px] h-[50px]  rounded-[8px] hover:bg-green-400 hover:text-white hover:transition-all hover:-translate-y-1 hover:delay-[150ms] hover:ease-in delay-100 transition-all"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Registration;
