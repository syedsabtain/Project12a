import firebase from 'gatsby-plugin-firebase'
import Swal from 'sweetalert2'

export const Signup = async(email:string,password:string)=>{
    const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
    return user
}

export const LoginUser = async (email:string,password:string) => {


        const user = await firebase.auth().signInWithEmailAndPassword(email, password).catch((error)=>{

            // window.alert(error+'eorfaceboasdf')
        })
       
    return user
   

}

export const Verification =async () => {
    const user:any = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      
    Swal.fire('Verification Email has Been Sent Kindly Verify Your Email!', '', 'success');
    }).catch(function(error) {
      
        // window.alert('Verification Error'+error.message)
    });
    
}
export const SignOut= async()=>{

    const user = await firebase.auth().signOut();

    
    return user;
}