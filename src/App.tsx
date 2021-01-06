import React, { useState } from "react";
import Header from "./components/Header/CustomHeader";
import Buttons from "./components/Buttons";
import Modal from "./components/UI/Modal"; 
import BackDrop from "./components/UI/BackDrop";
import Animation from "./components/Animations/Animation"; 
import CodeSection from "./components/codeSection"; 
import ButtonsProvider from "./components/HOC/ButtonsProvider";

function App() {
  const [backDrop, setBackDrop] =useState<boolean>(false);
  
  return (
      <ButtonsProvider>
        <BackDrop show = {backDrop} onCLick = {() => setBackDrop(false)} delayUnmount = {0.25}>
          <Animation show = {backDrop} Animation = "fadeIn 0.5s" FinalAnimation = "fadeOut 0.25s">
            <Modal>
                <Animation show = {backDrop} Animation = "fadeInX 0.5s" FinalAnimation = "fadeOutX 0.25s"> 
                  <CodeSection/>
                </Animation>
            </Modal>
          </Animation>
        </BackDrop>
        <Header/>
        <Buttons toggleBackDrop = {() => setBackDrop(true)} />
      </ButtonsProvider>
  );
}



export default App;
