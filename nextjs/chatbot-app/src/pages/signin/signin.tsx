import React, { useRef, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Alert, Box,
  TextField
} from "@mui/material";
import {
  LoginCard,
  LoginLogoWraper,
  LoginPageWrapper,
  BotImage,
  CustomSignInButton,
} from "./signin.style";
import SigninController from "./signin.controller";
import {
  logoColored,
  mindpathIcon,
  SignInBg2,
  signupPic,
} from "../../assets/images";

export default function Signin() {
  const { getters, handlers } = SigninController();

  return (
    <>
      <LoginPageWrapper>
        <Head>
          <title>ChatBot App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box>
          <Image
            src={SignInBg2.src}
            alt={"background image"}
            width={SignInBg2.width}
            height={SignInBg2.height}
          />
          <BotImage>
            <Image
              src={signupPic.src}
              alt={"background image"}
              width={280}
              height={323}
            />
          </BotImage>
          <Box>
            <LoginCard>
              <LoginLogoWraper>
                <Image
                  src={mindpathIcon.src}
                  alt={"Company image"}
                  width={77}
                  height={73}
                />
                <Image
                  src={logoColored.src}
                  alt={"Company image"}
                  width={133}
                  height={54}
                />
              </LoginLogoWraper>
                <Box>
                  <TextField
                    sx={(theme) => ({
                      margin: theme.spacing(0.6),
                    })}
                    id="email"
                    label="Email"
                    variant="standard"
                    fullWidth
                    onChange={handlers.validateEmail}
                    value={getters.email.value}
                    error={!getters.email.isValid}
                    helperText={getters.emailHelpertext}
                  />
                </Box>
                <Box>
                  <TextField
                    sx={(theme) => ({
                      margin: theme.spacing(0.6),
                    })}
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                    fullWidth
                    onChange={handlers.validatePassword}
                    value={getters.password.value}
                    error={!getters.password.isValid}
                    helperText={getters.passwordHelpertext}
                  />
                </Box>
                <Box>
                  <CustomSignInButton
                    variant="contained"
                    type="submit"
                    onClick={handlers.handleSubmit}
                    disabled={
                      getters.email.isValid && getters.password.isValid
                        ? false
                        : true
                    }
                  >
                    Sign In
                  </CustomSignInButton>
                </Box>
            </LoginCard>
          </Box>
        </Box>
      </LoginPageWrapper>
    </>
  );
}
