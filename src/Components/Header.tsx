import React from 'react'
import {Link} from '@reach/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Signupinterface } from '../Interfaces/allinterface'
import {SignOut} from '../Firebase/FirebaseAuth'
import { updateSignup } from '../Redux/Slicer/SignupSlicer'
import Swal from 'sweetalert2'
export default()=>{

  const Maindata = useSelector<Signupinterface,Signupinterface>(state=>state)
  const dispatch = useDispatch()
  const HandleSignout =async ()=>{

    try {
      const user =  await SignOut()
      console.log(user,'signout')
      if(user===undefined){
        dispatch(updateSignup({
          username:'',
          islogin:false,
          token:'',
          verified:''
        }))
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
          title: 'Signed Out in successfully'
        })
      }
    } catch (error) {
      
    }
  }
    return(
        <div>
          {Maindata.Signup.islogin ? (
            <div className="container">
            <header className="blog-header py-3">
              <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                  <Link className="text-muted" to='/'>Home</Link>
                </div>
                <div className="col-4 text-center">
                  <a className="blog-header-logo text-dark" href="#">SHAH BLOGPOST</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                  {/* <a className="text-muted" href="#" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                  </a> */}
                  <Link className="btn btn-sm btn-outline-secondary" to='../Profile/ '>Profile</Link>
                  <button className='btn btn-sm btn-outline-secondary' onClick={HandleSignout}>SignOut</button>
                  
                </div>
              </div>
            </header>
          
            <div className="nav-scroller py-1 mb-2">
              <nav className="nav d-flex justify-content-between">
                <a className="p-2 text-muted" href="#">World</a>
                <a className="p-2 text-muted" href="#">U.S.</a>
                <a className="p-2 text-muted" href="#">Technology</a>
                <a className="p-2 text-muted" href="#">Design</a>
                <a className="p-2 text-muted" href="#">Culture</a>
                <a className="p-2 text-muted" href="#">Business</a>
                <a className="p-2 text-muted" href="#">Politics</a>
                <a className="p-2 text-muted" href="#">Opinion</a>
                <a className="p-2 text-muted" href="#">Science</a>
                <a className="p-2 text-muted" href="#">Health</a>
                <a className="p-2 text-muted" href="#">Style</a>
                <a className="p-2 text-muted" href="#">Travel</a>
              </nav>
            </div>
          
            
          </div>
          ) : (
            <div className="container">
            <header className="blog-header py-3">
              <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                  <Link className="text-muted" to='/'>Home</Link>
                </div>
                <div className="col-4 text-center">
                  <a className="blog-header-logo text-dark" href="#">SHAH BLOGPOST</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                  {/* <a className="text-muted" href="#" aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24" focusable="false"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                  </a> */}
                  <Link className="btn btn-sm btn-outline-secondary" to='../Signup/ '>Sign up</Link>
                  < Link className='btn btn-sm btn-outline-secondary' to='/Login'>Login</Link>
                </div>
              </div>
            </header>
          
            <div className="nav-scroller py-1 mb-2">
              <nav className="nav d-flex justify-content-between">
                <a className="p-2 text-muted" href="#">World</a>
                <a className="p-2 text-muted" href="#">U.S.</a>
                <a className="p-2 text-muted" href="#">Technology</a>
                <a className="p-2 text-muted" href="#">Design</a>
                <a className="p-2 text-muted" href="#">Culture</a>
                <a className="p-2 text-muted" href="#">Business</a>
                <a className="p-2 text-muted" href="#">Politics</a>
                <a className="p-2 text-muted" href="#">Opinion</a>
                <a className="p-2 text-muted" href="#">Science</a>
                <a className="p-2 text-muted" href="#">Health</a>
                <a className="p-2 text-muted" href="#">Style</a>
                <a className="p-2 text-muted" href="#">Travel</a>
              </nav>
            </div>
          
            
          </div>
          )}
        </div>
    )
}