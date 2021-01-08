import React, {useState} from "react"
import MiniPlane from "./MiniPlane"; 
import Move from "./Move"; 

const TreeDButton:React.FC = () => {
    const [hover, setHover] = useState(false); 


    return<div onMouseOver = {() => setHover(true)} onMouseLeave = {() => setHover(false)}>
        <Move x = {0} y = {-10} show = {hover}>
            <MiniPlane  color = "grey"/>
        </Move>
        <Move x = {0} y = {-20} show = {hover}>
            <MiniPlane  color = "grey"/>
        </Move>
        <Move x = {0} y = {-30} show = {hover}>
            <MiniPlane  color = "grey"/>
        </Move>
        <Move x = {0} y = {-40} show = {hover}>
            <MiniPlane  color = "grey"/>
        </Move>
        <Move x = {0} y = {-50} show = {hover}>
            <MiniPlane color = "green"/>
        </Move>
    </div> 
    
}


export default TreeDButton; 
