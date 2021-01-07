import React, { CSSProperties, useContext } from "react";
import {MainContext} from "../HOC/MainProvider";
import useDelayUnmount from "../../hooks/useDelayUnmount";

const style: CSSProperties = {
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: 100,
  left: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
};

const BackDrop: React.FC<{delayUnmount: number}> = (props) =>{

  const {MainState, dispatch} = useContext(MainContext); 

  const shouldRender = useDelayUnmount(MainState.backDropState, props.delayUnmount);

  return shouldRender ? (
    <div onClick={() => dispatch({type: "DESACTIVE_BACKDROP"})} style={style}>{props.children}</div>
  ) : (
    <React.Fragment></React.Fragment>
  );

}

export default BackDrop;
