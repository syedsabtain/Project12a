import React from 'react'

import {createSlice} from '@reduxjs/toolkit'
import {graphql} from 'gatsby'
// import {data} from '../../Data/grahpdata'


let inistial:any = 1

// let data1 = data;
//  setInterval(()=>{
//     console.log(data1,'facebook')
//     console.log(data,'fadata')
//  },3000)


export const ReduxSlice = createSlice({
    name:'Data',
    initialState:inistial,
    reducers:{
        getvalue:(state,action)=>{
            //  state = action.payload
             return action.payload
        }
    }
})
export const {getvalue} = ReduxSlice.actions
export default ReduxSlice.reducer