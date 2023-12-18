import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import LatestMobile from '../components/LatestMobile'
import axios from 'axios'
export default function Home() {
  const [latestMobiles, setLatestMobiles] = useState(null)

  useEffect(()=>{
    const handleLatestMobile = async() =>{
      try{
        const response = await axios('http://localhost:4000/latest_mobiles')
        console.log(response.data.allDetails)
        setLatestMobiles(response.data.allDetails)
      }
      catch(error){
        console.error(error)
      }
    }
    handleLatestMobile()
  },[])
  
  return (
    <div>
      <NavBar/>
      <div className='flex flex-col items-center my-16'>
        <div className='w-full px-10 py-5 text-xl font-semibold max-sm:text-lg max-sm:px-5'>
          <h2>LATEST MOBILE PHONES</h2>
        </div>
        <div className='grid grid-cols-5 gap-4 max-2xl:grid-cols-4 gap-y-10 2xl:gap-20 max-xl:grid-cols-3 md:gap-5 max-md:grid-cols-2 max-sm:gap-6'>
          {latestMobiles?.map(({mobileImage, mobileName, mobilePrice},index)=>
            <LatestMobile key={index}
            image={mobileImage}
            pName={mobileName}
            price={mobilePrice}
            />)}
        </div>
      </div>
    </div>
  )
}
