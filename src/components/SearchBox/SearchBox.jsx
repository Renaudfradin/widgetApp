import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function SearchBox({valueInput,setvalueInput}){
  function handleChange(event){
    setvalueInput(event.target.value);
    console.log(valueInput)
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
      <TextField id="filled-basic" label="Enter city" variant="filled" value={valueInput} onChange={handleChange} type="text"/>
    </Box>
  )
}