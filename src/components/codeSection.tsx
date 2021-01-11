import React, {  CSSProperties, useContext} from "react"; 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {MainContext} from "./HOC/MainProvider";
import ButtonStyle from "../tools/buttonStyles";
import HoverStyles from "../tools/hoverStyles"; 
import {complexStyles} from "../tools/ComplexStyles";




export interface ICodeSection {
  complex: boolean;
  index: number;
  description: string;
}

function ConvertToString(code:React.CSSProperties):string{
  return JSON.stringify(code).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,''); 
}


const CodeSection: React.FC = () => {

  const {MainState} =useContext(MainContext);

 
  const CodeContainerStyle:CSSProperties = {
    display:"grid",
     width: MainState.codeSelected.length > 1 ?  "50%" : "100%",
  }


    return  <React.Fragment>
      <div style = {{textAlign: "center"}}>
        <h1>{MainState.title}</h1>
      </div>

      <div style={{width:"100%", display: "flex", flexWrap: "wrap" }}>
      {MainState.codeSelected.map((code, index) => <div style = {CodeContainerStyle} key = {index} > 
      <h4>{code.description}</h4>
      <SyntaxHighlighter  language={code.complex ? "typescript" : "css"} style = {atelierCaveDark}  customStyle = {{maxHeight: "400px"}} >
        {code.complex ? complexStyles[code.index] : ConvertToString(ButtonStyle[code.index])}
      </SyntaxHighlighter>
      {/* ---------------------------- optional ------------------------------------------------------ */}
      {!code.complex &&<React.Fragment>
        <h4>in line Code: </h4>
        <SyntaxHighlighter  language="css" style = {atelierCaveDark}  customStyle = {{maxHeight: "400px"}} >
          {code.complex ? complexStyles[code.index] : ConvertToString(HoverStyles[code.index])}
        </SyntaxHighlighter>
      </React.Fragment>
      }
    </div>)}
    </div>


    </React.Fragment> 
    
    
    
}

export default CodeSection; 
