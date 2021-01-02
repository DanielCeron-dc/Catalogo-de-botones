import React, { CSSProperties } from "react";
import Header from "./components/Header/CustomHeader";
import Card from "./components/Card";
import Button from "./components/Button";
import buttonStyles from "./tools/buttonStyles"; 
import hoverStyles from "./tools/hoverStyles";

function App() {
  return (
    <div>
      <Header></Header>
      <div style={{ display: "flex" }}>
        <Card texto={"boton sin estilos"}>
          <Button>ejecutar</Button>
        </Card>
        <Card texto={"RaisedButton"}>
          <Button style={buttonStyles[0]} onHover={hoverStyles[0]}>
            ejecutar
          </Button>
        </Card>
        <Card texto={"RaisedButton"}>
          <Button style={buttonStyles[0]} onHover={hoverStyles[0]}>
            ejecutar
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default App;
