import { createAction } from "@reduxjs/toolkit";
import store from "./store"

export const fetchUser =
    createAction("FETCH_USER")

export const receiveUser =
    createAction("RECEIVE_USER")

export const receiveError =
    createAction("RECEIVE_ERROR")


export const thunk_action_creator = () => {
    store.dispatch(fetchUser())
    return function (dispatch, getState) {
        return fetch('http//localhost:3228/auth/get-current-user')
            .then(data => data.json())
            .catch(error => dispatch(receiveError()))
    }
}