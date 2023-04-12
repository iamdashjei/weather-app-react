import * as React from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import "./location.css";
import { LOCATION_API_URL } from "../../constants/constants";

const Location = () => {
  const [currentPlace, setCurrentPlace] = React.useState("");
  const [city, setCity] = React.useState("");
  const [province, setProvince] = React.useState("");

  React.useEffect(() => {
    console.log("Location loaded");

    navigator.geolocation.getCurrentPosition((position) => {
      const locationDetails = async () => {
        const { data } = await axios.get(
          `${LOCATION_API_URL}?apikey=3ynwLeyVaG5i0ibX0jo5n9OLRAp1ABHz&q=${position.coords.latitude},${position.coords.longitude}`
        );
        // console.log(data);
        const { AdministrativeArea, ParentCity } = data;
        setCurrentPlace(data.LocalizedName);
        setCity(ParentCity.LocalizedName);
        setProvince(AdministrativeArea.LocalizedName);
      };

      locationDetails();
    });
  }, []);

  return (
    <div className="location">
      <Typography sx={{ color: "white" }} variant="h3">
        {currentPlace}
      </Typography>
      <Typography sx={{ color: "white" }} variant="h4">
        {city}, {province}
      </Typography>
    </div>
  );
};

export default Location;
