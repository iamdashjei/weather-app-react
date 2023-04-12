import * as React from "react";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";

import "./currentTime.css";

const CurrentTime = () => {
  const [todayTime, setTodayTime] = React.useState();

  const timer = () => {
    var now = new Date().getTime();

    setTodayTime(now);
    setTimeout(timer, 1000);
  }

  React.useEffect( 
    () => {
        timer();
  }, [],
  );

  return (
    <div className="timeCard">
      <Typography sx={{ color: 'white' }}variant="h1">
        <Moment format="dddd, MMM DD">{todayTime}</Moment>
      </Typography>
      <Typography sx={{ color: 'white' }} align="right" variant="h2">
        <Moment format="hh:mm:ss A">{todayTime}</Moment>
      </Typography>
    </div>
  );
};

export default CurrentTime;
