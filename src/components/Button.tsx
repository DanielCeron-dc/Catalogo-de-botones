import React, { CSSProperties, ReactNode, useState } from "react";

interface IProps {
  style?: CSSProperties | undefined;
  onHover?: CSSProperties | undefined;
  onClick?: () => void;
  children?: ReactNode | string;
}

const Button: React.FC<IProps> = (props) => {
  const [hover, setHover] = useState(false);

  let hoverCombinedWithStyle:CSSProperties = {...props.style, ...props.onHover, cursor: "pointer"};

  return (
    <button
      style={hover ? hoverCombinedWithStyle : props.style}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={props.onClick}
    >{props.children}</button>
  );
};


export default Button;
