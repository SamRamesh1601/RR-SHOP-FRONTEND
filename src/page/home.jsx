import React from "react";
import HeaderNav from "../components/headerNav";
import MainPage from "./MainPage";

export default function Home() {
  return (
    <div className="page-view home-page fl-direct-column  vr-center-container ">
      <HeaderNav />
      <MainPage />
    </div>
  );
}
