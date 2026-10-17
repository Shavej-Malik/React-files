import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./Slices/CounterSlice"
import themeReducer from "./Slices/ThemeSlice"

export const store = configureStore({
//here we created two Slice(Shop) then we have to tell Store(mall) that we have these Slice(shop) in reducers 
    reducer:{
        Counter:counterReducer,
        Theme:themeReducer
    }
})