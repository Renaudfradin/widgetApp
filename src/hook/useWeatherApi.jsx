import React from "react";
import axios from "axios";
import { useEffect } from "react";

export default function useWeatherApi(location) {
  const [weather, setWeather] = useState({
    iconId: "unknown",
    description: "la description n'est pas renseigné",
    city: "la vile n'est pas renseigné",
    temperature: { value: "~" },
  });
  
  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?";
  const urlIcon = "https://openweathermap.org/img/wn/";
  const apiKey = import.meta.env.VITE_BACKEND_URL;


  const fetchWeather = async () => {
    try {
      const data = await axios
        .create({
          baseURL: urlWeather,
          timeout: 15000,
        })
        .get(
          `q=${location}&&units=metric&lang=frappid=${apiKey}`
        )
        .catch((error)=>{
          console.log(error);
        })
      if (data) {
        setWeather({
          ...weather,
          temperature:{ value: Math.floor(data.data.main.temp) }
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchWeather();
  },[location]);

  return{ weather }
}