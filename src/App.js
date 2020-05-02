import React from "react";
import "./App.css";
import "tachyons";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header title="Welcome" user="Axel" />
    </div>
  );
}

export default App;
