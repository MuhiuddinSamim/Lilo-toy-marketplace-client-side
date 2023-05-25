import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const  Details=useLoaderData()
    console.log(Details)
    const {details,photo_url,price,rating,seller_name,toy_name}=Details;
    return (
//         <div className="card card-side bg-base-100 shadow-xl">
//   <figure><img className='w-' src={photo_url} alt={toy_name}/></figure>
//   <div className="card-body">
//     <h2 className="card-title">{toy_name}</h2>
//     <p>{seller_name}</p>
//     <p>${price}</p>
//     <p>{details}</p>
//     <p>{rating}</p>
//   </div>
// </div>
<div className="card lg:card-side bg-orange-100 shadow-2xl m-20 ">
    <div className='w-1/2'>

  <figure><img className='' src={photo_url} alt="Album"/></figure>
    </div>
  <div className=" w-1/2 px-10 py-20">
    <h2 className="font-bold text-4xl">{toy_name}</h2>
     <p className='text-2xl'>Seller:{seller_name}</p>
     <p className='text-xl'> Price:${price}</p>
     <p>Rating:{rating}</p>     <p>{details}</p>
  </div>
</div>
    );
};

export default ToyDetails;