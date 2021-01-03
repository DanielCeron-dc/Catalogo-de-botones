import React, { CSSProperties, useState } from "react";
import Header from "./components/Header/CustomHeader";
import Buttons from "./components/Buttons";
import Modal from "./components/UI/Modal"; 
import BackDrop from "./components/UI/BackDrop";
import Animation from "./components/Animations/Animation"; 


function App() {
  const [backDrop, setBackDrop] =useState<boolean>(false); 

  return (
    <div>
      <BackDrop show = {backDrop} onCLick = {() => setBackDrop(false)} delayUnmount = {1}>
        <Animation show = {backDrop} Animation = "fadeIn 1s" FinalAnimation = "fadeOut 1s">
          <Modal>
              <Animation show = {backDrop} Animation = "fadeInX 1s" FinalAnimation = "fadeOutX 1s"> 
                <h1>Hola mundo</h1>
                <button>HOla</button>
              </Animation>
          </Modal>
        </Animation>
      </BackDrop>
      <Header/>
      <Buttons toggleBackDrop = {() => setBackDrop(true)} />
    </div>
  );
}

export default App;
