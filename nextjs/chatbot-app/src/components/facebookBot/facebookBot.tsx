import { Typography, Box, useTheme ,Button} from '@mui/material';
import Image from "next/image";
import { useRef } from 'react';
import React, { RefAttributes, useEffect, useState } from 'react';
import { FacebookProvider,MessengerCustomerChat, Page ,CustomChat} from 'react-facebook';
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
export default function FacebookBot(props:Iprops) {
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
//     const customChatProps = {
//     pageId: "101859349483453",
//     htmlRef: "https://chatbotapps.mindpath.tech/login"
//   };
  return (
      <>
         <Typography variant="h6" align="center" gutterBottom style={{
                                  fontSize: 18,
                                  fontWeight: 700,
                                  whiteSpace: "nowrap",
                                  display: "-webkit-box",
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: "vertical",
                                  textOverflow: "ellipsis",
                                }}>{botName}</Typography>
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
          {/* <MessengerCustomerChat
                        pageId="101859349483453"
                        appId="881543989662726"
                        htmlRef="https://chatbotapps.mindpath.tech/login"
                    /> */}
           <FacebookProvider appId="3661120750634145">
        <CustomChat pageId="114508394010707" minimized={false} />
      </FacebookProvider>
      {/* <div id="chatbot"></div> */}
      
    </>
  )
}
