import React from "react";
import { useState } from "react";

export const WeatherForm = ({onChangeCity}) => {
  const [city, setCity] = useState('');

  const onChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    onChangeCity(city)
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <input type="text" onChange={onChange} className="input" />
    </form>
  );
};
