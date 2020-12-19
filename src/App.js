import React, {useState} from 'react'


function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')



  return (
    <div className="App">
      <form>
        <label >Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
