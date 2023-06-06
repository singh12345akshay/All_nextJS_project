import {
  Box,
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  AppBar,
  styled,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import { ebotifylogo, menuItemlogo, userpic ,} from "src/assets";
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
const drawerWidth = 240;
interface SideBarComponentProps {
  children: React.ReactNode;
}

const Main = styled("main")(({ theme }) => ({
  padding: theme.spacing(2),
  marginLeft: 0,
  backgroundColor: "#f1f1f1",
  minHeight: `calc(100vh - ${theme.spacing(12)})`,
  height: "auto",
  marginTop: theme.spacing(8),
  width: "100vw",
}));

export default function SideBarComponent({ children }: SideBarComponentProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  const theme = useTheme();
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    router.push("/signin");
  };
 const handleClick=(url:string)=>{
router.push(url)
   }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "flex-end",
              paddingRight: 2,
              backgroundColor: "white",
            }}>
            <div style={{ marginRight: 5 }}>
              <Typography
                variant="h6"
                component="div"
                align="center"
                style={{
                  color: "blue",
                  fontSize: 17,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}>
                Welcome Admin
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                style={{
                  fontSize: 17,
                  color: "black",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}>
                Ebotify | sales@ebotify.com
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Image
                src={userpic.src}
                alt={"user image"}
                width={50}
                height={50}></Image>
              
            </div>
          </Box>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#242A38",
            },
          }}
          variant="permanent"
          anchor="left">
          <div style={{ flex: "1 1 auto" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingY={1}>
            <Button
              variant="text"
              onClick={() => {
                handleClick("/home");
              }}>
              <Image
                src={ebotifylogo.src}
                alt={"Company image"}
                width={133}
                height={45}
              />
            </Button>
          </Box>
          <List>
            {["Bot"].map((text) => (
              <ListItem key={text} disablePadding sx={{ bgcolor: "#88c1d5" }}>
                <ListItemButton
                  onClick={() => {
                    handleClick("/home");
                  }}>
                  <ListItemIcon>
                    <Image
                      src={menuItemlogo.src}
                      alt={"Company image"}
                      width={30}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
            {/* <Divider sx={{backgroundColor:"white"}}/>

            <List >
            {[{name:"Web Bot",img:webBot},{name:"WhatsApp Bot",img:menuItemlogo},{name:"Facebook Bot",img:menuItemlogo},{name:"Telegram Bot",img:menuItemlogo}].map((obj) => (
              <ListItem key={obj.name} disablePadding sx={{ color:"white"}}>
                <ListItemButton
                sx={{fontWeight:"700"}}
                  onClick={() => {
                    handleClick("/home");
                  }}>
                  <ListItemIcon>
                    <Image
                      src={obj.img.src}
                      alt={"Company image"}
                      width={30}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText sx={{fontWeight:"500"}} primary={obj.name} />
                </ListItemButton>
              </ListItem>
            ))}
            </List> */}
          </div>
          <div style={{ textAlign: "center", padding: "10px" }}>
          <Button
                variant="contained"
                onClick={handleLogout}
                startIcon={<LogoutIcon />}
                sx={{
                  bgcolor: "#1b63f6",
                  borderRadius: 7,
                  
                }} >
                <Typography variant="button" sx={{ marginLeft: "8px" }}>
        LOGOUT
      </Typography>
              </Button>
              </div>
        </Drawer>
        <Main>{children}</Main>
      </Box>
    </>
  );
}
