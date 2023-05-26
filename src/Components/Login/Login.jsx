import React, {  useContext, useState } from 'react';
import loginImg from '../../assets/Data_security_05.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthContext } from '../../Provider/AuthProviders';

const Login = () => {
  const {user,logIn}=useContext(AuthContext);
    const location=useLocation();
    const Navigate=useNavigate();
    const from=location.state?.from?.pathname || '/'

    // const [success,setSuccess]=useState('');
    // const[error,setError]=useState('');


       const handleLogIn=(event)=>{
        event.preventDefault();
      //   setError('');
      //  setSuccess('');
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)
        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
            setError('Minimum six characters, at least one letter, one number and one special character:');
            return;
        }
           logIn(email,password)
        .then((userCredential) => { 
         const LoggedUser = userCredential.user;
         console.log(LoggedUser)
           Swal.fire('Login completed!');
            form.reset();
            Navigate(from ,{replace:true})
      })
           .catch((error) => {
          const errorMessage = error.message;
           Swal.fire(errorMessage);
        });
        

    }




    return (
     <div className='md:flex'>
        <div className='md:w-1/2'>
            <img src={loginImg} alt="" />
        </div>
        <div className=' md:w-1/2'>
            <div className='py-36'>
                <h1 className='text-center text-primary text-3xl font-bold'>Log in</h1>
               <form onSubmit={handleLogIn} >
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" required className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' required placeholder="password" className="input input-bordered" />
          
        </div>
        
        <div className="form-control mx-auto mt-6">
          <button className="btn btn-primary w-24">Login</button>
        </div>
        <div className="text-grey-dark text-center mt-6">
            <p>   New to Lilo? 
            <Link to='/signUp' className="no-underline link-hover border-b text-xl text-violet-500 font-bold">
                 Sign up</Link>.</p>
                 {/* <p className='text-red-500'>{error}</p>
                 <p className='text-primary text-2xl'>{success}</p> */}
         
        </div>
      </div>

      </form>
            </div>
        </div>
     </div>
    );
};

export default Login;