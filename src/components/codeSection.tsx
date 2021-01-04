import React, { CSSProperties } from "react"; 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierCaveDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
    ccsCode: CSSProperties,
    cssCodeOnHover: CSSProperties,
    name: string, 
}


const CodeSection: React.FC<IProps> = (props) => {


    return <React.Fragment>
        <div style = {{textAlign: "center"}}>
                  <h1>{props.name}</h1>
                </div>
                
                <h4>CSS in line (buttonStyles)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                  {JSON.stringify(props.ccsCode).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

                <h4>CSS in line (hoverStyles Added)</h4>
                <SyntaxHighlighter  language="css" style = {atelierCaveDark}>
                 {JSON.stringify(props.cssCodeOnHover).replace(/,"/g, ',\n "').replace("{" ,'').replace('}' ,'')}
                </SyntaxHighlighter>

    </React.Fragment>
}

export default CodeSection; 
