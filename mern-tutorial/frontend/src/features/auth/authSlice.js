//has a login, logout, and clear local storage
import{createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService"

//get user from local storage
const user= JSON.parse(localStorage.getItem("user"))
const initialState = {
    user: null ? user : null,
    //if we get an error back to that server, we can make it true
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//Register user
//async thunk function
export const register = createAsyncThunk(
    "auth/register", async (user, thunkAPI) =>
    {
    try{
        return await authService.register(user)
    } catch (error) {
        const message = (
            error.response && 
            error.response.data && 
            error.response.data.message)
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
    }
})
//create slice
export const authSlice= createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        //these are not going to be async, not thunk functions
        //reset = reset state to the default values
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ""
        }
    },
    //this is a thunk/async function
    extraReducers: (builder) => {
        builder
            //what is going to happen when the register is pending
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {//action means getting user info back like token
                //what is going on when the register is fufilled and there's data coming back
                state.isLoading = false//reset back to false
                state.isSuccess = true
                state.user = action.payload
            })//what happens when the register is rejected
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                //a message will be passed if rejected ref. line 30
                state.message = action.payload
                state.user = null
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer

