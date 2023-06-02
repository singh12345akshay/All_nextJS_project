import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import botDetail from "../../assets/botDetail.json"

interface Iprops{
    id:string
}

interface Ibot{
    id:string
    type:string
    imagesrc:string
    botscript:string
}
export default function BotPageComponent(props:Iprops) {
    const {id}=props
    const theme = useTheme();
    const {bots}= botDetail
    const key = id;
    const [bot,setBot]=useState<Ibot>()
  const [botName, setBotName] = useState("")

  useEffect(()=>{const storageData=localStorage.getItem("botList")
    if(storageData){
      const botList = JSON.parse(storageData)
      const desiredObj=botList.find((obj:any)=> obj._id===key)
      if(desiredObj)
      {setBotName(desiredObj.name)}
    }},[])
    
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
      <Typography variant="h6" align="center">{botName}</Typography>
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
