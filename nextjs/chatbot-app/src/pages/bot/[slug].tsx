import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import Script from "next/script";
import Head from "next/head";
import React, { useEffect } from "react";
import { estateBot } from "src/assets/images";
import SideBarComponent from "src/components/sideBar/sideBarComponent";
import BotPageComponent from "src/components/botPage/botPageComponent";
import { useRouter } from "next/router";
import { setAuthToken } from 'src/store/store';
import AuthProvider from "src/components/authProvider/authProvider";


declare global {
  interface Window {
    initPayload: string;
    metadata: Record<string, any>;
  }
}

export default function EstateBot() {
  const router = useRouter();
  const { slug } = router.query;
  
  return (
    <>
      <SideBarComponent>
        <BotPageComponent name={slug} />
      </SideBarComponent>
    </>
  );
}
