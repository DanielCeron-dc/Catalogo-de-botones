import React, { useContext, ReactFragment, ReactNode } from "react";
import TreeDButton from "./Buttons/3dButton/3dButton";
import ButtonTwo from "./Buttons/3dButton2/DoorButton";  

import { ICodeSection } from "./codeSection";
import { MainContext } from "./HOC/MainProvider";

import Card from "./Card";
import Button from "./UI/Button";
import buttonStyles from "../tools/buttonStyles";
import hoverStyles from "../tools/hoverStyles";

const Buttons: React.FC = () => {
  const { dispatch } = useContext(MainContext);

  const onCLickHandler = (codeSelected: ICodeSection[], title: string) => {
    dispatch({
      type: "selectButton",
      codeSelected: codeSelected,
      title,
    });
  };

  const CardWithButton = (index: number, name: string, child?: ReactNode): ReactFragment => {
    return (
      <Card texto={name}>
        <Button
          style={buttonStyles[index]}
          onHover={hoverStyles[index]}
          onClick={() => onCLickHandler([{ complex: false, index, description: name }], "si")}
        >
          {child ? child : "Ejecutar"}
        </Button>
      </Card>
    );
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card texto={"boton sin estilos"}>
        <Button
          onClick={() => onCLickHandler([{ complex: false, description: "boton sin estilo", index: 1 }], "3D simple")}
        >
          ejecutar
        </Button>
      </Card>
      {CardWithButton(0, "contained Button")}
      {CardWithButton(1, "TextButton")}
      {CardWithButton(2, "StadiumButton")}
      {CardWithButton(3, "3D simple", <h1 style={{ marginBlock: 2 }}>E</h1>)}
      <Card texto="3D 2.0">
        <TreeDButton
          onClick={() =>
            onCLickHandler(
              [
                { complex: true, description: "React Component", index: 1 },
                { complex: true, description: "React Component MiniPlane ", index: 0 },
              ],
              "3d 2.0"
            )
          }
        >
          <h1>E</h1>
        </TreeDButton>
      </Card>
      <Card texto="Door">
        <ButtonTwo
          onClick={() =>
            onCLickHandler(
              [
                { complex: true, description: "React Component", index: 2 },
                { complex: true, description: "React Component MiniPlane ", index: 3 },
              ],
              "Door"
            )
          }
        >
          <h1>E</h1>
        </ButtonTwo>
      </Card>
    </div>
  );
};

export default Buttons;
