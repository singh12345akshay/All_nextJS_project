import { Box, TextField , Typography} from '@mui/material'
import Head from "next/head";
import React from 'react'
import SideBarComponent from "src/components/sideBar/sideBarComponent";
import { LoginCard, CustomSignInButton } from './manageUser.style';
import ManageuserController from './manageuser.controller';
import { useSelector } from 'react-redux';

export default function ManageUser() {
  const { getters, handlers } = ManageuserController();
  const home = useSelector((state) => state);
  console.log("data",home)
  return (
      <>
      <SideBarComponent>
        <Box>
        <Head>
          <title>ChatBot App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <Box>
            <LoginCard>
                <Typography sx={{textAlign:"center", fontSize:"24px", fontWeight:"700"}}>Add User</Typography>
                <Box>
                  <TextField
                    sx={(theme) => ({
                      margin: theme.spacing(0.6),
                    })}
                    id="email"
                    label="Email"
                    variant="standard"
                    autoComplete="off"
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
                    Add User
                  </CustomSignInButton>
              </Box>
            </LoginCard>
        </Box>
        </Box>
      </SideBarComponent>
    </>
  )
}
