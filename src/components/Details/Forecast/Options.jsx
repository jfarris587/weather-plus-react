import React from "react";
import Type from "./Type.jsx";

const Options = (props) => {
  if(props.activeType != null){
      return(
        <h1>Forecast
          <Type type={"condition"} setType={props.setType} activeType={props.activeType}/>
          <Type type={"wind"} setType={props.setType} activeType={props.activeType}/>
          <Type type={"humidity"} setType={props.setType} activeType={props.activeType}/>
          <Type type={"temp"} setType={props.setType} activeType={props.activeType}/>
        </h1>
      );
  }

  else{
    return (null);
  }
}


export default Options;
