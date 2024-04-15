import React, { useState } from "react";
import WeatherBackground from "./components/WeatherBackground";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherForm from "./components/WeatherForm";

function App() {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const response = await fetch(
      `http://localhost:8000/api/weather/?city=${city}`
    );
    const data = await response.json();
    setWeather(data);
  };

  return (
    <WeatherBackground weather={weather}>
      {" "}
      {/* Using WeatherBackground as the outer component */}
      <div className="flex flex-col justify-center items-center h-screen">
        <WeatherForm onSubmit={fetchWeather} />
        <WeatherDisplay weather={weather} />
      </div>
    </WeatherBackground>
  );
}

export default App;
