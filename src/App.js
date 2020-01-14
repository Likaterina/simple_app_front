import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { thunk_action_creator } from "./components/actions"

function App() {

  const dispatch = useDispatch()

  return (
    <div className="container">
    <form className="form">
      <h2 className="title">Enter your data</h2>
      <input
        type="text"
        //value={loginText}
        placeholder="Enter your login"
        required
      />
      <input
        type="text"
        //value={emailText}
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        //value={passwordText}
        placeholder="Enter your passsword"
        required
      />
      <button className="button" onClick={dispatch(thunk_action_creator())}>Submit</button>
    </form>
  </div>
  );
}

export default App;
