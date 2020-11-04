import React from 'react'

import {Link, navigate} from 'gatsby'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import {useSelector} from 'react-redux'
import {Signupinterface} from '../Interfaces/allinterface'
import {Signup} from '../Firebase/FirebaseAuth'

export default()=>{

const {register,handleSubmit,watch,errors} = useForm();

const datavalue:Signupinterface = useSelector<Signupinterface,Signupinterface>(state=>state);

   const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
      const handlesend= async (data)=>{






      try {
      const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
      })

      Toast.fire({
      icon: 'info',
      title: 'In Progress'
      })
      const fireuser = await Signup(data.email,data.password);


      if(fireuser!==null){
      Swal.fire('SignUp Successful!', '', 'success');



      }
      else{
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email Address Already Exits!',
      footer: '<span>Try to Login With same Email </span>'
      })

      }

      } catch (error) {

      if(error?.code==='auth/email-already-in-use')
      {
      Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email Address Already Exits!',
      footer: '<span>Try to Login With same Email </span>'
      })
      }

      }



      }






      return(

      <div>
         {Maindata.Signup.islogin ? (navigate('/')) : (

         <div className='container mt-5'>
            <div className='row'>
               <div className='col-md-5 mx-auto mt-2'>
                  <div id="second">
                     <div className="myform form ">
                       
                        <div className="logo mb-3">
                           <div className="col-md-12 text-center">
                              <h1>Signup</h1>
                           </div>
                        </div>
                        <form name="registration" onSubmit={handleSubmit(handlesend)}>

                           <div className="form-group">
                              <label>Email address</label>
                              <input type="email" ref={register({required:true})} name="email" className="form-control"
                                 id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                              {errors.email && errors.email.type ==='required' && (<h6> *This Field is Required</h6>)}
                           </div>
                           <div className="form-group">
                              <label>Password</label>
                              <input type="password" ref={register({required:true,minLength:8,maxLength:20})}
                                 name="password" id="password" className="form-control" aria-describedby="emailHelp"
                                 placeholder="Enter Password" />
                              {errors.password && errors.password.type ==='required' && (<h6> *This Field is Required
                              </h6>)}
                              {errors.password && errors.password.type ==='minLength' && (<h6> *At Least it should be 8
                                 characters</h6>)}
                              {errors.password && errors.password.type ==='maxLength' && (<h6> *Max Length allowed is 20
                              </h6>)}

                           </div>
                           <div className="col-md-12 text-center mb-3">
                              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For
                                 Free</button>
                           </div>
                           <div className="col-md-12 ">
                              <div className="form-group">
                                 <p className="text-center">
                                    < Link to='../Login'>Already have an account?</Link>
                                 </p>
                              </div>
                           </div>


                        </form>

                     </div>
                  </div>
               </div>
            </div>
         </div>

         )}
      </div>

      )
      }