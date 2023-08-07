import React from "react";
import { HomePage } from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import { UpcomingPage } from "./components/UpcomingPage";
import { BookPage } from "./components/BookPage";
import LoginPage from "./components/LoginPage"
import { RedeemPage } from "./components/RedeemPage";

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) {
    return (
      <LoginPage setLog={setLoggedIn} />
    )
  } else {
    if (selectedTab === 0) {
      return (
        <>
          <NavigationBar setTab={setSelectedTab} />
          <HomePage />
        </>
      )
    } else if (selectedTab === 1) {
      return (
        <>
          <NavigationBar setTab={setSelectedTab} />
          <BookPage />
        </>
      )
    } else if (selectedTab === 2) {
      return (
        <>
          <NavigationBar setTab={setSelectedTab} />
          <UpcomingPage />
        </>
      )
    } else if (selectedTab === 3) {
      return (
        <>
          <NavigationBar setTab={setSelectedTab} />
          <RedeemPage />
        </>
      )
    }
  }
};

export default App;
