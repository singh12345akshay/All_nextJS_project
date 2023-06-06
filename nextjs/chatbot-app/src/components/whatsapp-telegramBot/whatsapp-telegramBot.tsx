import { Typography, Box,useTheme, Icon, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import botDetail from "../../assets/botDetail.json"
import { telegram, whatsapp } from 'src/assets/images';

interface Iprops{
    name:string
    id:string
}

interface Ibot{
    id:string
    imagesrc:string
    botscript:string
}

export default function WhatsappTelegramBot(props:Iprops) {
      const {bots}= botDetail
    const {id, name } = props
        const key = id;
    const theme = useTheme();
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

  const redirectToNewTab=()=>{
  window.open(bot?.botscript, "_blank");
}
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
      
        {bot && <Box 
          sx={{
            position: "relative",
            width: "auto",
            height: `calc(100vh - ${theme.spacing(16)})`,
          }}>
          <Image src={bot.imagesrc} alt="image" fill={true} />
          <Button
          onClick={redirectToNewTab}
          sx={{
            minWidth:"0",
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
          >
              <Image
                      src={name === 'whatsappBot' ? whatsapp.src : telegram.src}
                      alt={"bot"}
                      fill={true}
                    />
      </Button>
      </Box>}
    </>
  )
}
