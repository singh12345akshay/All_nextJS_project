import { Box, Button, Card,TextField, styled } from "@mui/material";

export const LoginPageWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  height: "100vh",
  background: "#242A38",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    background: "#242A38",
    height: "100vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "100vh",
  },
}));

export const LoginCard = styled(Card)(({ theme }) => ({
  margin: "auto",
  width: "480px",
  padding: theme.spacing(4),
  borderRadius: "8px",
  boxShadow: "0 3px 16px #32353d",
  // boxShadow: theme.shadows[1],
  top: "50%",
  left: "25%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  
  // [theme.breakpoints.down("lg")]: {
  //   width: "480px",
  // },
  // [theme.breakpoints.down("md")]: {
    
  //   margin: theme.spacing(1),
  //   width: "480px",
  // },
  // [theme.breakpoints.down("sm")]: {
  //   position: "absolute",
  //   transform: "translate(-50%, -50%)",
  //   top: "50%",
  //   left: "50%",
  //   margin: theme.spacing(0),
  //   width: "480px",
  // },
}));

export const LoginLogoWraper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
  paddingBottom: theme.spacing(4),
}));

export const BotImage = styled(Box)(({ theme }) => ({
  img: {
    maxWidth:"550px",
    position: "absolute",
    right: "50px",
    bottom: "24%",
  },
}));

export const CustomSignInButton = styled(Button)(({ theme }) => ({
  position: "relative",
  margin: "1rem auto 0",
  fontSize: theme.spacing(2),
  fontWeight: "400",
  letterSpacing: theme.spacing(0.25),
  textTransform: "inherit",
  backgroundColor: "#242A38",
  borderRadius: theme.spacing(0.5),
  width: "fit-content",
  display: "flex",
  padding : theme.spacing(0.5, 3),
   '&:hover': {
          backgroundColor: '#5b6784',
        },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  width: '416px',
  margin: theme.spacing(1.5),
                 
}));
