import React from "react";
import Header from "./components/Header/CustomHeader";
import Buttons from "./components/Buttons";
import BackDrop from "./components/UI/BackDrop";
import BackDropContent from "./components/BackDropContent";
import MainProvider from "./components/HOC/MainProvider";

function App() {

  console.log("App Renderizada");


  return (
      <MainProvider>
        <BackDrop  delayUnmount = {0.25}>
          <BackDropContent/>
        </BackDrop>
        <Header/>
        <Buttons/>
      </MainProvider>
  );
}



export default App;
