import React, { useState } from "react";
import Widjet from "../Widjet/Widget.jsx";
import './List.css'

export default function List(){
  const [listiteam,setlistitem] = useState([{name:"weather"}, {name:"api2"}])
  console.log(listiteam);
  return(
    <div className="listCard">
      {listiteam.map((item)=>(
        <div key={item.name}>
          <Widjet name={item.name}/>
        </div>
      ))}
    </div>
  )
}