export const WEATHER_API_URL = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/";
export const LOCATION_API_URL = "https://dataservice.accuweather.com/locations/v1/cities/geoposition/search";

export const WeatherData = {
  Headline: {
    EffectiveDate: "2023-03-31T13:00:00+08:00",
    EffectiveEpochDate: 1680238800,
    Severity: 4,
    Text: "Danger of dehydration and heat stroke if outside for extended periods of time Friday afternoon",
    Category: "heat",
    EndDate: "2023-03-31T19:00:00+08:00",
    EndEpochDate: 1680260400,
    MobileLink:
      "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?lang=en-us",
    Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2023-03-31T07:00:00+08:00",
      EpochDate: 1680217200,
      Temperature: {
        Minimum: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 96.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 3,
        IconPhrase: "Partly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=1&lang=en-us",
      Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=1&lang=en-us",
    },
    {
      Date: "2023-04-01T07:00:00+08:00",
      EpochDate: 1680303600,
      Temperature: {
        Minimum: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 94.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 1,
        IconPhrase: "Sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=2&lang=en-us",
      Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=2&lang=en-us",
    },
    {
      Date: "2023-04-02T07:00:00+08:00",
      EpochDate: 1680390000,
      Temperature: {
        Minimum: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 95.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 6,
        IconPhrase: "Mostly cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=3&lang=en-us",
      Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=3&lang=en-us",
    },
    {
      Date: "2023-04-03T07:00:00+08:00",
      EpochDate: 1680476400,
      Temperature: {
        Minimum: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 93.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 2,
        IconPhrase: "Mostly sunny",
        HasPrecipitation: false,
      },
      Night: {
        Icon: 34,
        IconPhrase: "Mostly clear",
        HasPrecipitation: false,
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=4&lang=en-us",
      Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=4&lang=en-us",
    },
    {
      Date: "2023-04-04T07:00:00+08:00",
      EpochDate: 1680562800,
      Temperature: {
        Minimum: {
          Value: 77.0,
          Unit: "F",
          UnitType: 18,
        },
        Maximum: {
          Value: 91.0,
          Unit: "F",
          UnitType: 18,
        },
      },
      Day: {
        Icon: 17,
        IconPhrase: "Partly sunny w/ t-storms",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Night: {
        Icon: 35,
        IconPhrase: "Partly cloudy",
        HasPrecipitation: true,
        PrecipitationType: "Rain",
        PrecipitationIntensity: "Moderate",
      },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=5&lang=en-us",
      Link: "http://www.accuweather.com/en/ph/pulung-maragul/763121/daily-weather-forecast/763121?day=5&lang=en-us",
    },
  ],
};
