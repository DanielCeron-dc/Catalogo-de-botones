import React, { CSSProperties,  useEffect, useState } from "react";
import "./Modal.css";



const Modal:React.FC<{show: boolean}> = (props) => {


    const [style, setStyle] = useState<CSSProperties>({
        opacity: 1,
        position: "fixed",
        zIndex: 500,
        backgroundColor: "white",
        width: "70%",
        border: "1px solid #ccc",
        boxShadow: "1px 1px 1px black",
        padding: "16px",
        left: "15%",
        top: "15%",
        boxSizing: "border-box",
        
    })




    return <div style = {  {...style, animation: `${props.show ? "fadeIn" : "fadeOut"} 1s` , }}>
        {props.children}
    </div>
}

export default Modal; 