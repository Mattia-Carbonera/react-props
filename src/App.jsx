import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Navbar from "./components/header/nav";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
