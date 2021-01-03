 import {CSSProperties} from "react";

 const buttonStyles: CSSProperties[] = [
    { //contained Button
      backgroundColor: "rgb(22,138,253)",
      borderStyle: "none",
      height: "30px",
      color: "white",
      fontSize: "15px",
      borderRadius: "5%",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.3)",
      transform: "translateY(100)",
      transition: "all 1s ease-out",
    },
    { // TextButton
      
      borderStyle: "groove",
      borderColor: "black",
      height: "30px",
      color: "black",
      fontSize: "15px",
      borderRadius: "5%",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.3)",
      transition: "1s",
    },
    {  //StaiumButton 
      borderStyle: "dashed",
      borderColor: "black",
      height: "30px",
      color: "black",
      fontSize: "15px",
      borderRadius: "30%",
      boxShadow: "0 2px 3px 0 rgba(0,0,0,0.3)",
      transition: "1s",
    },
  ];

  export default buttonStyles; 