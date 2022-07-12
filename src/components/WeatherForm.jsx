import React from "react";
import { useState } from "react";

export const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");
  

  const onChange = (e) => {
      setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeCity(city);


  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <input type="text" onChange={onChange} className="input" placeholder="the weather in..."  />
    </form>
  );
};
