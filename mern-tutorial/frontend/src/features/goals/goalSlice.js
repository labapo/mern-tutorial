import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    goals: [],
    isError: false, 
    isSuccess: false, 
    isLoading: false,
    message: ""
}

export const goalSlice = createSlice ({
    name: 'goal',
    initialState,
    reducers: {
        reset: (state) => initialState//set back to initial state so you can have an empty array of goals
    }
})

export const {reset} = goalSlice.actions
export default goalSlice.reducer