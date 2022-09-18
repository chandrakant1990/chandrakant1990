import React, { Component } from "react";
import Icons from "./Icons";

function Icon(props) {
  if (Icons[props.icon]) {
    return (
      <svg
        className={props.className}
        style={props.style}
        viewBox={Icons[props.icon].viewBox}
        dangerouslySetInnerHTML={{ __html: Icons[props.icon].data }}
        onClick={(e) => {
          props.onClick && props.onClick(e);
        }}
      />
    );
  } else {
    return null;
  }
}

export default Icon;
