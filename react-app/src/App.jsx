import React from "react";
import { Pets } from "./components/pets/Pets";
import { HomePage } from "./components/HomePage";
import NavigationBar from "./components/NavigationBar";
import { useState } from "react";
import { UpcomingPage } from "./components/UpcomingPage";
import { BookPage } from "./components/BookPage";
import { LoginPage } from "./components/LoginPage"

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
  }
};

export default App;


// import React from 'react';
// import Register from "./components/Register.jsx"

// function App() {
//   return (
//     <div className="App">
//       <Register />
//     </div>
//   );
// }

//export default App;
