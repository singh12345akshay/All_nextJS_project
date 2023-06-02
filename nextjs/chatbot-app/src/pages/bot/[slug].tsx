import React from "react";
import SideBarComponent from "src/components/sideBar/sideBarComponent";
import BotPageComponent from "src/components/webBot/webbotPageComponent";
import { useRouter } from "next/router";
import botDetail from "../../assets/botDetail.json";
import WhatsappTelegramBot from "src/components/whatsapp-telegramBot/whatsapp-telegramBot";
import FacebookBot from "src/components/facebookBot/facebookBot";

declare global {
  interface Window {
    initPayload: string;
    metadata: Record<string, any>;
  }
}


export default function EstateBot() {
  const router = useRouter();
  const { slug } = router.query;
const {bots}=botDetail
  const getBotTypeById=(slug: string)=>{
  const foundObject = bots.find((obj) => obj.id === slug);
  return foundObject?.type;
}
 const botType=getBotTypeById(slug)
 if(botType==="customerRequest"){
   router.replace('/customerRequest');
   return <></>
 }
 else if(botType==="signup"){
  router.replace('/manageUser')
   return <></>
 }
  else if((botType === 'whatsappBot') || (botType ==='telegramBot')){
    return(<>
      <SideBarComponent>
        <WhatsappTelegramBot name={botType} id={slug} />
      </SideBarComponent>
    </>
    )
 }
 else if(botType==='facebookBot'){
  return (
    <>
      <SideBarComponent>
        <FacebookBot id={slug} />
      </SideBarComponent>
    </>
  )
 }
  return (
    <>
      <SideBarComponent>
        {slug && <BotPageComponent id={slug} />}
      </SideBarComponent>
    </>
  );
}
