import React from "react";
import "antd/dist/antd.css";
import AppHeader from "../components/AppHeader";

const AppShell = ({ Component }) => {
  return (
    <>
      <AppHeader />
      <Component />
    </>
  );
};

export default AppShell;