import React, { CSSProperties, useState } from "react";
import Header from "./components/Header/CustomHeader";
import Buttons from "./components/Buttons";
import Modal from "./components/UI/Modal"; 
import BackDrop from "./components/UI/BackDrop";
import Animation from "./components/Animations/Animation"; 
import CodeSection from "./components/codeSection"; 
import buttonStyles from "./tools/buttonStyles";
import hoverStyles from "./tools/hoverStyles"; 


function App() {
  const [backDrop, setBackDrop] =useState<boolean>(false);
  const [buttonSelected, setButtonSelected] = useState<number>(0); 
  const [name, setName] = useState<string>(""); 


  const selectNewButtonHandler = (value: number, pName: string) => {
    setButtonSelected(value);
    setName(pName); 
  }

  return (
    <div>
      <BackDrop show = {backDrop} onCLick = {() => setBackDrop(false)} delayUnmount = {1}>
        <Animation show = {backDrop} Animation = "fadeIn 1s" FinalAnimation = "fadeOut 1s">
          <Modal>
              <Animation show = {backDrop} Animation = "fadeInX 1s" FinalAnimation = "fadeOutX 1s" > 
                <CodeSection  name = {name} ccsCode = {buttonStyles[buttonSelected]} cssCodeOnHover = {hoverStyles[buttonSelected]}  />
              </Animation>
          </Modal>
        </Animation>
      </BackDrop>
      <Header/>
      <Buttons toggleBackDrop = {() => setBackDrop(true)} selectButton = {selectNewButtonHandler}/>
    </div>
  );
}



export default App;
