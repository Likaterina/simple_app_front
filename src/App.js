import React from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  thunkActionCreator,
  setUserLogin,
  setUserPassword,
  setUserEmail,
  submitUser,
  thunkLogin
} from "./components/actions"

function App() {
  const dispatch = useDispatch()

  const loginText = useSelector(state => state.loginText)
  const emailText = useSelector(state => state.emailText)
  const passwordText = useSelector(state => state.passwordText)

  return (
    <div className="container">
      <form className="form">
        <h2 className="title">Enter your data</h2>
        <input
          type="text"
          value={loginText}
          placeholder="Enter your login"
          required
        />
        <input
          type="text"
          value={emailText}
          placeholder="Enter your email"
          required
        />
        <input
          type="password"
          value={passwordText}
          placeholder="Enter your passsword"
          required
        />
        <button
          className="button"
          onClick={e => {
            e.preventDefault()
            dispatch(thunkLogin())
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
