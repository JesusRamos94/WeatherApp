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
    document.title = `Weather | ${weather?.location?.name ?? ""}`;
  }, [weather]);

  const loadInfo = async (city = "cumana") => {
    try {
      const request = await fetch(
        `https://api.weatherapi.com/v1/current.json?aqi=no&key=a79c2eb522fa41e794c233206220707&q=${city}`
      );

      if (request.status === 400) {
        alert("Debe ingresar una ciudad existente");
        window.location.reload();
      }

      const json = await request.json();

      setTimeout(() => {
        setWeather(json);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChangeCity = async (city) => {
    setWeather(null);
    if (city.trim().length <= 1) city = "Cumana";
    await loadInfo(city);
    

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
