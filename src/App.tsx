import React, { CSSProperties, useState } from "react";
import Header from "./components/Header/CustomHeader";
import Buttons from "./components/Buttons";
import Modal from "./components/UI/Modal"; 
import BackDrop from "./components/UI/BackDrop";


function App() {

  const [backDrop, setBackDrop] =useState<boolean>(false); 

   

  return (
    <div>
      <BackDrop show = {backDrop} onCLick = {() => setBackDrop(false)}>
        <Modal show = {backDrop}> <h1>Hola mundo</h1></Modal>
      </BackDrop>
      <Header/>
      <Buttons toggleBackDrop = {() => setBackDrop(true)} />
    </div>
  );
}

export default App;
