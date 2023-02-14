import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useContext } from "react";
import { Context } from "../../context/context";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Weather from "./template/weather";

export default function Widget({name}){
  const renderView = (name) => {
    switch (name) {
      case "weather":
        return <Weather />;
      default:
        return null;
    }
  };

  return renderView(name);
}