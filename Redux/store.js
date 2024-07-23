import { configureStore } from "@reduxjs/toolkit";
import favReducer from "./Slices/favSlice";
import counterReducer from "./Slices/counterSlice";
import APIGetReducer from "./Slices/movieSlice"

const Store =configureStore({
    reducer:{
        favorites:favReducer,
        counter: counterReducer,
        APIGet: APIGetReducer,
    }
})

export default Store;