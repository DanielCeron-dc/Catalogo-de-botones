import React, { useState, useContext} from "react";

import {MainContext} from "./HOC/MainProvider";

import Card from "./Card";
import Button from "./Button";
import buttonStyles from "../tools/buttonStyles";
import hoverStyles from "../tools/hoverStyles";
import Animation, { Animaciones } from "../components/Animations/Animation";

const Buttons: React.FC = () => {
  const [ejecutarAnimacion, setEjecutarAnimacion] = useState(false);
  const {dispatch} = useContext(MainContext);

   const onCLickHandler = (value: number, name:string) => {
    //props.selectButton(value, ButtonName);
    dispatch(
      {
        type: "selectButton",
        name,
        value
      }
    );
   }

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card texto={"boton sin estilos, CLick para ver los estilos de el de al lado ->"}>
        <Button onClick={() => onCLickHandler(0, "Contained Button")}>ejecutar</Button>
      </Card>
      <Card texto={"contained Button"}>
        <Animation
          show={ejecutarAnimacion}
          Animation={`${Animaciones.prueba} 0.5s 5`}
          onAnimationEnd={() => setEjecutarAnimacion(false)}
          NotdestroyChildren
        >
          <Button
            style={buttonStyles[0]}
            onHover={hoverStyles[0]}
            onClick={() => setEjecutarAnimacion(true)}
          >
            ejecutar
          </Button>
        </Animation>
      </Card>
      <Card texto={"TextButton"}>
        <Button
          style={buttonStyles[1]}
          onHover={hoverStyles[1]}
          onClick={() => onCLickHandler(1, "TextButton")}
        >
          ejecutar
        </Button>
      </Card>
      <Card texto={"StadiumButton"}>
        <Button
          style={buttonStyles[2]}
          onHover={hoverStyles[2]}
          onClick={() => onCLickHandler(2, "StadiumButton")}
        >
          ejecutar
        </Button>
      </Card>
    </div>
  );
};

export default Buttons;
