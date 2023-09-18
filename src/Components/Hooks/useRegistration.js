import { useEffect, useState } from "react";
import { EmailRegex, NameRegex } from "./Regex";

function useRegistration({ Name, email, phone }) {
  const [RegState, setRegState] = useState({
    Name: Name,
    email: email,
    phone: phone,
  });

  const [Error, setError] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    if (Error && !LoggedIn ) {
      console.log(
        RegState.Name +
          " " +
          RegState.email +
          " " +
          RegState.phone +
          " " +
          "is not validated"
      );
    }
  }, [RegState, Error,LoggedIn]);

  const InputChange = (e) => {
    setRegState((reg) => {
      return { ...reg, [e.target.name]: e.target.value };
    });
  };

  const FormSubmit = () => {
    const { Name, email, phone } = RegState;

    if (NameRegex.test(Name) || "") {
      setError(Error);
      setLoggedIn(!LoggedIn);
      alert("Please Enter a Valid Name");
    } else if (EmailRegex.test(email)) {
      setError(Error);
      setLoggedIn(!LoggedIn);
      alert("Please Enter a Valid Email");
    } else if (Number(phone.split("").join("").length) !== 10 || Number("")) {
      setError(Error);
      setLoggedIn(!LoggedIn);
      console.log(!LoggedIn);
      alert("Please enter a valid phone number  of 10 digits");
    } else {
      setError(!Error);
      setLoggedIn(LoggedIn);
      console.log(`Is Logged In ${LoggedIn}`);
      localStorage.setItem(
        "dataKey",
        JSON.stringify({
          Name: Name,
          email: email,
          phone: phone,
        })
      );
      alert("Registered Successfully");
    }
  };

  return { InputChange, RegState, FormSubmit, LoggedIn };
}

export default useRegistration;
