import { Box, Typography, useTheme } from "@mui/material";
import Script from 'next/script';
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
    const [bot,setBot]=useState<Ibot>()
    
    useEffect(() => {
      const obj = bots.find((obj: Ibot) => obj.id === key);
      setBot(obj);
    }, [bots, key]);
    
    useEffect(() => {
    if (bot) {
      window.initPayload = "hi";
      window.metadata = {};
      const script = document.createElement("script");
      script.src = bot.botscript;
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [bot]);


  return (
    <>
      <Typography variant="h6" align="center">{name}</Typography>
      {bot && (
        <Box
          sx={{
            position: "relative",
            width: "auto",
            height: `calc(100vh - ${theme.spacing(16)})`,
          }}>
          <Image src={bot.imagesrc} alt="image" fill={true} />
        </Box>
      )}
      <div id="chatbot"></div>
    </>
  );
}
