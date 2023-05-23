import React from 'react';

const SingleToyData = ({singleToy}) => {
    const {seller_name,toy_name,sub_category,price,availability}=singleToy
    
    return (
          <tr>
        <th><button className='btn btn-warning'>Delete</button></th> 
        <td>{seller_name}</td> 
        <td>{toy_name}</td> 
        <td>{sub_category}</td> 
        <td>{price}</td> 
        <td>{availability}</td> 
        <td><button className='btn btn-primary'>view details</button></td>
      </tr>
    );
};

export default SingleToyData;