import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value:0
    },
    reducers:{// Which all are things present in this, called "actions"
        increment:(state)=> {
            state.value +=1;
        },
        decrement:(state)=> {
            state.value -=1;
        },
    }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer