import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../assets/2942004.jpg'
import { AuthContext } from '../../Provider/AuthProviders';
import google from '../../assets/google-signin-button.png'

const SignUp = () => {
  const {createUser,signInGoogle}=useContext(AuthContext)

    const [success,setSuccess]=useState('');
    const[error,setError]=useState('');


    const handleSignUp=(event)=>{
        event.preventDefault();
        setError('');
       setSuccess('');
        const form=event.target;
        const name=form.name.value;
        const photo=form.photo.value;
        const email=form.email.value;
        const password=form.password.value;
        if(!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(password)){
            setError('Minimum six characters, at least one letter, one number and one special character in password');
            return;
        }
        console.log(name,photo,email,password)
       createUser(email,password)
       .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          setSuccess('Congratulation')
          form.reset();
        })
        .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorMessage)
      });

    }

    const logInWithGoogle=()=>{
      signInGoogle()
      .then((result) => {
       const user = result.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
      // console.log('hello')
     }








    return (
        <div className='md:flex p-5'>
       
        <div className=' md:w-1/2'>
            <div className='py-20'>
                <h1 className='text-center text-primary text-3xl font-bold'>Sign Up Now</h1>
               <form  onSubmit={handleSignUp}>
          <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="photo" name='photo' placeholder="Photo" required className="input input-bordered" />
        </div>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" required className="input input-bordered" />
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
        <div className="divider">OR</div>
        <div onClick={logInWithGoogle} className='mx-auto' ><img className='w-72' src={google} alt="" /></div>

        <div className="text-grey-dark text-center mt-6">
            <p>Already Have an Account?  
            <Link to='/login' className="no-underline link-hover border-b text-xl text-violet-500 font-bold">
                 Log In</Link>.</p>
                  <p className='text-red-500'>{error}</p>
                 <p className='text-primary text-2xl'>{success}</p>
         
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