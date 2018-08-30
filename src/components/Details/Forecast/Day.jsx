import React from "react";

const Day = (props) => {
  if(props.day != null){
    if(props.activeType === "temp"){
      return(
        <p className="day-date">{props.day}
          <span className="day-stat day-stat-high">{props.high}</span>
          <span className="day-stat day-stat-low">{props.low}</span>
        </p>
      );
    }

    else if(props.activeType === "condition"){
      return(
        <p className="day-date">{props.day}
          <span className="day-stat day-stat-condition">{props.description}</span>
        </p>
      );
    }

    else if(props.activeType === "wind"){
      return(
        <p className="day-date">{props.day}
          <span className="day-stat day-stat-wind">{props.wind}<i className="sup">mph</i></span>
        </p>
      );
    }

    else if(props.activeType === "humidity"){
      return(
        <p className="day-date">{props.day}
          <span className="day-stat day-stat-humidity">{props.humidity}<i className="sup">%</i></span>
        </p>
      );
    }
  }

  else{
    return (null);
  }
}

export default Day;
