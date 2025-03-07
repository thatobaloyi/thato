import { configureStore } from "@reduxjs/toolkit";
import projectsSliceReducer from '../services/authSlice'


const store = configureStore({
    reducer: {
        auth: projectsSliceReducer
    }
}) 

export default store