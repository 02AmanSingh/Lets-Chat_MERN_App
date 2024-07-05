import React from 'react'
import GenderChkbx from './GenderChkbx'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

        <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
          <span className='text-yellow-300'> Let's-Chat</span>
        </h1>

        <form>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base text-white label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base text-white label-text'>Password</span>
            </label>
            <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label'>
              <span className='text-base text-white label-text'>Confirm Password</span>
            </label>
            <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
          </div>
          
          <GenderChkbx />

          <a href="#" className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign UP</button>
          </div>

        </form>

      </div>

    </div>
  )
}

export default SignUp;

// Starter code for SignUp component
// import React from 'react'
// import GenderChkbx from './GenderChkbx'

// const SignUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>

//         <h1 className='text-3xl font-semibold text-center text-gray-300'>Sign Up
//           <span className='text-yellow-300'> Let's-Chat</span>
//         </h1>

//         <form>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='Enter fullname' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base text-white label-text'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter username' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base text-white label-text'>Password</span>
//             </label>
//             <input type="text" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label'>
//               <span className='text-base text-white label-text'>Confirm Password</span>
//             </label>
//             <input type="text" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
//           </div>
          
//           <GenderChkbx />

//           <a href="#" className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
//             Already have an account?
//           </a>

//           <div>
//             <button className='btn btn-block btn-sm mt-2 border-slate-700'>Sign UP</button>
//           </div>

//         </form>

//       </div>

//     </div>
//   )
// }

// export default SignUp