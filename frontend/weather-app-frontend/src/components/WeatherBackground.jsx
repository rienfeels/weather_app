import React from "react";

// Define a function to determine the video URL based on the weather condition description
function getWeatherVideo(weatherDescription) {
  const description = weatherDescription.toLowerCase();
  if (description.includes("cloud")) {
    return "/cloudy.mp4";
  } else if (description.includes("rain")) {
    return "/rain.mp4";
  } else if (description.includes("sunny")) {
    return "/sunny.mp4";
  } else if (description.includes("clear")) {
    return "/clear.mp4";
  } else {
    return "/default.mp4"; // This is a real default that you should be able to notice.
  }
}

// Define the WeatherBackground component that uses the getWeatherVideo function
function WeatherBackground({ weather, children }) {
  // Make sure to use weather?.weather[0]?.description for checking conditions
  console.log(weather?.weather[0]?.description);
  const videoUrl = getWeatherVideo(
    weather?.weather[0]?.description || "clear skies"
  );

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <video
        key={videoUrl}
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="z-10 rounded p-4 bg-opacity-80">{children}</div>
    </div>
  );
}

export default WeatherBackground;
