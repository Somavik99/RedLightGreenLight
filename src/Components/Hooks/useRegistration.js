import { useState } from "react";
import { EmailRegex, NameRegex } from "./Regex";

function useRegistration({ name, email, phone }) {
  const [RegState, setRegState] = useState({
    name: "",
    email: "",
    phone: "",
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
    if (NameRegex.test(name)) {
      alert("Please Enter a Valid Name");
    } else if (EmailRegex.test(email)) {
      alert("Please Enter a Valid Email");
    } else if (typeof phone !== "string" && phone < 10) {
      alert("Please enter a valid phone number");
    } else {
      localStorage.setItem(
        "dataKey",
        JSON.stringify({ name: name, email: email, phone: phone })
      );
      console.log(RegState.name);
    }
  };

  return { InputChange, RegState, FormSubmit };
}

export default useRegistration;
