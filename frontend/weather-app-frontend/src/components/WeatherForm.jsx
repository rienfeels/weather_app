// WeatherForm.jsx

import React, { useState } from "react";

function WeatherForm({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city && onSubmit) {
      onSubmit(city);
      setCity(""); // Clear the input after submitting
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 text-white text-sm border-4 py-1 px-2 rounded"
            type="submit"
          >
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
}

export default WeatherForm;
