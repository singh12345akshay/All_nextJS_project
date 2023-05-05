import { Box, Button, Card, styled } from "@mui/material";

export const LoginPageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  height: "100vh",
  background: "#6b3dfd",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    background: "#6b3dfd",
    height: "100vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

export const SignInCardHolder = styled(Box)(({ theme }) => ({
  width: "200px",
  height: "150px",
  borderRadius: "45%",
  position: "absolute",
  backgroundColor: "yellow",
  top: -10,
}));

export const LoginCard = styled(Card)(({ theme }) => ({
  margin: "auto",
  width: "520px",
  padding: theme.spacing(4, 4),
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  top: "50%",
  left: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("lg")]: {
    width: "430px",
  },
  [theme.breakpoints.down("md")]: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    margin: theme.spacing(1),
    width: "500px",
    minheight: "67%",
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    top: "50%",
    left: "50%",
    margin: theme.spacing(0),
    width: "95%",
  },
}));

export const LoginLogoWraper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItem: "center",
  paddingBottom: theme.spacing(4),
}));

export const BotImage = styled(Box)(({ theme }) => ({
  img: {
    position: "absolute",
    right: "0",
    bottom: "0",
  },
}));

export const CustomSignInButton = styled(Button)(({ theme }) => ({
  position: "relative",
  margin: "1rem auto 0",
  fontSize: theme.spacing(2),
  fontWeight: "400",
  letterSpacing: theme.spacing(0.25),
  textTransform: "inherit",
  backgroundColor: "#5207d6",
  borderRadius: theme.spacing(0.5),
  width: "fit-content",
  display: "flex",
}));
