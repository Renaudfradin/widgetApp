import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBox(){
  const [inputeValue,setInputeValue] = useState("");

  function handleChange(event){
    setInputeValue(event.target.value);
    console.log(inputeValue)
  }


  return(
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="filled-basic" label="Filled" variant="filled" value={inputeValue} onChange={handleChange}/>
    </Box>
  )
}