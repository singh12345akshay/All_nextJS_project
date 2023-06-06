import { Box, Button, Card, styled } from "@mui/material";

export const LoginCard = styled(Card)(({ theme }) => ({
  margin: "auto",
  width: "520px",
  padding: theme.spacing(4, 4),
  borderRadius: "8px",
  boxShadow: theme.shadows[1],
  // position:"relative",
  // position: "absolute",
  // transform: "translate(-50%, -50%)",
  [theme.breakpoints.down("lg")]: {
    width: "500px",
  },
  [theme.breakpoints.down("md")]: {
    width: "430px",
    minheight: "67%",
  },
  [theme.breakpoints.down("sm")]: {
     width: "430px",
  },
}));
export const LoginPageWrapper = styled(Box)(({ theme }) => ({
  height:"100%",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
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
