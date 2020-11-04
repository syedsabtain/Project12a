import { navigate } from 'gatsby'
import React from 'react'
import { useSelector } from 'react-redux'
import { Signupinterface } from '../Interfaces/allinterface'
import Layout from '../templates/Layout'
import {Verification} from '../Firebase/FirebaseAuth'

export default()=>{
const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
    const HandleVerification=()=>{
    try {
    Verification()
    } catch (error) {

    }
    }
    if(Maindata.Signup.islogin){
    return(
    <Layout>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-5 mx-auto mt-5">
                    <div id="first">
                        <div className="myform form ">
                            <div className="logo mb-3">
                                <div className="col-md-12 text-center">
                                    <h1>Profile</h1>
                                    <hr />
                                    <h4>Email : {Maindata.Signup.username}</h4>
                                    <h4>Verified : {Maindata.Signup.verified ? ('Verified'):('Still UnVerified')}</h4>
                                    {Maindata.Signup.verified ? (null) : (<button className='btn btn-outline-danger'
                                        onClick={HandleVerification}>Verify Email</button>)}
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Layout>
    )
    }
    else {
    if(typeof window !== `undefined`){
    return(
    <div>{Maindata.Signup.islogin ? (null):(navigate('/'))}</div>
    )
    }
    else{
    return(
    <div></div>
    )
    }
    }
    }