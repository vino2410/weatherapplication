import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import WeatherIcon from "./WeatherIcon";

const WeatherCardWrapper = styled(Card)({
  backgroundColor: "#f5f5f5",
  margin: "auto",
});

const WeatherTitle = styled(Typography)({
  fontSize: 14,
});

const WindSpeedText = styled(Typography)({
  marginBottom: 12,
});

const WeatherCard = () => {
  const [weather, temperature, windSpeed, humidity, pressure] = [
    "Rain",
    24.5,
    40,
    10,
    1007,
  ];

  return (
    <WeatherCardWrapper sx={{ maxWidth: 600, maxHeight: 700, mt: 30 }}>
      <CardContent>
      <Grid container direction="row" justifyContent="center" alignItems="center">
  <Grid item xs={6}>
    <WeatherIcon weather={weather} size="big" />
  </Grid>
  <Grid item xs={6}>
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <WeatherTitle color="textSecondary" gutterBottom>
          {weather}
        </WeatherTitle>
      </Grid>
      <Grid item>
        <Typography variant="h5" component="h2">
          {temperature} &#8451;
        </Typography>
      </Grid>
      <Grid item>
        <WindSpeedText color="textSecondary">
          Wind Speed
        </WindSpeedText>
        <Typography variant="body2" component="p">
          {windSpeed} km/h
        </Typography>
      </Grid>
      <Grid item>
        <WindSpeedText color="textSecondary">
          Humidity
        </WindSpeedText>
        <Typography variant="body2" component="p">
          {humidity}%
        </Typography>
      </Grid>
      <Grid item>
        <WindSpeedText color="textSecondary">
          Pressure
        </WindSpeedText>
        <Typography variant="body2" component="p">
          {pressure} hPa
        </Typography>
      </Grid>
    </Grid>
  </Grid>
</Grid>

      </CardContent>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
