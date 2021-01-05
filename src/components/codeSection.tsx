import React, { CSSProperties, useContext} from "react"; 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {ButtonsContext} from "./HOC/ButtonsProvider";
import ButtonStyle from "../tools/buttonStyles";
import HoverStyles from "../tools/hoverStyles"; 



const CodeSection: React.FC = () => {

  const {ButtonsState} =useContext(ButtonsContext);

    return <React.Fragment>
        <div style = {{textAlign: "center"}}>
                  <h1>{ButtonsState.ButtonName}</h1>
                </div>
                
                <h4>CSS in line (buttonStyles)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                  {JSON.stringify(ButtonStyle[ButtonsState.selectedButton]).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

                <h4>CSS in line (hoverStyles Added)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                 {JSON.stringify(HoverStyles[ButtonsState.selectedButton]).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

    </React.Fragment>
}

export default CodeSection; 
