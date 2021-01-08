import React, { CSSProperties} from "react"





const MiniPlane:React.FC<{color: string}> = (props) => {

    const style: CSSProperties = {
        transform: "skewY(-41deg)",
        width: "50px",
        height: "50px",
        backgroundColor: "limegreen", 
        display: "inline-grid",
        position: "fixed",
        background: props.color,
         justifyContent: "center",
        alignItems: "center",
    
    }


    return <button style = { style }>
        hola
    </button>
}


export default MiniPlane;