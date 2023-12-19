import React from 'react'
import { NavLink } from 'react-router-dom'

function LatestMobile({image, pName, price}) {
  
  return (
    <div>
      <NavLink to={`/mobile_details/${pName}`}>
        <div className=' shadow-lg w-[280px] h-[400px] p-4 max-sm:p-1 flex flex-col items-center text-center max-xl:w-[250px] max-xl:h-[350px] max-sm:w-[150px] max-sm:h-[240px] rounded-lg  hover:scale-110'>
          <img src={image} alt='pixel' className='h-[280px] max-sm:h-[230px]'/>
          <div className='flex justify-center w-[180px] items-center max-sm:w-[150px] max-xs:w-[135px]'>
            <div>
              <h3 className='text-lg font-semibold max-sm:text-sm'>{pName}</h3>
              <h4 className='text-lg font-semibold text-blue-500 max-sm:text-sm'>Rs.{price}</h4>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  )
}

export default LatestMobile