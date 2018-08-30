import React from "react";
import Day from "./Day.jsx";
import Options from "./Options.jsx";


class Forecast extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeType: "temp",
      forecast: null
    }
  }

  componentWillReceiveProps(p){
    var tempState = this.state;
    tempState.forecast = p.forecast;
    this.setState(tempState);
  }

  /*Sets the type of Forecast: Temp - Condition - Wind - Humidity*/
  setType = (t) => {
    var tempState = this.state;
    tempState.activeType = t;
    this.setState(tempState);
  }


  render(){
    if(this.state.forecast != null){
      return(
        <div className="forecast">
          <Options
            setType={this.setType}
            activeType={this.state.activeType}
          />


          <div className="days">
            {this.state.forecast.map((day, index) => (
              <Day
                key={index}
                activeType={this.state.activeType}
                day={this.state.forecast[index].date}
                high={this.state.forecast[index].max}
                low={this.state.forecast[index].min}
                wind={this.state.forecast[index].wind}
                humidity={this.state.forecast[index].humidity}
                description={this.state.forecast[index].description}
              />
            ))}
          </div>
        </div>
      );
    }

    else{
      return null;
    }
  }
}


export default Forecast;
