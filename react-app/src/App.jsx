import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Pets } from "./components/pets/Pets";
import { HomePage } from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import { UpcomingPage } from "./components/UpcomingPage";

const App = () => {

  const [selectedTab, setSelectedTab] = useState(0);
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
        <Pets />
      </>
    )
  } else if (selectedTab === 2) {
    return (
      <>
        <NavigationBar setTab={setSelectedTab} />
        <UpcomingPage />
      </>
    )
  }
};

export default App;
