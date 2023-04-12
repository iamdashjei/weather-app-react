import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherStatusIcon from "../../util/weatherStatusIcon";


const WeatherCard = ({details, category}) => {
  // console.log(category);

  const date = Date.parse(details.Date);
  const { Day } = details;
  const { Temperature } = details;

  const { Night } = details;

  const iconDayPhrase = Day.IconPhrase;
  const iconNightPhrase = Night.IconPhrase;
  const minimumTemp = (
    (parseInt(Temperature.Minimum.Value - 32) * 5) /
    9
  ).toFixed(2);
  const maximumTemp = (
    (parseInt(Temperature.Maximum.Value - 32) * 5) /
    9
  ).toFixed(2);

  return category === "Day" ? (

    <Card sx={{ minWidth: 50, mb: 0.5 }}>
      <CardContent>
        <Box>
        <WeatherStatusIcon key={Date.now()} status={iconDayPhrase} time={"day"}/>
        </Box>
        <Typography variant="h6" component="div">
          {iconDayPhrase}
        </Typography>
        <Typography color="text.secondary">
          {minimumTemp} - {maximumTemp} &deg;C
        </Typography>
        <Typography color="text.secondary">
          <Moment format="MMM, DD YYYY">{date}</Moment> (Day)
           
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card sx={{ minWidth: 50, mb: 0.5 }}>
      <CardContent>
        <Box>
          <WeatherStatusIcon key={Date.now()} status={iconNightPhrase} time={"night"}/>
        </Box>
        <Typography variant="h6" component="div">
          {iconNightPhrase}
        </Typography>
        <Typography color="text.secondary">
          {minimumTemp} - {maximumTemp} &deg;C
        </Typography>
        <Typography color="text.secondary">
          <Moment format="MMM, DD YYYY">{date}</Moment> (Night)
           
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
