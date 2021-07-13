import React from "react";
import TopNavbar from "./components/TopNavbar";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Images from "./components/Images";

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <Main />
      <Posts />
      <Images />
    </div>
  );
}

export default App;
