import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import CurrencySelector from "../CurrencySelector/CurrencySelector";
import IconMenu from "../IconMenu/IconMenu";
import TopBar from "../TopBar/TopBar";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import MainContent from "../MainContent/MainContent";

export default function Layout({ children }) {
  return (
    <>
      <MainContent>
        <TopBar>
          <MainMenu></MainMenu>
          <Logo></Logo>
          <div>
            <CurrencySelector></CurrencySelector>
            <IconMenu></IconMenu>
          </div>
        </TopBar>
        <CategoryMenu></CategoryMenu>
        {children}
      </MainContent>
      <Footer></Footer>
    </>
  );
}
