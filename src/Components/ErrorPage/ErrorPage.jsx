// import React from 'react'
// import { Link, useRouteError } from 'react-router-dom'
// import second from '../../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif'

// const ErrorPage = () => {
//   const { error, status } = useRouteError()
//   return (
//     <section style={{ backgroundImage: `url(${second})`}} className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
//       <div  className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
//         {/* <img src={second} alt="" /> */}
//         <div className='max-w-md text-center'>
//           <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
//             <span className='sr-only'>Error</span>
//             {status || 404}
//           </h2>
//           <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
//             {error?.message}
//           </p>
//           <Link to='/' className='btn'>
//             Back to homepage
//           </Link>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ErrorPage
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import second from '../../assets/oops-404-error-with-broken-robot-concept-illustration_114360-5529.avif';

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section
      style={{ backgroundImage: `url(${second})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain' }} className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <div className='max-w-md text-center'>
          {/* <h2 className='mb-8 font-extrabold text-9xl text-black'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2> */}
          {/* <p className='text-3xl font-bold md:text-3xl text-red-700  mb-8'>
            {error?.message}
          </p> */}
          <Link to='/' className='btn btn-primary'>
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
