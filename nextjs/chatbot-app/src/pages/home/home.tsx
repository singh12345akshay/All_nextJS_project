import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  userpic,
  cardlogo,
  ebotifylogo,
  menuItemlogo,
} from "../../assets/images";
import { Button, Card, CardActionArea, CardContent, Grid } from "@mui/material";
import jsonData from "../sampleoutput.json";
import { useRouter } from "next/router";
import Head from "next/head";
const drawerWidth = 240;

export default function Home() {
  const { bot } = jsonData;
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();
  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push("/signin/signin");
  };

  return (
    <>
      <Head>
        <title>ChatBot App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ display: "flex" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#7121ff",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box sx={{ paddingTop: 2, paddingLeft: 5 }}>
            <Button variant="text">
              <Image
                src={ebotifylogo.src}
                alt={"Company image"}
                width={133}
                height={45}
              />
            </Button>
          </Box>
          <List>
            {["Bot"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ bgcolor: "#88c1d5" }}>
                <ListItemButton>
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
        </Drawer>
        <Box sx={{ bgcolor: "#f5f6f9", height: 1000 }}>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "flex-end",
              paddingRight: 10,
              bgcolor: "white",
            }}
          >
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
                }}
              >
                Welcome Admin
              </Typography>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                style={{
                  fontSize: 17,
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                Ebotify | sales@ebotify.com
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={userpic.src}
                alt={"user image"}
                width={50}
                height={50}
              ></Image>
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{
                  bgcolor: "#1b63f6",
                  borderRadius: 7,
                  color: "#fff",
                  padding: 1,
                  paddingRight: 2,
                  paddingLeft: 2,
                  marginLeft: 3,
                }}
              >
                Logout
              </Button>
            </div>
          </Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            style={{
              paddingTop: 10,
              fontWeight: 700,
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            BOT
          </Typography>
          <Grid container spacing={2}>
            {bot.map((item) => {
              return (
                <Grid item key={item.name} xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          align="center"
                          style={{
                            fontSize: 18,
                            fontWeight: 700,
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </CardContent>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={cardlogo.src}
                          alt={"Card Logo"}
                          width={cardlogo.width}
                          height={cardlogo.height}
                        ></Image>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </>
  );
}
