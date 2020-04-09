import React from "react";
import CurrentNums from "./CurrentNums";
import TabBar from "./Charts/TabPage";
import Landing from "./Landing";
import NavBar from "./NavBar"


function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <TabBar/>
      <CurrentNums />
    </div>
  );
}

export default App;
