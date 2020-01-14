import { createReducer } from "@reduxjs/toolkit"

import { fetchUser, receiveUser, receiveError } from "./actions"

const initialState = {
    userData: {},
    isFetching: false,
    isError: false
}

const reducer = createReducer(initialState, {
    fetchUser: (state) => {
        state.isFetching = true
    },
    receiveUser: (state, action) => {
        state.userData = action.data,
        state.isFetching = false
    },
    receiveError: (state) => {
        state.isError = true
    }
})

