import React from "react";
import Forecast from "./Forecast/Forecast.jsx";
import Statistics from "./Statistics/Statistics.jsx";
import Form from "./Form/Form.jsx";

const Day = (props) => {
  if(props.submitWeather != null){
    return(
      <div className="menu">
        <Form
          submitWeather={props.submitWeather}
          getLocation={props.getLocation}
        />

        <div className="details">
          <Statistics
            humidity={props.humidity}
            pressure={props.pressure}
            wind={Math.round(props.wind * 2.23694)}
            cloud={props.cloud}
          />

          <Forecast
            forecast={props.forecast}
          />
        </div>
      </div>
    );
  }

  else{
    return (null);
  }
}

export default Day;
