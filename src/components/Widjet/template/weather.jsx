import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { Context } from "../../../context/context";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

export default function weather(params) {
  const { city } = useContext(Context);
  const [dataWeather, setdataWeather] = useState([]);
  const [weather, setWeather] = useState([]);
  const [main, setMain] = useState([])
  const urlWeather = "https://api.openweathermap.org/data/2.5/weather?";
  const urlIcon = "https://openweathermap.org/img/wn/";
  const apiKey= import.meta.env.VITE_BACKEND_URL;

  useEffect(()=>{
    axios.get(`${urlWeather}q=${city}&units=metric&lang=fr&appid=${apiKey}`)
    .then((response)=>{
      console.log(response.data)
      setdataWeather(response.data)
      setWeather(response.data.weather[0])
      setMain(response.data.main)
    })
    .catch((error)=>{
      console.log(error);
    })
  },[city])

  return(
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dataWeather.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="icon">
            {weather.description}
            <img src={`${urlIcon}${weather.icon}.png`} alt={`${urlIcon}${weather.icon}.png`} />
            {main.temp}°C
        </Typography>
      </CardContent>
    </Card>
  )
}