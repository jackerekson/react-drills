import React, {useState} from 'react';
import Todo from './components/todo';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("")
  const [arr, setArr] = useState([])
  const handleChange = (e) => {
    setUserInput(e.target.value)
}
  const handleClick = (e) => {
    setUserInput('')
    let list = [...arr]
    list.push(e)
    setArr(list)
  }

  return (
    <div className="App">
      <header className="App-header">
        <input value={userInput}onChange={handleChange} type="text" placeholder="Enter new task"></input>
        <button onClick={()=>handleClick(userInput)}>Add</button>
        <Todo arr={arr}/>
      </header>
    </div>
  );
}

export default App;
