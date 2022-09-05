import React from "react";
import "./App.css";
import Head from "./Components/Head";
import Index from "./Components/Index";


function App() {
  const recommendationHandler = () => {
    console.log("The site will recommend something * wink - wink *");
  };

  return (
    <div className="App">
      <Head recommendationHandler={recommendationHandler} />
      <Index/>
    </div>
  );
}

export default App;
