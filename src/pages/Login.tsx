import React from 'react'

import Layout from '../templates/Layout';
import {Link, navigate} from 'gatsby'
import {useDispatch, useSelector} from 'react-redux'
import {updateSignup} from '../Redux/Slicer/SignupSlicer'
import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import {Signupinterface} from '../Interfaces/allinterface'
import {LoginUser,Verification} from '../Firebase/FirebaseAuth'
import firebase from 'gatsby-plugin-firebase'
export default()=>{
    
   const dispatch = useDispatch();
   const {register,watch,errors,handleSubmit} = useForm()
   const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
   const user:any = firebase.auth().currentUser;
   const HandleSub=async (data) => {
      
      
    
            const fireuser:any = await LoginUser(data.email,data.password)
      
         if(fireuser!==null)  {
          
         const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
          dispatch(updateSignup({
            username:fireuser?.user?.email,
            islogin:true,
            token:'',
            verified:fireuser?.user?.emailVerified
          }))
         
      }
      else{
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Incorrect Password or UserName!',
            footer: '<span>Check for spelling Mistake and Try Again</span>'
          })
      }
        
   }
   
   
    return(
    
        <div>
           {Maindata.Signup.islogin ? (navigate('/')) : (
              <Layout>
              <div className="container mt-5">
          <div className="row">
           <div className="col-md-5 mx-auto mt-5">
           <div id="first">
              <div className="myform form ">
                  <div className="logo mb-3">
                     <div className="col-md-12 text-center">
                       <h1>Login</h1>
                     </div>
                 </div>
                     <form onSubmit={handleSubmit(HandleSub)} >
                             <div className="form-group">
                                <label >Email address / Username</label>
                                <input type="text" ref={register({required:true})} name="email"  className="form-control" id="email"  placeholder="Enter email/Username"/>
                                {errors.email && errors.email.type==='required' && (<h6> *This Field is Required</h6>)}
                             </div>
                             <div className="form-group">
                                <label >Password</label>
                                <input type="password" name="password" ref={register({required:true,minLength:8,maxLength:20})} id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password"/>
                                {errors.password && errors.password.type ==='required' && (<h6> *This Field is Required</h6>)}
                                {errors.password && errors.password.type ==='minLength' && (<h6> *At Least it should be  8 characters</h6>)}
                                {errors.password && errors.password.type ==='maxLength' && (<h6> *Max Length allowed is 20</h6>)}
                             </div>
                             <div className="form-group">
                                <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                             </div>
                             <div className="col-md-12 text-center ">
                                <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                             </div>
                             <div className="col-md-12 ">
                                <div className="login-or text-center">
                                   <hr className="hr-or"/>
                                   <span className="span-or ">or</span>
                                </div>
                             </div>
                             <div className="col-md-12 mb-3">
                                
                             </div>
                             <div className="form-group">
                                <p className="text-center">Don't have account? <Link to="../Signup">Sign up here</Link></p>
                             </div>
                          </form>
                   
              </div>
           </div>
             
        </div>
        </div>   
   </div>       
          </Layout>
           )}
        </div>
    )
}