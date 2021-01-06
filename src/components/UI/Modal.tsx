import React, { CSSProperties,  } from "react";
import usePageDimension from "../../hooks/usePageDimensions"; 

const Modal:React.FC = (props) => {

    const [ windowHeight , windowsWidth] =  usePageDimension();

    const style:CSSProperties = {
        opacity: 1,
        position: "fixed",
        zIndex: 1500,
        backgroundColor: "white",
        width: windowsWidth< 600 ? "100%" : "50%",
		left: windowsWidth< 600 ? "0" : "22%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        boxSizing: "border-box",
        transform: `translate( 0 , ${windowHeight < 600 ? "50px" :  "100px"} )`, //animation ends on the page start, so this is necessary idk why
    }

    return <div style = {style} onClick = {(e) => {e.stopPropagation()}}>
        {props.children}
    </div>
}

export default Modal; 