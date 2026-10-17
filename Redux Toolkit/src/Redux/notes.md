import { configureStore } from "@reduxjs/toolkit"
export const store = configureStore() [This is store like a mall. That is we created. Here all things present and we can use anywhere when need because we exported this(store)]

//Here we crete a counterSlice(mean a shop in store(mall))
import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
    name:"Counter", //This is the name of shop
    initialState:{
        value:0
    },
    reducers:{
        
    }
})

In main.jsx -> <Provider store={store}> // Provider add when use redux
                    <App />
               </Provider> //Now Store available in whole application