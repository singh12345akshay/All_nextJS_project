import { ClickAwayListener, SwipeableDrawer, Box,styled, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, Typography, Drawer } from '@mui/material';
import React, { useEffect } from 'react'
import { ebotifylogo, menuItemlogo } from 'src/assets';
import { toggleSidebar } from 'src/store/store';
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';
import LogoutIcon from "@mui/icons-material/Logout";
import { DrawerHeader } from './sideBarComponent';
import router from 'next/router';
const drawerWidth = 240;
const mobileDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
      '& 	.MuiPaper-root': {
        width:drawerWidth,
        backgroundColor:"#242a38"
      },
    }),
);
export default function Mobilesidebar() {
       const isSidebarOpen = useSelector((state: any) => state.isSidebarOpen);
    const dispatch = useDispatch();
    const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    router.push("/signin");
  };
  useEffect(()=>{
    
  })
 const handleClick=(url:string)=>{
router.push(url) }
    const handleClickAway = () => {
        console.log("this is calling")
    dispatch(toggleSidebar())
  };
  console.log(isSidebarOpen)
 
   const drawerContent= <Box  >
           <DrawerHeader>
          <Box
            paddingY={1.5}>
              <Image
                src={ebotifylogo.src}
                alt={"Company image"}
                width={133}
                height={45}
              />
          </Box>
        </DrawerHeader>
          <div style={{ flex: "1 1 auto" }}>
          
          <List>
            {["Bot"].map((text) => (
              <ListItem key={text} disablePadding sx={{ bgcolor: "#88c1d5" }}>
                <ListItemButton
                  onClick={() => {
                    handleClick("/home");
                  }}>
                  <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isSidebarOpen ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                  >
                    <Image
                      src={menuItemlogo.src}
                      alt={"Company image"}
                      width={30}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: isSidebarOpen ? 1 : 0 }}/>
                </ListItemButton>
              </ListItem>
            ))}
            </List>
          </div>
          <div style={{ textAlign: "center", padding: "10px" ,marginBottom:"8px"}}>
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
              </Box>
return (
          <Drawer
            anchor='left'
            open={isSidebarOpen}
            onClose={handleClickAway}
             PaperProps={{
        style: {
          backgroundColor: '#ff0000', // Change the background color here
          width: drawerWidth, // Change the width here
        },
      }}
          >
         {drawerContent}
              </Drawer>
  )
}


