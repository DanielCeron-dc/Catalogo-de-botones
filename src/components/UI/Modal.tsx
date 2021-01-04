import React, { CSSProperties,  } from "react";

const Modal:React.FC = (props) => {
    const style:CSSProperties = {
        opacity: 1,
        position: "fixed",
        zIndex: 1500,
        backgroundColor: "white",
        width: "70%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "15%",
        boxSizing: "border-box",
        transform: "translate( 0 , 100px)", //animation ends on the page start, so this is necessary idk why
    }

    return <div style = {style} onClick = {(e) => {e.stopPropagation()}}>
        {props.children}
    </div>
}

export default Modal; 