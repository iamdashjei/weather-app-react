import * as React from "react";
import "./App.css";
import WeatherDetails from "./components/weather/weatherDetails";
import { LOCATION_API_URL } from "./constants/constants";
import axios from "axios";
import CurrentTime from "./components/cards/currentTime";
import HeadLines from "./components/cards/headlines";
import Location from "./components/cards/location";

function App() {
  
  const [weatherDetails, setWeatherDetails] = React.useState([]);
  const [headlines, setHeadlines] =  React.useState({});
  React.useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const { data } = await axios.get(
        `${LOCATION_API_URL}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&q=${position.coords.latitude},${position.coords.longitude}`
      );

      const results = await axios.get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.Key}?apikey=${process.env.REACT_APP_ACCUWEATHER_API_KEY}&details=false&metric=false&language=en-us`
      );

      const {
        data: { DailyForecasts, Headline },
      } = results;

      let dayOne = (DailyForecasts[0]["Day"]["IconPhrase"]).toLowerCase();
      if(dayOne.includes("showers")){
        document.body.className = "bodyRainy";
      } else if(dayOne.includes("rain")){
        document.body.className = "bodyRainy";
      } else if(dayOne.includes("cloudy")){
        document.body.className = "bodyCloudy";
      } else if(dayOne.includes("storms") || dayOne.includes("t-storms") || dayOne.includes("storm")){
        document.body.className = "bodyStormy";
      } else {
        document.body.className = "bodySunny"
      }
      setWeatherDetails(DailyForecasts);
      setHeadlines(Headline);
    });
  }, []);

  return (
    <div className="App">
      {headlines && <HeadLines data={headlines}/>}
      <Location />
      {weatherDetails && <WeatherDetails details={weatherDetails}/>}
      <CurrentTime />
    </div>
  );
}

export default App;
