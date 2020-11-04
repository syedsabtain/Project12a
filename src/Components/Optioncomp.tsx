import React from 'react'
import {Link, navigate} from 'gatsby'
import { useSelector } from 'react-redux'
import { Signupinterface } from '../Interfaces/allinterface'


export default()=>{

const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
    if(typeof window !== `undefined`){
    return(
    <>{Maindata.Signup.islogin ? (navigate('/')):(

        <div className="card card-cascade wider reverse">


            <div className="view view-cascade ">
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                    alt="Card image cap" />
                <a href="#!">
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            <div className='  row d-flex justify-content-center card-img-overlay'>
                <div className='col-md-6 my-auto'>

                    <div className="card-body card-body-cascade text-center  cardbg shadow-lg rounded">


                        <h4 className="card-title"><strong>Blog Site</strong></h4>

                        <h6 className="font-weight-bold indigo-text py-2"></h6>

                        <div className="card-text">
                            <h5>Already Have an Account Click
                                <Link to='/Option/Login' className=''> Here</Link>
                            </h5>
                            <hr />
                            <h5>Don't Have an Account Click
                                <Link to='/Option/Signup' className=''> Here</Link>
                            </h5>
                        </div>


                        <a className="px-2 fa-lg li-ic"><i className="fab fa-linkedin-in"></i></a>

                        <a className="px-2 fa-lg tw-ic"><i className="fab fa-twitter"></i></a>

                        <a className="px-2 fa-lg fb-ic"><i className="fab fa-facebook-f"></i></a>

                    </div>
                </div>
            </div>

        </div>


        )}</>


    )
    }
    else{
    return(
    <div></div>
    )
    }
    }