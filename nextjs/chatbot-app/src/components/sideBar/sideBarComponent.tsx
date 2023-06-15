import {
  Box,
 
  Button,
  CSSObject,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Theme,
  Typography,
  // AppBar,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import React, { useState ,useEffect} from "react";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRightIcon";
import {  toggleSidebar } from "../../store/store";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import Divider from '@mui/material/Divider';
import { ebotifylogo, menuItemlogo, userpic ,} from "src/assets";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Image from "next/image";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
import Toolbar from "@mui/material/Toolbar";
import Mobilesidebar from "./mobilesidebar";
import MainDrawer from "./mainDrawer";
const drawerWidth = 240;
interface SideBarComponentProps {
  children: React.ReactNode;
}

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

 export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // width: open ? `calc(100% - ${drawerWidth}px)` : `calc(100% - ${closedMixin(theme).width}px)`,
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
    width: '100%',
    },
  }),
  ...(!open && {
   width: `calc(100% - ${closedMixin(theme).width})`,
   [theme.breakpoints.down('sm')]: {
    width: '100%',
    },
    }),
   backgroundColor: 'white',
   color:"black"
}));


const Main = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
  paddingTop:theme.spacing(4),
  backgroundColor: '#f1f1f1',
  minHeight: `calc(100vh - ${theme.spacing(13)})`, 
  height:"auto",// Use the height of the AppBar as margin top
  marginTop: theme.mixins.toolbar.minHeight, // Use the height of the AppBar as margin top
}));
export default function SideBarComponent({ children }: SideBarComponentProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
   const isSidebarOpen = useSelector((state: any) => state.isSidebarOpen);
     const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("")
  const theme = useTheme();
 

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    setIsMobileView(isSmallScreen);
  }, [isSmallScreen]);
  // const cunstomSidebar = (e) => {
  //   if(e){
  //     dispatch(toggleSidebar())
  //     return;
  //   }
  // }
  const handleClickAway = () => {
        console.log("this is calling")
    dispatch(toggleSidebar())
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    router.push("/signin");
  };
 const handleClick=(url:string)=>{
router.push(url) }
useEffect(()=>{
  const data=localStorage.getItem("userName");
if(data){
  const name=JSON.parse(data)
  setUsername(name)
}},[]);
  
const drawerContent = (
  <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
    <List sx={{ flexGrow: 1 }}>
      {["Bot"].map((text) => (
        <ListItem
          key={text}
          disablePadding
          sx={{ bgcolor: "#0b0c0e61", color: "white" }}>
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

    <div style={{ textAlign: "center", padding: "10px", marginBottom: "8px" }}>
      <Button
        variant="contained"
        onClick={handleLogout}
        startIcon={<LogoutIcon />}
        sx={{
          bgcolor: "#5052ff",
          borderRadius: 7,
        }}>
        <Typography variant="button" sx={{ marginLeft: "8px" }}>
          LOGOUT
        </Typography>
      </Button>
    </div>
  </Box>
);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={isSidebarOpen} >
          <Toolbar style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}>
            {!isSidebarOpen?<IconButton
            onClick={() => dispatch(toggleSidebar())}
          >
            <MenuIcon />
          </IconButton>: <IconButton
            onClick={() => dispatch(toggleSidebar())}
          >
            <ChevronLeftIcon />
          </IconButton>}
          <Box sx={{display:"flex", justifyContent: "center",
      alignItems: "center",}}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                style={{
                  fontSize: isMobileView ? 14 : 17,
                  paddingRight:"8px",
                  color: "inherit",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}>
                Ebotify | {username}
              </Typography>
            {/* </div> */}
            <div>
              <Image
                src={userpic.src}
                alt={"user image"}
                width={isMobileView?40:50}
                height={isMobileView?40:50}></Image>
              
            </div>
          </Box>
          </Toolbar>
        </AppBar>
        {/* <Mobilesidebar/> */}
 {isMobileView?<Drawer
            anchor='left'
            open={isSidebarOpen}
            onClose={handleClickAway}
             PaperProps={{
        style: {
          backgroundColor: '#242a38', // Change the background color here
          width: drawerWidth, // Change the width here
        },
      }}
          > {drawerContent}</Drawer>:<CustomDrawer
          variant="permanent"
          open={isSidebarOpen}
           onClose={handleClickAway}
        >
           {drawerContent}
        </CustomDrawer>}
        <Main component="main" >
        {children}
      </Main>
      </Box>
    </>
  );
}
