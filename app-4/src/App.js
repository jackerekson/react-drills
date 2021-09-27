import React, {useState} from 'react';
import Alert from './components/input';
import './App.css';

function App() {
  const [userName, setUserName] = useState("")
  const [userPass, setUserPass] = useState("")

  const handleSubmit = (e) => {
    setUserName(e.target.value)
    console.log(e.target.value)
}

  const handle2Submit = (e) => {
    setUserPass(e.target.value)
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={handleSubmit} type="text" placeholder="User"/>
        <input onChange={handle2Submit} type="text" placeholder="Password"/>
        
          <Alert user={userName} password={userPass}/>
      </header>
    </div>
  );
}

export default App;
