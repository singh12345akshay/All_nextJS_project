import { Box, Button, Card, styled } from "@mui/material";

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
