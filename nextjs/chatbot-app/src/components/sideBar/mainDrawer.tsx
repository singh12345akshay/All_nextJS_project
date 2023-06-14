import {
  Drawer,
  Box,
  List,
  CSSObject,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  Typography,
  useMediaQuery,
  Theme,
  Backdrop,
  styled,
} from "@mui/material";
import { toggleSidebar } from 'src/store/store';
import LogoutIcon from "@mui/icons-material/Logout";
import router from "next/router";
import Image from "next/image";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import React, { useState,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ebotifylogo, menuItemlogo } from "src/assets";

const drawerWidth = 240;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  backgroundColor: '#242a38',
  [theme.breakpoints.down('sm')]: {
    width:drawerWidth,
   position: 'fixed', // Position the drawer
  top: 0, // Position from top
  bottom: 0, // Position from bottom
  zIndex: theme.zIndex.drawer + 2,
    
  },
   
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
    },
    [theme.breakpoints.down('sm')]: {
    width: '0',
    },
  backgroundColor: '#242a38'
});


const CustomDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    zIndex: open ? theme.zIndex.drawer + 1 : 'auto',
    position: 'fixed',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    })
  }),
);
export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const BackdropWrapper = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
}));
export default function MainDrawer() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const isSidebarOpen = useSelector((state: any) => state.isSidebarOpen);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(isSmallScreen);
  }, [isSmallScreen]);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    router.push("/signin");
  };
   const handleClickAway = () => {
        console.log("this is calling")
    dispatch(toggleSidebar())
  };
  const handleClick = (url: string) => {
    router.push(url);
  };
  return (
    <>
    <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          {isMobileView && <BackdropWrapper open={isSidebarOpen} />}
          <CustomDrawer
              variant={isMobileView ? 'temporary' : 'permanent'}
              open={isSidebarOpen}>
        
            <DrawerHeader>  
          <Box paddingY={1.5}>
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
                      mr: isSidebarOpen ? 3 : "auto",
                      justifyContent: "center",
                    }}>
                    <Image
                      src={menuItemlogo.src}
                      alt={"Company image"}
                      width={30}
                      height={30}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{ opacity: isSidebarOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}></div>
        <div
          style={{ textAlign: "center", padding: "10px", marginBottom: "8px" }}>
          <Button
            variant="contained"
            onClick={handleLogout}
            startIcon={<LogoutIcon />}
            sx={{
              bgcolor: "#1b63f6",
              borderRadius: 7,
            }}>
            <Typography variant="button" sx={{ marginLeft: "8px" }}>
              LOGOUT
            </Typography>
          </Button>
        </div>
      </CustomDrawer>
       </div>
      </ClickAwayListener>
        {/* {isMobileView && <BackdropWrapper open={isSidebarOpen} />} */}
    </>
  );
}
