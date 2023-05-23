import React, { useState } from 'react'
import { RegexLibrary } from '../Regex';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setAuthToken } from 'src/store/store';


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
  const dispatch = useDispatch();

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
              const response = await axios.post(
                "https://chatbotapps.mindpath.tech/api/v1/user/login",
                {
                  email: email.value,
                  password: password.value,
                }
              );
          console.log(response.data)
          const authToken = response.data.body.token;
             localStorage.setItem("authToken", JSON.stringify(authToken));
             const storedData = localStorage.getItem("authToken");
          router.push("/home/home");

        } catch (error) {
          console.error("Error logging in", error);
          setError("An error occurred while logging in");
        }
      };
      
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
