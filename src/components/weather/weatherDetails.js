import WeatherCard from "../cards/weatherCards";
import * as React from "react";
import "./weatherDetails.css";
import axios from "axios";
import { LOCATION_API_URL } from "../../constants/constants";

const WeatherDetails = ({details}) => {
  

  const listDayForecasts = details.map((row) => {
     return <WeatherCard key={row.EpochDate} details={row} category={"Day"}/>
  });

  const listNightForecasts = details.map((row) => {
    return <WeatherCard key={row.EpochDate} details={row} category={"Night"}/>
 });

  return (
    <>
    <div className="detailsDay">
      {details && listDayForecasts}
    </div>

    <div className="detailsNight">
      {details && listNightForecasts}
    </div>
    </>
  );
};

export default WeatherDetails;
