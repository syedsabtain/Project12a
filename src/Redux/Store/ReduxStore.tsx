
import {configureStore,combineReducers} from '@reduxjs/toolkit'
import ReduxSlice from '../Slicer/ReduxSlicer'
import Signupslice from '../Slicer/SignupSlicer'


const Reducercombine = combineReducers({
    data:ReduxSlice,
    Signup:Signupslice
})
 const  Store = configureStore({
    reducer:Reducercombine
});


export default Store