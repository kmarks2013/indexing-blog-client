import React, {useState} from 'react'


function App() {
  const [username, setUsername] = useState('')

  return (
    <div className="App">
      <form>
        <label >Username: </label>
        <input type="text" />
      </form>
    </div>
  );
}

export default App;
