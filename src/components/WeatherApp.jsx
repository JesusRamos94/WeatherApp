import { useEffect } from "react";
import { useState } from "react";
import { Loading } from "./Loading";
import { WeatherForm } from "./WeatherForm";
import { WeatherMainInfo } from "./WeatherMainInfo";

export const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  const loadInfo = async ({city = "venezuela"}) => {
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?aqi=no&key=a79c2eb522fa41e794c233206220707&q=${city}`
      );

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 1000);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className="container">
      <div className="card">
        {" "}
        <h1>WeatherApp</h1>
        <div className="weatherContainer">
          <WeatherForm onChangeCity={handleChangeCity} />
          {weather ? <WeatherMainInfo weather={weather} /> : <Loading />}
        </div>
      </div>
    </div>
  );
};
