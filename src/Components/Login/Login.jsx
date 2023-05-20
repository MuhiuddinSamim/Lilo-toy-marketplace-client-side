import React from 'react';
import loginImg from '../../assets/Data_security_05.jpg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
     <div className='md:flex'>
        <div className='md:w-1/2'>
            <img src={loginImg} alt="" />
        </div>
        <div className=' md:w-1/2'>
            <div className='py-36'>
                <h1 className='text-center text-primary text-3xl font-bold'>Log in</h1>
               <form >
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
            <p>  Already Have an Account? 
            <Link to='/signUp' className="no-underline link-hover border-b text-xl text-violet-500 font-bold">
                 Sign up</Link>.</p>
         
        </div>
      </div>

      </form>
            </div>
        </div>
     </div>
    );
};

export default Login;