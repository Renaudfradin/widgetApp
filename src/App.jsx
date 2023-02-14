import List from './components/List/List.jsx'
import SearchBox from './components/SearchBox/SearchBox.jsx'
import { Context } from './context/context.jsx'
import './App.css'
import { useState } from 'react'

export default function App() {
  const [valueInput, setvalueInput] = useState("lyon");
  const city = valueInput;
  console.log("value app",valueInput);
  console.log("city",city);
  return (
    <Context.Provider value={{city,setvalueInput}}>
      <div className="App">
        <SearchBox valueInput={valueInput} setvalueInput={setvalueInput}></SearchBox>
        <List></List>
      </div>
    </Context.Provider>
  )
}
