import React, {useEffect} from "react";
import TabBar from "./TabBar";
import LottoChart from "./LottoChart";
import CurrentNums from "./CurrentNums";
import axios from "axios";

function App() {
  function getData() {
    axios
      .get("/getdata")
      .then((reponse) => {
        return <LottoChart data = {reponse}/>;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <TabBar />
      <LottoChart />
      <CurrentNums />
    </div>
  );
}

export default App;
