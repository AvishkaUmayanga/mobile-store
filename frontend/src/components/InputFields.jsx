import React from 'react'

export default function InputFields({labelName, inputType, name, onChangeName}) {
  return (
    <div>
      <div className='flex items-center justify-between my-8'>
        <label className='font-semibold '>{labelName}</label>
          <input type={inputType}  name={name} className=' w-[500px] border-2 h-10' required onChange={(e) => onChangeName(e.target.value)}/>
      </div>
    </div>
  )
}
