import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

const initialState = {
    projects: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

export const getProjects = createAsyncThunk('auth/getAll', async (_, thunkAPI) =>{
    try {
        return await authService.getProjects()
    } catch (error) {
        const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
}) 

export const projectsSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers(builder){
        builder
        .addCase(getProjects.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProjects.fulfilled, (state, action) =>{
            state.isSuccess = true
            state.isLoading = false
            state.isError = false
            state.projects = action.payload
        })  
        .addCase(getProjects.rejected, (state, action) =>{
            state.isSuccess = false
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })  
    }
})

export const {reset} = projectsSlice.actions
export default projectsSlice.reducer