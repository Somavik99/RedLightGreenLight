import { useEffect, useState } from "react";
import { EmailRegex, NameRegex } from "./Regex";

function useRegistration({ Name, email, phone }) {
  const [RegState, setRegState] = useState({
    Name: Name,
    email: email,
    phone: phone,
  });

  const [Error, setError] = useState(true);

  useEffect(() => {
    if (Error) {
      setError((err) => {
        return { ...err }, console.log(RegState.Name + ' ' + RegState.email + ' ' + RegState.phone + "is not validated");
      });
    }
  }, [RegState,Error]);

  const InputChange = (e) => {
    setRegState((reg) => {
      return { ...reg, [e.target.name]: e.target.value };
    });
  };

  const FormSubmit = () => {
    const { Name, email, phone } = RegState;

    if (NameRegex.test(Name) || "") {
      setError(!Error)
      alert("Please Enter a Valid Name");
    } else if (EmailRegex.test(email) || "") {
      setError(!Error)
      alert("Please Enter a Valid Email");
    } else if (Number(phone.split("").join("").length) !== 10 || Number("")) {
      setError(!Error)
      alert("Please enter a valid phone number  of 10 digits");
    } else {
      setError(Error)
      localStorage.setItem(
        "dataKey",
        JSON.stringify({
          Name: Name,
          email: email,
          phone: phone,
        })
      );
      alert("Registered Successfully")
      
    }
  };

  return { InputChange, RegState, FormSubmit };
}

export default useRegistration;
