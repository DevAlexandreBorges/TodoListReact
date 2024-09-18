import React from "react";

import { Header } from "./Components/Header/Header";
import { Tasks } from "./Components/Tasks/Tasks";

import "./styles/global.css";
import { TasksProvider } from "./context/TaskContent";

function App() {
  return (
    <TasksProvider>
      <Header />

      <Tasks />
    </TasksProvider>
  );
}

export default App;
