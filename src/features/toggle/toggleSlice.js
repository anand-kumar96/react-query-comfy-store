import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    theme: 'dim',
    layout:'grid'
}
const getLocalStorageToggle = ()=>{
    const toggleState = JSON.parse(localStorage.getItem('toggle')) || initialState;
    document.documentElement.setAttribute('data-theme',toggleState.theme);
    return toggleState;
}
const toggleSlice = createSlice({
    name:'toggle',
    initialState:getLocalStorageToggle(),
    reducers: {
        toggleTheme:(state)=>{
            if(state.theme === 'dim') {
                state.theme = 'winter';
                toast.success('Light mode enabled')
            } else {
                state.theme = 'dim'
                toast.success('Dark mode enabled')
            }
            localStorage.setItem('toggle',JSON.stringify(state));
            document.documentElement.setAttribute('data-theme',state.theme);
        },
        toggleLayout:(state)=>{
            if(state.layout === 'grid') {
                state.layout = 'list';
            } else {
                state.layout = 'grid'
            }  
            localStorage.setItem('toggle',JSON.stringify(state));
            document.documentElement.setAttribute('data-theme',state.theme);
        },
    }
})

export const {toggleTheme,toggleLayout} = toggleSlice.actions;;
export default toggleSlice.reducer;