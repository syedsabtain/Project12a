import {createSlice} from '@reduxjs/toolkit'



const initialstate ={

    username:'',
    islogin:false,
    token:'',
    verified:'',
    
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