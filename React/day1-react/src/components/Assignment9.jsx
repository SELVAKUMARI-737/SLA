import React from "react";
function WeatherDisplay(props) {
  return (
    <p>
      Current temperature in {props.weather.city} is {props.weather.temp}°C
    </p>
  );
}
function UserStatus(props) {
  return (
    <p>
      {props.user.isLoggedIn ? "Welcome back!" : "Please login"}
    </p>
  );
}
function ColorList(props) {
  return (
    <p>
      Primary colors are: {props.colors.join(", ")}
    </p>
  );
}
function Assignment9() {
  const weatherData = { city: "Chennai", temp: 30 };

  const userData = { name: "Manu", isLoggedIn: true };

  const colorData = ["Red", "Blue", "Yellow"];

  return (
    <div>
      <h2>Assignment 3</h2>

      <WeatherDisplay weather={weatherData} />
      <UserStatus user={userData} />
      <ColorList colors={colorData} />
    </div>
  );
}

export default Assignment9;