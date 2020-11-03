import React from 'react'

import {Provider} from 'react-redux'
import Mainstore from './src/Redux/Store/ReduxStore'
export default({element})=>{


return <Provider store={Mainstore}>{element}</Provider>
}