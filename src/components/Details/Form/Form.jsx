import React from "react";

const Day = (props) => {
  if(props.submitWeather != null){
    return(
      <form className="form" autoComplete="off" onSubmit={props.submitWeather}>
        <img className="location" src="img/location.jpg" alt="location" onClick={props.getLocation}/>
        <input id="search" className="search" type="search" placeholder="Search City..."></input>
      </form>
    );
  }

  else{
    return (null);
  }
}

export default Day;
