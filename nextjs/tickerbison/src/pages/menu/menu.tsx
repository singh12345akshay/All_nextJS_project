import Head from "next/head";
import TableComponent from "@/components/tableComponent/tableComponent";
import SideBarComponent from "../../components/sideBar/sideBarComponent";
import { Provider } from "react-redux";
import store from "@/store/store";
import MainMenu from "@/components/mainMenu/mainMenu";

export default function Menu() {
  return (
    <>
      <Head>
        <title>Ticker Bison | Welcome</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <SideBarComponent>
          <MainMenu />
        </SideBarComponent>
      </Provider>
    </>
  );
}
