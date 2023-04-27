import React from "react";
import { WiDaySunny, WiNightClear, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog } from "react-icons/wi";

const WeatherIcon = ({ weather }) => {
  switch (weather.toLowerCase()) {
    case "clear":
      return <WiDaySunny />;
    case "clouds":
      return <WiCloudy />;
    case "drizzle":
    case "rain":
      return <WiRain />;
    case "thunderstorm":
      return <WiThunderstorm />;
    case "snow":
      return <WiSnow />;
    case "mist":
    case "smoke":
    case "haze":
    case "dust":
    case "fog":
    case "sand":
    case "ash":
    case "squall":
    case "tornado":
      return <WiFog />;
    case "partly cloudy":
      return <WiNightClear />;
    default:
      return <WiDaySunny />;
  }
};

export default WeatherIcon;
