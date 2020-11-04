import {createSlice} from '@reduxjs/toolkit'


interface initial{
    username:String,
    islogin:boolean,
    token:String,
    verified:boolean,
}
const initialstate:initial ={

    username:'Nothing',
    islogin:false,
    token:'Nothing',
    verified:false,
    
}

const Signupslice =createSlice({
    name: 'signup',
    initialState:initialstate,
    reducers:{
        updateSignup:(state,action)=>{

            return action.payload
        }
    }
})


export const {updateSignup} = Signupslice.actions
export default Signupslice.reducer