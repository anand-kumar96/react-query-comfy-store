import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    user: null,
    };
const getLocalStorageUser = ()=>{
    return JSON.parse(localStorage.getItem('user')) || initialState;
}
const userSlice = createSlice({
    name:'user',
    initialState:getLocalStorageUser(),
    reducers:{
        loginUser:(state,action)=>{
            const userData = action.payload;
            const user = {...userData.user,jwt:userData.jwt}
            state.user = user;
            localStorage.setItem('user',JSON.stringify(state));
        },
        logoutUser:(state)=>{
            state.user = null;
            localStorage.removeItem('user');
            toast.success('Logged out successfully')
        },
       
    }
})
export const{loginUser,logoutUser} = userSlice.actions;
export default userSlice.reducer;