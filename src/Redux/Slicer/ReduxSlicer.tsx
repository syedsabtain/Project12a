

import {createSlice} from '@reduxjs/toolkit'



let inistial:any = 1




 const ReduxSlice = createSlice({
    name:'Data',
    initialState:inistial,
    reducers:{
        getvalue:(state,action)=>{
            
             return action.payload
        }
    }
})
export const {getvalue} = ReduxSlice.actions
export default ReduxSlice.reducer