import React, { useState } from 'react'
import { RegexLibrary } from '../Regex';
import { useRouter } from 'next/router';

export default function SigninController() {
    const [email, setEmail] = useState({
        value: "",
        isValid: true,
      });
      const [password, setPassword] = useState({
        value: "",
        isValid: true,
      });
      const [error, setError] = useState("");
    const [emailHelpertext, setEmailHelpertext] = useState("");
    const [passwordHelpertext, setpasswordHelpertext] = useState("");
    const router = useRouter();
    function validateEmail(e: { target: { value: string } }) {
        if (RegexLibrary.MAIL.test(e.target.value)) {
          setEmail({
            value: e.target.value,
            isValid: true,
          });
          setEmailHelpertext("");
        } else {
          setEmail({
            value: e.target.value,
            isValid: false,
          });
          setEmailHelpertext("Email should be in format user@example.com");
        }
      }

      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        try {
          const res = await fetch("http://localhost:3005/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await res.json();
          console.log(data)
          if (data.token) {
            // If we received a token from the server, we can assume the login was successful.
            // You may want to store this token in local storage or a cookie to persist the user's
            // authentication state across sessions.
            console.log("Login successful");
            debugger;
          } else {
            // If we did not receive a token from the server, there was an error with the login request.
            setError("Invalid email or password");
          }
        } catch (error) {
          console.error("Error logging in", error);
          setError("An error occurred while logging in");
        }
      };
      // async function handleClick() {
      //   if (email.value === "" || password.value === "") {
      //     setEmail({
      //       value: email.value,
      //       isValid: email.value === "" ? false : true,
      //     });
      //     setPassword({
      //       value: password.value,
      //       isValid: false,
      //     });
      //     setEmailHelpertext(email.value === "" ? "This field is required" : "");
      //     setpasswordHelpertext(
      //       password.value === "" ? "This field is required" : ""
      //     );
      //   } else {
      //     e.preventDefault();
      //     const response=await fetch("http://localhost:3005/api/auth/login",{
      //       method:'POST',
      //       headers:{
      //         'Content-Type':'application/json'
      //       },
      //       body: JSON.stringify({email: email, password: password})
      //     });
      //     const json=await response.json()
      //     console.log(json);
      //     // if (
      //     //   email.value === "mindpath@ebotify.com" &&
      //     //   password.value === "Akshay@123"
      //     // ) {
      //     //   router.push("/home/home");
      //     // } else {
      //     //   setEmail({
      //     //     value: email.value,
      //     //     isValid:false,
      //     //   });
      //     //   setPassword({
      //     //     value: password.value,
      //     //     isValid: false,
      //     //   });
      //     //   setEmailHelpertext("Email Id or Password is Inavlid !!");
      //     //   setpasswordHelpertext("Email Id or Password is Inavlid !!");
      //     // }
      //   }
      // };
      function validatePassword(e: { target: { value: string } }) {
        if (RegexLibrary.PASSWORD.test(e.target.value)) {
          setPassword({
            value: e.target.value,
            isValid: true,
          });
          setpasswordHelpertext("");
        } else {
          setPassword({
            value: e.target.value,
            isValid: false,
          });
          setpasswordHelpertext("Password should contain [0,9] [a-z] [A-Z] ");
        }
      }

  return ({
    getters:{email, password, emailHelpertext, passwordHelpertext},
    handlers:{
        validateEmail,
        handleSubmit,
        validatePassword,
    }
  }
  );
}
