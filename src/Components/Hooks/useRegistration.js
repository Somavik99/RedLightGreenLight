import { useState } from "react";
import { EmailRegex, NameRegex } from "./Regex";

function useRegistration({ Name, email, phone }) {
  const [RegState, setRegState] = useState({
    Name: Name,
    email: email,
    phone: phone,
  });

  const InputChange = (e) => {
    setRegState((reg) => {
      return { ...reg, [e.target.name]: e.target.value };
    });
  };

  const FormSubmit = () => {
    const { Name, email, phone } = RegState;

    if (NameRegex.test(Name)) {
      alert("Please Enter a Valid Name");
    } else if (EmailRegex.test(email) ) {
      alert("Please Enter a Valid Email");
    } else if (Number(phone.split("").join("").length) !== 10 || Number("")) {
      alert("Please enter a valid phone number  of 10 digits");
    } else {
      localStorage.setItem(
        "dataKey",
        JSON.stringify({
          name: RegState.Name,
          email: RegState.email,
          phone: RegState.phone,
        })
      );
    }
  };

  return { InputChange, RegState, FormSubmit };
}

export default useRegistration;
