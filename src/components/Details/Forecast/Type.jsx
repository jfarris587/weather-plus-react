import React from "react";

const Type = (props) => {
  if(props.type != null){
    if(props.type === props.activeType){
      return(
        <span className="options options-selected" onClick={()=>props.setType(props.type)}>{props.type}</span>
      );
    }
    else{
      return(
        <span className="options" onClick={()=>props.setType(props.type)}>{props.type}</span>
      );
    }

  }

  else{
    return (null);
  }
}


export default Type;
