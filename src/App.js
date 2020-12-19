import React, {useState} from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className="App">
      {console.log(username, password)}
      <form>
        <label >Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br/>
        <label >Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
