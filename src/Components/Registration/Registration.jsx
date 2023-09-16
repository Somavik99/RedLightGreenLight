import { Input } from "@material-tailwind/react";
import useRegistration from "../Hooks/useRegistration";

const Registration = () => {
  const NameKey = {
    Name: "Name",
    Email: "Email",
    Phone: "Phone",
  };

  const { InputChange, RegState, FormSubmit } = useRegistration(
    NameKey.Name,
    NameKey.Email,
    NameKey.Phone
  );

  const ONSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="text-[50px] text-green-400">User Registration</h1>
      <form onSubmit={ONSubmit}>
        <div className="flex justify-center items-center flex-col">
          <div className="mt-5">
            <label htmlFor="Name" className="float-left font-bold">
              Name
            </label>
            <div className="w-[30vw] mt-8">
              <Input
                variant="standard"
                type="text"
                value={RegState.name}
                onChange={InputChange}
                name={NameKey.Name}
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="Email" className="float-left font-bold">
              Email
            </label>
            <div className="w-[30vw] mt-8">
              <Input
                variant="standard"
                type="email"
                value={RegState.email}
                name={NameKey.Email}
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
                variant="standard"
                type="text"
                value={RegState.phone}
                name={NameKey.Phone}
                className=""
                onChange={InputChange}
              />
            </div>
          </div>
          <div className="m-8 w-[10vw]">
            <button
              onClick={FormSubmit}
              type="submit"
              className="text-red-500 font-bold border-[2px] w-[100px] h-[50px] border-gray-400 border-spacing-7 rounded-[8px]"
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
