import React, { CSSProperties } from "react"

const style: CSSProperties = {
    backgroundColor: "rgb(192 192 179)",
    width: "-webkit-fill-available",
    fontWeight: 600,

}

const CodeText: React.FC<{Text:string}> = (props) => {



    return <textarea cols={30} rows={10} style = {style} onChange = {(e) => {e.preventDefault()}} value = {props.Text}>
            
    </textarea>
}

export default CodeText; 