import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProviders';
import SingleMyToy from './singleMyToy';
import Swal from 'sweetalert2';


const MyToys = () => {
    const {user}=useContext(AuthContext)
    const [myToys,setMyToys]=useState([])
    // console.log(user);


useEffect(()=>{
    fetch(`https://lilo-server-muhiuddinsamim.vercel.app/myToys/${user?.email}`)
    // fetch(`http://localhost:5000//myToys/${user?.email}`)
    .then((result)=>result.json())
    .then((data)=>{
        setMyToys(data);
    });
},[user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this toy!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://lilo-server-muhiuddinsamim.vercel.app/deleteToy/${id}`, {
          method: 'DELETE',
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.message === 'Toy deleted successfully!') {
              Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
              // Refresh the toy list
              fetch(`http://localhost:5000/myToys/${user?.email}`)
                .then((result) => result.json())
                .then((data) => {
                  if(data.deletedCount > 0){
                    const remainig=myToys.filter(myToy=> myToy._id !== id);
                    setMyToys(remainig);
                  }
                  

                });
            } else {
              Swal.fire('Error!', 'Failed to delete the toy.', 'error');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            Swal.fire('Error!', 'Failed to delete the toy.', 'error');
          });
      }
    });
  };




   


    return (
      <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head*/}
    <thead>
      <tr>
        <th>No.</th>
        <th>Toy Name</th>
        <th>Price</th>
        <th>Available Quantity</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
   
      {
        myToys.map((myToy,index)=><SingleMyToy key={myToy._id} index={index} myToy={myToy} handleDelete={handleDelete}></SingleMyToy>)
      }
     
   
    </tbody>
  </table>
</div>
     
    )
};

export default MyToys;