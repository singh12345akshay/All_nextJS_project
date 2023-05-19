import { Box, Typography, useTheme } from "@mui/material";
import Script from 'next/script';
import Image from "next/image";
import React, { useEffect } from 'react'
import { estateBot } from 'src/assets';
import botDetail from "../../assets/botDetail.json"

interface Iprops{
    name:string
}

interface Ibot{
    id:string
    imagesrc:string
    botscript:string
}
export default function BotPageComponent(props:Iprops) {
    const {name}=props
    const theme = useTheme();
    const {bots}= botDetail
    const key = name;
    
     const bot = bots.find((obj:Ibot) => obj.id == key);
    if(bot)
    {useEffect(() => {
    const script = document.createElement("script");
      script.src = bot.botscript;
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
  }, []);}
    
    // console.log(bots)

 
// console.log("botid:",bot.id)
  return (
      <>
    {console.log("bot:",bot)}
{console.log("key:",key)}
          <Typography>{name}</Typography>
      <Box
        sx={{
          position: "relative",
          width: "auto",
          height: `calc(100vh - ${theme.spacing(12)})`,
        }}>
              <Image
                  src={bot?.imagesrc}
                  alt="image"
                  fill={true} />
      </Box>
      {/* <Script
        src={bot?.botscript}
        strategy="lazyOnload"
      /> */}
      <div id="chatbot"></div>
    </>
  );
}
