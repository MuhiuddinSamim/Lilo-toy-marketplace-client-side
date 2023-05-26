import React from 'react';
import { Link } from 'react-router-dom';

const SingleToyData = ({singleToy,index}) => {
    const {_id,seller_name,toy_name,sub_category,price,availability}=singleToy
    // console.log(_id)

  
    
    return (
          <tr>
        {/* <th><button onClick={()=>handleDelete(_id)} className='btn btn-warning'>Delete</button></th>  */}
        <th>{index+1}</th>
        <td>{seller_name}</td> 
        <td>{toy_name}</td> 
        <td>{sub_category}</td> 
        <td>{price}</td> 
        <td>{availability}</td> 
        <td> 
          <Link to={`/ToyDetails/${_id}`}><button className='btn btn-primary'>view details</button></Link>
          
        </td>
      </tr>
    );
};

export default SingleToyData;