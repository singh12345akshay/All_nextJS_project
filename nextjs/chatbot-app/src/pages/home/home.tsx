import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { cardlogo } from "../../assets/images";
import { Card, CardActionArea, CardContent, Grid} from "@mui/material";
import { useRouter } from "next/router";
import Head from "next/head";
import  Link  from "next/link";
import axios from "axios";
import SideBarComponent from "src/components/sideBar/sideBarComponent";

export interface Idata{
_id:string
name:string
}

export type apiResponse =Idata[]

export default function Home() {
  const [bot, setBot] = useState<apiResponse>([]);
  const router = useRouter();
    const fetchData = async () => {
      const storedData = localStorage.getItem("authToken");
      
      if (storedData) {
        const authToken = JSON.parse(storedData)
        try {
          // Make a GET request to the API endpoint
          const response = await axios.get(
            "https://chatbotapps.mindpath.tech/api/v1/user/bots",
            {
              headers: {
                Authorization: `Bearer ${authToken}`,
              },
            }
          );

          const data: apiResponse = response.data.body;
          setBot(data);
          // console.log(bot)
        } catch (error) {
          console.error(error);
        }
      }
    };
  useEffect(() => {
    // Define a function to fetch the data from the API

      fetchData();
  }, []);
  // console.log(authToken)
  
  // console.log("bot:",bot)
//   const handleClick=(botName: string)=>{
//    router.push({botname}/{botname})
//  }
  
  return (
    <>
      <Head>
        <title>ChatBot App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBarComponent>
        <>
        
        <Box>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            align="center"
            style={{
              
              fontWeight: 700
            }}>
            BOT
            </Typography>
            <Box style={{
              margin:'5px'
            }}>
          <Grid container spacing={3} >
            {console.log(bot)}

                {bot.map((bot,index) => {
              return (
                // <Link href={`/bot/${bot.name.toLowerCase()}`} as={`/${bot.id}}`} key={bot._id}> 
                  <Grid item  key={bot._id} xs={12} sm={6} md={4} lg={3}>
                     <Link href= {`/bot/${index+1}`} > 
                    <Card
                      sx={{ maxWidth: 380 }}
                      // onClick={()=>{handleClick(bot.name)}}
                    >
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
                            }}>
                            {bot.name}
                          </Typography>
                        </CardContent>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: "15px",
                          }}>
                          <Image
                            src={cardlogo.src}
                            alt={"Card Logo"}
                            width={cardlogo.width}
                            height={cardlogo.height}></Image>
                        </Box>
                      </CardActionArea>
                    </Card>
                    </Link>
                  </Grid>
              );
            })}
          </Grid>
          </Box>
          </Box>
        </>
      </SideBarComponent>
    </>
  );
}
