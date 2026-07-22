import React from "react";

// 1️⃣ Weather Component (Object Prop)
const WeatherDisplay = ({ weather }) => {
    return (
        <p>
            Current temperature in {weather.city} is {weather.temp}°C
        </p>
    );
};


// 2️⃣ User Login Status (Conditional Rendering)
const UserStatus = ({ user }) => {
    return (
        <p>
            {user.isLoggedIn ? "Welcome back!" : "Please login"}
        </p>
    );
};


// 3️⃣ Colors (Array Prop)
const ColorList = ({ colors }) => {
    return (
        <p>
            Primary colors are: {colors.join(", ")}
        </p>
    );
};


const App = () => {

    const weatherData = { city: "Chennai", temp: 30 };

    const userData = { name: "Manu", isLoggedIn: true };

    const colorData = ["Red", "Blue", "Yellow"];

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>

            <h2>1. Weather Info</h2>
            <WeatherDisplay weather={weatherData} />

            <hr />

            <h2>2. User Login Status</h2>
            <UserStatus user={userData} />

            <hr />

            <h2>3. Colors List</h2>
            <ColorList colors={colorData} />

        </div>
    );
};

export default App;