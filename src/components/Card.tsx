import React, { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode; 
    texto: string;
}

const style: CSSProperties = {
    margin: "10px",
    boxShadow: "0 10px 10px 0 rgba(0,0,0,0.4)",
    height: "170px",
    width: "115px",
    display: "block",
    borderStyle: "solid",
    borderColor: "beige",
    textAlign: "center",
    padding: "5px"
}

const Card:React.FC<Props> = (props) => {

    return <div style = {style}>
        <h4>{props.texto}</h4>
        <div style = {{alignContent: "center"}}>
            {props.children}
        </div>
        
    </div>

}


export default Card;
