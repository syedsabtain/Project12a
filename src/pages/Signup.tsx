import React from 'react'
import Layout from '../templates/Layout'
import {Link, navigate} from 'gatsby'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import {useSelector,useDispatch} from 'react-redux'
import {Signupinterface} from '../Interfaces/allinterface'
import {Signup} from '../Firebase/FirebaseAuth'

export default()=>{

   const {register,handleSubmit,watch,errors} = useForm();

   const datavalue:Signupinterface = useSelector<Signupinterface,Signupinterface>(state=>state);
   
   const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
   const handlesend= async (data)=>{
      
    
    
      
     
      
      try {
         const fireuser = await Signup(data.email,data.password);
         
      
         if(fireuser!==null){
         Swal.fire('SignUp Successful!', '', 'success');
         
         
         // dispatch(updateSignup({
         //    signupComplete:true
         //  }));
       
         
      }
      else{
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Email Address Already Exits!',
            footer: '<span>Try to Login With same Email  </span>'
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
                <Layout>
                <div  className='container mt-5'>
                <div className='row'>
                    <div className='col-md-5 mx-auto mt-2'>
                    <div id="second">
                   <div className="myform form ">
                      {/* <button className='btn btn-outline-danger' onClick={handleclick}>LOgin</button> */}
                            <div className="logo mb-3">
                               <div className="col-md-12 text-center">
                                  <h1 >Signup</h1>
                               </div>
                            </div>
                            <form  name="registration" onSubmit={handleSubmit(handlesend)}>
                               {/* <div className="form-group">
                                  <label >UserName</label>
                                  <input type="text" ref={register({required:true,minLength:4,maxLength:8})}  name="UserName" className="form-control" id="UserName" aria-describedby="emailHelp" placeholder="Enter UserName" />
                                  {errors.UserName &&  errors.UserName.type === 'required' && (<h6> *This Field is Required</h6>)}
                                  {errors.UserName && errors.UserName.type ==='minLength' && (<h6> *Min length Should be 4</h6>)}
                                  {errors.UserName && errors.UserName.type ==='maxLength' && (<h6> *Max Length allowed is 8</h6>)}
                               </div>
                               <div className="form-group">
                                  <label > Name</label>
                                  <input type="text"  ref={register({required:true,minLength:3,maxLength:20})} name="name" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Name" />
                                  {errors.name && errors.name.type ==='required' && (<h6> *This Field is Required</h6>)}
                                  {errors.name && errors.name.type ==='minLength' && (<h6> *Min Length allowed is 3</h6>)}
                                  {errors.name && errors.name.type ==='maxLength' && (<h6> *Max Length allowed is 20</h6>)}
                               </div> */}
                               <div className="form-group">
                                  <label >Email address</label>
                                  <input type="email" ref={register({required:true})} name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                  {errors.email && errors.email.type ==='required' && (<h6> *This Field is Required</h6>)}
                               </div>
                               <div className="form-group">
                                  <label >Password</label>
                                  <input type="password" ref={register({required:true,minLength:8,maxLength:20})} name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                  {errors.password && errors.password.type ==='required' && (<h6> *This Field is Required</h6>)}
                                  {errors.password && errors.password.type ==='minLength' && (<h6> *At Least it should be  8 characters</h6>)}
                                  {errors.password && errors.password.type ==='maxLength' && (<h6> *Max Length allowed is 20</h6>)}
                                  
                               </div>
                               <div className="col-md-12 text-center mb-3">
                                  <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                               </div>
                               <div className="col-md-12 ">
                                  <div className="form-group">
                                     <p className="text-center">< Link to='/Login'>Already have an account?</Link></p>
                                  </div>
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