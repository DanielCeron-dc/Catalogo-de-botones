import React, { useState } from "react";
import Move from "../../Animations/Move";
import MiniPlane from "./MiniPlane2";


const Door:React.FC<{onClick: () => void}> = (props) => {
    const [hover, setHover] = useState(false); 


    return<div onMouseOver = {() => setHover(true)} onMouseLeave = {() => setHover(false)} style = {{
        cursor: "pointer"}} onClick = {props.onClick}>
        <MiniPlane  rgba = "24, 219, 89, 0.5" profundidad/>
      
       
        <Move x = {30} y = {0} show = {hover}>
            <MiniPlane  rgba = "47, 47, 47, 0.8">
                {props.children}
            </MiniPlane>
        </Move>
    </div> 
}


export default Door; 