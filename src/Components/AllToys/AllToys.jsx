import React, { useEffect, useState } from 'react';
import SingleToyData from './SingleToyData';
import Swal from 'sweetalert2';

const AllToys = () => {
    const [ToyData, setToyData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
        .then(res => res.json())
        .then(data => setToyData(data))
    }, [])

      const handleDelete=id=>{
      const pass = Swal.fire('Are You sure to delete');
      if(pass){
        fetch(`http://localhost:5000/allToys/${id}`,{
          method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.deletedCount>0){
           Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Deleted successfully',
  showConfirmButton: false,
  timer: 1500
})
            const remaining=ToyData.filter(aToyData=>aToyData._id!==id);
            setToyData(remaining);
          }
        })

      }
    }
   
    return (
        <div className='mx-4 px-1 py-10'>
           <h1 className='text-5xl text-center font-bold text-teal-800 my-10'>All toys</h1>
                   <div className="overflow-x-auto">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub Category</th> 
        <th>price</th> 
        <th>Available Quality</th> 
        <th> Details</th>
      </tr>
      
      
    </thead> 
    <tbody>

       {
        ToyData.map(singleToy=><SingleToyData key={singleToy._id} singleToy={singleToy} handleDelete={handleDelete}></SingleToyData>)
       }
    </tbody>
    

  </table>
</div>
        </div>
    );
};

export default AllToys;


