import React from "react";

const Weather = (props) => {
  return (
    <div className="weather">
      <div className="top-container">
        { props.date && <p className="weather__date">{props.date}</p> }
      </div>

      <div className="bottom-container">
        { props.temperature && <p className="weather__temperature">{props.temperature}&#176;</p> }
        { props.city && <p className="weather__location">{props.city}</p> }
        { props.description && <p className="weather__condition">{props.description}</p> }
      </div>
    </div>
  );
}


export default Weather;
