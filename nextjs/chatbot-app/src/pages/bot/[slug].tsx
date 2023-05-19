import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import React, { useEffect } from "react";
import { estateBot } from "src/assets/images";
import SideBarComponent from "src/components/sideBar/sideBarComponent";
import BotPageComponent from "src/components/botPage/botPageComponent";
import { useRouter } from "next/router";


declare global {
  interface Window {
    initPayload: string;
    metadata: Record<string, any>;
  }
}

export default function EstateBot() {
  const router = useRouter();
  const { slug } = router.query;

  // document.body.appendChild(script);}
// const loadScript=()=>{
//       //   window.initPayload = "hi";
//       //  window.metadata = {};
      
  
console.log(slug)
  return (
    <>
      <SideBarComponent>
      
        <BotPageComponent name={slug} />
        </SideBarComponent>
    </>
  );
}
