import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import LatestMobile from '../components/LatestMobile'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function MobilePhones() {
  const {category} = useParams()
  const [fetchMobiles, setFetchMobiles] = useState(null)
  
  useEffect(()=>{
    const fetchMobilesDetails = async()=>{
      try{
        const response = await axios.get(`https://mobile-store-mliz.onrender.com/mobile_phones/${category}`)
        console.log(response.data)
        setFetchMobiles(response.data.mobileDetails)
      }
      catch(error){
        console.error(error.response.data)
      }
    }
    fetchMobilesDetails()
  },[category])
  return (
    <div>
      <NavBar/>
      <div className='flex flex-col h-full max-md:my-14'>
        <div className='w-full p-5 text-center bg-slate-300 '>
          <h3 className='text-xl font-semibold'>{fetchMobiles?.[0]?.brand}</h3>
        </div>
        <div className='flex justify-center w-full '>
          <div className='grid grid-cols-3 gap-2 p-5 2xl:gap-10 2xl:grid-cols-5 lg:grid-cols-4 max-2xl:gap-y-10 max-sm:grid-cols-2 max-sm:gap-4 max-xs:grid-cols-1'>
            {fetchMobiles?.map((data,index)=>
              <LatestMobile key={index}
              image={data.mobileImage}
              pName={data.mobileName}
              price={data.mobilePrice}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
