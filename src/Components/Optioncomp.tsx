import React from 'react'
import {Link, navigate} from 'gatsby'
import { useSelector } from 'react-redux'
import { Signupinterface } from '../Interfaces/allinterface'


export default()=>{

const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
    if(typeof window !== `undefined`){
    return(
    <>{Maindata.Signup.islogin ? (navigate('/')):(

        <div className='container mb-5'>
            <div className="card  mb-5">


<div className="view  ">
    <img className="card-img" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
        alt="Card image cap" />
    <a href="#!">
        <div className="mask rgba-white-slight"></div>
    </a>
</div>

        <div className="card-body  text-center card-img-overlay  cardbg shadow-lg rounded">


            <h4 className="card-title txt1">Blog Site</h4>

            <h6 className="font-weight-bold indigo-text py-2"></h6>

            <div className="card-text ">
                <h5 className='txt2'>Already Have an Account Click
                    <Link to='/Option/Login' className=''> Here</Link>
                </h5>
                <br />
                <h5 className='txt2'>Don't Have an Account Click
                    <Link to='/Option/Signup' className=''> Here</Link>
                </h5>
            </div>


            

        </div>
    </div>
    <hr className='mb-5 mt-5'/>
    <br/>
    
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