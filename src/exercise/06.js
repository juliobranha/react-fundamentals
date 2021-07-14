// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useRef, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const [error, setError] = useState(null);
  const [name, setName] = useState(''); 

  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    //onSubmitUsername(nameRef.current.value); Extra credit 2
    onSubmitUsername(name);
  };

  const handleChange = (e) => {
    // const {value} = e.target; Extra credit 2
    // const isValid = value === value.toLowerCase();
    // setError(isValid ? null : 'Username must be lower case');
    setName(e.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htm>Username:</label>
        <input 
          id="usernameInput" 
          type="text" 
          ref={nameRef} 
          onChange={handleChange} 
          />
      </div>
      <div role="alert" style={{color: 'orange'}}>
        {error}
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
