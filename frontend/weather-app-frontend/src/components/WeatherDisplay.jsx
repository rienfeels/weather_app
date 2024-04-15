import React from "react";

function WeatherDisplay({ weather }) {
  return (
    <div className="w-full max-w-xs">
      {weather && (
        <div className="bg-icy bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <h1 className="font-bold text-xl mb-2">{weather.name}</h1>
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="mb-6">
            <p>Temperature: {weather.main.temp} °F</p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
