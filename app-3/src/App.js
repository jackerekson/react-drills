import React, {useState} from 'react';
import List from './components/input';
import './App.css';

function App() {
  const [arr] = useState(['brown','chicken','brown','cow'])
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
}

  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleChange} type="text" /> 
        <List user={userInput} />
      </header>
    </div>
  );
}

export default App;
