import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/2942004.jpg'


const SignUp = () => {
    return (
        <div className='md:flex p-5'>
       
        <div className=' md:w-1/2'>
            <div className='py-20'>
                <h1 className='text-center text-primary text-3xl font-bold'>Sign Up Now</h1>
               <form >
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="email" required className="input input-bordered" />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" name='photo' placeholder="email" required className="input input-bordered" />
        </div>
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
          <button className="btn btn-primary w-24">Sign up</button>
        </div>
        <div className="text-grey-dark text-center mt-6">
            <p>  New to Lilo? 
            <Link to='/login' className="no-underline link-hover border-b text-xl text-violet-500 font-bold">
                 Log In</Link>.</p>
         
        </div>
      </div>

      </form>
            </div>
        </div>
         <div className='md:w-1/2'>
            <img src={loginImg} alt="" />
        </div>
     </div>
    );
};

export default SignUp;