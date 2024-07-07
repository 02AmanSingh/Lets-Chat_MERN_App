import React from 'react'

const GenderChkbx = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className='flex'>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? "selected": '' }`}>
                <span className='label-text text-white'>Male</span>
                <input type="checkbox" className='checkbox border-slate-900' checked={selectedGender === 'male'} onChange={()=>onCheckboxChange('male')} />
            </label>
        </div>

        <div className='from-control'>
        <label className={`label gap-2  cursor-pointer pl-3 ${selectedGender === 'female' ? "selected": '' } `}>
                <span className='label-text text-white'>Female</span>
                <input type="checkbox" className='checkbox border-slate-900' checked={selectedGender === 'female'} onChange={()=> onCheckboxChange('female')} />
            </label>
        </div>

    </div>
  )
}

export default GenderChkbx;

// Starter code for GenderChkbx
// import React from 'react'

// const GenderChkbx = () => {
//   return (
//     <div className='flex'>

//         <div className='form-control'>
//             <label className={`label gap-2 cursor-pointer`}>
//                 <span className='label-text text-white'>Male</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>

//         <div className='from-control'>
//         <label className={`label gap-2  cursor-pointer pl-3`}>
//                 <span className='label-text text-white'>Female</span>
//                 <input type="checkbox" className='checkbox border-slate-900' />
//             </label>
//         </div>

//     </div>
//   )
// }

// export default GenderChkbx;