import React, {useContext} from "react";
import {MainContext} from "./HOC/MainProvider";
import Animation from "./Animations/Animation";
import Modal from "./UI/Modal"; 
import CodeSection from "./codeSection"; 


const BackDropContent:React.FC = () => {
    const {MainState} = useContext(MainContext);
    

    return <Animation show = {MainState.backDropState} Animation = "fadeIn 0.5s" FinalAnimation = "fadeOut 0.25s">
    <Modal>
        <Animation show = {MainState.backDropState} Animation = "fadeInX 0.5s" FinalAnimation = "fadeOutX 0.25s"> 
          <CodeSection/>
        </Animation>
    </Modal>
  </Animation>
}


export default BackDropContent; 
