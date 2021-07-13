import React, { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import Main from "./components/Main";
import Posts from "./components/Posts";
import Images from "./components/Images";
import Counters from "./counters.json";

function App() {
  const [counter, setCounter] = useState(Counters);
  console.log(Counters);

  return (
    <div className="App">
      <TopNavbar />
      <Main />
      <Posts />
      <Images counter={counter} />
    </div>
  );
}

export default App;
