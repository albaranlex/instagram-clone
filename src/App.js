import React, { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import Profile from "./components/Profile";
import PostsNav from "./components/PostsNav";
import Images from "./components/Images";
import Counters from "./counters.json";

function App() {
  const [counter, setCounter] = useState(Counters);
  console.log(Counters);

  return (
    <div className="App">
      <TopNavbar />
      <Profile />
      <PostsNav />
      <Images counter={counter} />
    </div>
  );
}

export default App;
