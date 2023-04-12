import {
  WiDayFog,
  WiDaySunny,
  WiDayCloudy,
  WiDayRainMix,
  WiDayCloudyHigh,
  WiDayCloudyWindy,
  WiDayLightWind,
  WiDayShowers,
  WiDayThunderstorm,
  WiDayStormShowers,
  WiDaySleet,
  WiDayLightning,
  WiDayRain,
  WiNightAltCloudy,
  WiNightClear,
  WiNightCloudy,
  WiNightRainWind,
  WiNightShowers,
  WiNightAltPartlyCloudy,
  WiNightRain
} from "react-icons/wi";

const WeatherStatusIcon = ({ status, time }) => {
  if (time === "day") {
    if (status.toLowerCase() === "sunny") {
      return <WiDaySunny size={55} />;
    } else if (status.toLowerCase() === "mostly sunny") {
      return <WiDayCloudyWindy size={55} />;
    } else if (status.toLowerCase() === "partly sunny") {
      return <WiDayLightWind size={55} />;
    } else if (status.toLowerCase() === "intermittent clouds") {
      return <WiDayCloudy size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy") {
      return <WiDayCloudyHigh size={55} />;
    } else if (status.toLowerCase() === "cloudy") {
      return <WiDayCloudy size={55} />;
    } else if (status.toLowerCase() === "dreary") {
      return <WiDayRainMix size={55} />;
    } else if (status.toLowerCase() === "fog") {
      return <WiDayFog size={55} />;
    } else if (status.toLowerCase() === "showers") {
      return <WiDayShowers size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy w/ showers") {
      return <WiDayStormShowers size={55} />;
    } else if (status.toLowerCase() === "partly sunny w/ showers") {
      return <WiDaySleet size={55} />;
    } else if (status.toLowerCase() === "t-storms") {
      return <WiDayThunderstorm size={55} />;
    } else if (status.toLowerCase() === "thunderstorms") {
      return <WiDayThunderstorm size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy w/ t-storms") {
      return <WiDayThunderstorm size={55} />;
    } else if (status.toLowerCase() === "partly sunny w/ t-storms") {
      return <WiDayLightning size={55} />;
    } else if (status.toLowerCase() === "rain") {
      return <WiDayRain size={55} />;
    }
  } else {
    if (status.toLowerCase() === "clear") {
      return <WiNightClear size={55} />;
    } else if (status.toLowerCase() === "mostly clear") {
      return <WiNightAltCloudy size={55} />;
    } else if (status.toLowerCase() === "partly cloudy") {
      return <WiNightAltPartlyCloudy size={55} />;
    } else if (status.toLowerCase() === "intermittent clouds") {
      return <WiNightCloudy size={55} />;
    } else if (status.toLowerCase() === "hazy moonlight") {
      return <WiNightRainWind size={55} />;
    } else if (status.toLowerCase() === "cloudy") {
      return <WiNightCloudy size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy") {
      return <WiNightCloudy size={55} />;
    } else if (status.toLowerCase() === "showers") {
      return <WiNightShowers size={55} />;
    } else if (status.toLowerCase() === "partly cloudy w/ showers") {
      return <WiNightShowers size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy w/ showers") {
      return <WiNightShowers size={55} />;
    } else if (status.toLowerCase() === "partly cloudy w/ t-storms") {
      return <WiNightShowers size={55} />;
    } else if (status.toLowerCase() === "mostly cloudy w/ t-storms") {
      return <WiNightShowers size={55} />;
    } else if (status.toLowerCase() === "rain") {
      return <WiNightRain size={55} />;
    }
  }
};

export default WeatherStatusIcon;
