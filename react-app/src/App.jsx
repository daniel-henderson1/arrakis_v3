import React from "react";
import { HomePage } from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import { UpcomingPage } from "./components/UpcomingPage";
import { BookPage } from "./components/BookPage";
import LoginPage from "./components/LoginPage"
import Register from "./components/Register"
import { RedeemPage } from "./components/RedeemPage";
import LoginNavBar from './components/LoginNavBar';


const App = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);
  if (!loggedIn) {
    if(!register){
      return (
        <>
          <LoginNavBar/>
          <LoginPage setReg={setRegister} setLog={setLoggedIn} />
        </>
      )
    } else {
      return(
        <>
          <LoginNavBar/>
          <Register setReg={setRegister}/>
        </>
      )
    }
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
