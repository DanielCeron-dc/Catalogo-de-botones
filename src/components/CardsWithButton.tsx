import React, {  useContext, ReactFragment, ReactNode} from "react";
import TreeDButton from "./Buttons/3dButton/3dButton";

import {MainContext} from "./HOC/MainProvider";

import Card from "./Card";
import Button from "./Button";
import buttonStyles from "../tools/buttonStyles";
import hoverStyles from "../tools/hoverStyles";

 
const Buttons: React.FC = () => {
  
  const {dispatch} = useContext(MainContext);

  const onCLickHandler = (value: number, name:string, complex ?: boolean) => {
    dispatch(
      {
        type:complex ?  "selectButtonComplex" : "selectButton",
        name,
        value
      }
    );
  }

  const CardWithButton = (index: number, name: string, child? : ReactNode):ReactFragment => {
    return  <Card texto={name}>
      <Button
        style={buttonStyles[index]}
        onHover={hoverStyles[index]}
        onClick={() => onCLickHandler(index, name)}
      >
        {child ? child : "Ejecutar"}
      </Button>
      
    </Card>
  }


  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card texto={"boton sin estilos"}>
        <Button onClick={() => onCLickHandler(1, "Contained Button")}>ejecutar</Button>
      </Card>
      {CardWithButton(0, "contained Button")}
      {CardWithButton(1, "TextButton")}
      {CardWithButton(2, "StadiumButton")}
      {CardWithButton(3, "3D simple", <h1 style ={{marginBlock: 2}}>E</h1>)}
      <Card texto = "3D 2.0">
        <TreeDButton onClick = {() => onCLickHandler(0, "3D 2.0",true)}>
          <h1>E</h1>
        </TreeDButton>
      </Card>

      
    </div>
  );
};




export default Buttons;
