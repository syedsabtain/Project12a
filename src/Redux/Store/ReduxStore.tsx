
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import Signupslice from '../Slicer/SignupSlicer'

const Reduxer={
    Signup:Signupslice
}
 const  Store = configureStore({
    reducer:Reduxer
});


export default Store