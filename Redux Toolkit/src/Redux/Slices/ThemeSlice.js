import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "Theme",
    initialState:{
        value:"light"
    },
    reducers:{
        chnageThemeToLight: (state)=>{
            state.value = "light"
        },
        chnageThemeToDark: (state)=>{
            state.value = "Dark"
        },
    }
})
export const { chnageThemeToLight, chnageThemeToDark } = themeSlice.actions
export default themeSlice.reducer