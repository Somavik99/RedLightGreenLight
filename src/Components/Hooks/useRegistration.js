import { useState } from "react";
import { EmailRegex, NameRegex } from "./Regex";

function useRegistration(name , email , phone ) {
  const [RegState, setRegState] = useState({
    name,
    email,
    phone,
  });

  const InputChange = (e) => {
    const { name, value } = e.target;
    setRegState((reg) => {
      return {
        ...reg,
        [name]: value,
      };
    });
  };

  const FormSubmit = () => {
    const { name, email, phone } = RegState;
    if (NameRegex.test(name)) {
      alert("Please Enter a Valid Name");
    } else if (EmailRegex.test(email)) {
      alert("Please Enter a Valid Email");
    } else if (phone.length < 10) {
      alert("Please enter a valid phone number");
    } else {
      localStorage.setItem("dataKey", JSON.stringify({ name, email, phone }));
    }
  };

  return { InputChange, RegState, FormSubmit };
}

export default useRegistration;
