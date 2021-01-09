import React, {  useContext} from "react"; 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {MainContext} from "./HOC/MainProvider";
import ButtonStyle from "../tools/buttonStyles";
import HoverStyles from "../tools/hoverStyles"; 
import {complexStyles} from "../tools/ComplexStyles";



const CodeSection: React.FC = () => {

  const {MainState} =useContext(MainContext);

    return MainState.complex ? <React.Fragment>
                <div style = {{textAlign: "center"}}>
                  <h1>{MainState.ButtonName}</h1>
                </div>
                
                <h4>Code: </h4>
                    <SyntaxHighlighter  language="css" style = {atelierCaveDark}  customStyle = {{height: "400px"}}showLineNumbers>
                      {complexStyles[MainState.selectedButton]}
                    </SyntaxHighlighter>
                </React.Fragment>  
                
                : 
                
                <React.Fragment>
                <div style = {{textAlign: "center"}}>
                  <h1>{MainState.ButtonName}</h1>
                </div>
                
                <h4>CSS in line (buttonStyles)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                  {JSON.stringify(ButtonStyle[MainState.selectedButton]).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

                <h4>CSS in line (hoverStyles Added)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                 {JSON.stringify(HoverStyles[MainState.selectedButton]).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

    </React.Fragment>
}

export default CodeSection; 
