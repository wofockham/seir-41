import React from "react";

export default function Header (props) {
  return <h1 style={ {fontStyle: 'italic'} }>{ props.headerText }</h1>;
}
