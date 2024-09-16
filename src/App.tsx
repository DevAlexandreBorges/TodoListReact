import React from "react";

import { Header } from "./Components/Header/Header";
import { Tasks } from "./Components/Tasks/Tasks";

import "./styles/global.css";

function App() {
  return (
    <>
      <Header />

      <Tasks />
    </>
  );
}

export default App;
