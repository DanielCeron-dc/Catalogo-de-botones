import React, { CSSProperties, ReactNode } from "react";
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

const BackDrop: React.FC<{show: boolean;onCLick: () => void; children?: ReactNode | String, delayUnmount: number}> = (props) =>{

  const shouldRender = useDelayUnmount(props.show, props.delayUnmount);

  return shouldRender ? (
    <div onClick={() => props.onCLick()} style={style}>{props.children}</div>
  ) : (
    <React.Fragment></React.Fragment>
  );

}

export default BackDrop;
