import { createAction } from "@reduxjs/toolkit"

export const fetchUser = createAction("FETCH_USER")

export const receiveUser = createAction("RECEIVE_USER")

export const receiveError = createAction("RECEIVE_ERROR")

export const setUserLogin = createAction("SET_USER_LOGIN")

export const setUserPassword = createAction("SET_USER_PASSWORD")

export const setUserEmail = createAction("SET_USER_EMAIL")

export const submitUser = createAction("SUBMIT_USER")

export const thunkActionCreator = () => {
  return dispatch => {
    dispatch(fetchUser())
    fetch(`http://localhost:1488/auth/get-current-user`)
      .then(data => data.json())
      .then(data => {
        if (data.message === "Not Found") {
          console.log("error")
          throw new Error("No such user found!!")
        } else {
          console.log("Ok")
          dispatch(receiveUser(data))
        }
      })
      .catch(error => {
        console.log(error)
        dispatch(receiveError())
      })
  }
}

export const thunkLogin = () => {
  return dispatch => {
    fetch("http://localhost:1488/auth/register", {
      method: "POST",
      headers: {}
    })
      .then(data => data.json())
      .then(resp => {
        dispatch({
          payload: {
            username: resp.username,
            email: resp.email,
            userId: resp.id
          }
        })
      })
      .catch(error => console.error(error))
  }
}
