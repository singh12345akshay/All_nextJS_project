import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import botDetail from "../../assets/botDetail.json"
import { image1, image2, image3, image4, image5, image6 } from "src/assets/bgImages";

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
   const [backgroundImage, setBackgroundImage] = useState('');

  function getRandomImage() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
    // Add more image file names as needed
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
  }
  // useEffect(() => {
  //   const randomImage = getRandomImage();
  //   setBackgroundImage(randomImage);
  // }, []);

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
      <Typography variant="h6" align="center"  style={{
        marginBottom:'4px',
                                  fontSize: 20,
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
            height: `calc(100vh - ${theme.spacing(17.5)})`,
          }}>
          <Image src={(bot.imagesrc===''?getRandomImage():bot.imagesrc)} alt="image" fill={true} />
        </Box>
      )}
      <div id="chatbot"></div>
    </>
  );
}
