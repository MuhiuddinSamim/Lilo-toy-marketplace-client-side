import React from 'react';

const SingleMyToy = ({myToy,index,handleDelete }) => {
    console.log(myToy);
    const {_id,toy_name,price,availability,details}=myToy;
      const onDelete = () => {
    handleDelete(_id);
  };
    return (
         <tr>
        <th>{index+1}</th>
        <td>{toy_name}</td>
        <td>{price}</td>
        <td>{availability}</td>
        <td><button className='btn btn-primary'>Edit</button></td>
        <td>
             <button onClick={onDelete}  className="btn btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </td>
        <td>{details}</td>
       

      </tr> 
    );
};

export default SingleMyToy;