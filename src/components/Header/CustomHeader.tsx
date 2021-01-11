import React from 'react';
import classes from "./Header.module.css";

const Header:React.FC = () =>{
    console.log("header Renderizado")
    return <header className={classes.header}>
    <p>
      Catálogo de botones 😁
    </p>
  </header>

}

export default Header; 
