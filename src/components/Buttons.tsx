import React, { useState } from "react";
import Card from "./Card";
import Button from "./Button";
import buttonStyles from "../tools/buttonStyles";
import hoverStyles from "../tools/hoverStyles";
import Animation, { Animaciones } from "../components/Animations/Animation";

const Buttons: React.FC<{ toggleBackDrop: () => void }> = (props) => {
  const [ejecutarAnimacion, setEjecutarAnimacion] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <Card texto={"boton sin estilos"}>
        <Button onClick={props.toggleBackDrop}>ejecutar</Button>
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
          onClick={props.toggleBackDrop}
        >
          ejecutar
        </Button>
      </Card>
      <Card texto={"StadiumButton"}>
        <Button
          style={buttonStyles[2]}
          onHover={hoverStyles[2]}
          onClick={props.toggleBackDrop}
        >
          ejecutar
        </Button>
      </Card>
    </div>
  );
};

export default Buttons;
