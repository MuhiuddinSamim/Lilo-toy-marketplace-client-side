import React, { useContext } from 'react';
import NabLogo from '../../src/assets/logo_white.png'
import l from '../assets/attachment_94636076 (1).jpeg'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProviders';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  console.log(user?.email)






const handlelogOut=()=>{
     logOut()
        .then(()=>{})
        .catch(error=>console.log(error))

  }




    return (
        <div className='md:mx-auto'>
             <div className="navbar bg-cyan-700 p-6">


        {/* navbar start */}
  <div className="navbar-start">
  {/* <div className=""> */}
    <div className="dropdown me-3">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <Link to='/'><img className='w-20' src={NabLogo} alt="" /></Link>
    
    
  </div>



  {/* navbar center */}
  <div className="navbar-center hidden lg:flex">
  {/* <div className=" hidden lg:flex"> */}
    <ul className="menu menu-horizontal px-1">
     <Link className='mx-4 text-xl link-hover font-semibold text-white' to='/'>Home</Link>
     <Link className='mx-4 text-xl font-semibold text-white' to='/allToys'>All-Toys</Link>
     <Link className='mx-4 text-xl font-semibold text-white' to='/'>My-Toys</Link>
     <Link className='mx-4 text-xl font-semibold text-white' to='/addToy'>Add-A-Toy</Link>
     <Link className='mx-4 text-xl font-semibold text-white' to='/blogs'>Blogs</Link>
    </ul>
  </div>


  {/* navbar end */}
  <div className="navbar-end">
  {/* <div className=""> */}
 {
  user ? 
    <div className="tooltip flex " data-tip={user.displayName}>
  <img src={user?.photoURL} className='w-8 mx-2  rounded-lg'  />
  <Link onClick={handlelogOut} to='/login' className="btn">Log Out</Link>
</div>
    :
    <Link to='/login' className="btn">Log in</Link>

 }
  

  </div>
</div>

        </div>

     
    );
};

export default Navbar;