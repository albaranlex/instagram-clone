import React, { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import Profile from "./components/Profile";
import Posts from "./components/Posts";
import Images from "./components/Images";
import Counters from "./counters.json";

function App() {
  const [counter, setCounter] = useState(Counters);
  console.log(Counters);

  return (
    <div className="App">
      <TopNavbar />
      <Profile />
      <Posts />
      <Images counter={counter} />
    </div>
  );
}

export default App;
