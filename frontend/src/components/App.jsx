import React, { useRef } from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import AllCharts from "./AllCharts";
import About from "./About";
import Footer from "./Footer";
import FloatingLogo from "./FloatingLogo";

function App() {
  const chartRef = useRef();

  return (
    <div>
      <NavBar chartRef={chartRef} />
      <FloatingLogo/>
      <Landing />
      <About />
      <div ref={chartRef}>
        <AllCharts />
      </div>
      <Footer />
    </div>
  );
}

export default App;
