import React from 'react'
import Layout from '../templates/Layout'
import {Router} from '@reach/router'
import Logincomp from '../Components/Logincomp'
import Signupcomp from '../Components/Signupcomp'
import Optioncomp from '../Components/Optioncomp'

export default()=>{
    return(
        <Layout>
            <Router basepath='/Option'>
                <Logincomp path='/Login'></Logincomp>
                <Signupcomp path='/Signup'></Signupcomp>
                <Optioncomp path='/'></Optioncomp>
            </Router>
        </Layout>
    )
}