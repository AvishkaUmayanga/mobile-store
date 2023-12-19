import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import axios from 'axios';

export default function Dashboard() {
  const [fetchMobiles, setFetchMobiles] = useState(null)
  const [fetchError, setFetchError] = useState('')

  useEffect(()=>{
    const allData = async()=>{
      const token = localStorage.getItem('authToken')
      try{
        const response = await axios.get('https://mobile-store-mliz.onrender.com/all_mobiles', {headers: {Authorization: `Bearer ${token}`}})
        console.log(response.data.allDetails)
        setFetchMobiles(response.data.allDetails)
      }
      catch(error){
        console.error(error);
        setFetchError(error.response.data.message)
      }
    }
    allData()
  },[])
  
  return (
    <div>
      <AdminNavbar/>
      <div className='flex flex-col items-center gap-2 my-10'>
        {fetchMobiles?.map((data,index)=>(
          <div key={index} className='w-[1100px]  border-2 flex items-center p-4 justify-between '>
          <div>
            <img src={data.mobileImage} alt='mobile' className=' w-[150px]'/>
          </div>
          <div>
            <h3>Brand: {data.brand}</h3>
            <h3>Mobile Name: {data.mobileName}</h3>
            <h3>Mobile Price: {data.mobilePrice}</h3>           
          </div>
          <div>
            <ol style={{ listStyleType: 'disc' }}>
              {data.description?.map((details,index)=>(
                <li key={index}>{details}</li>
              ))}
            </ol>
          </div>
          <div className='flex flex-col gap-2'>
            <button className='w-20 p-1 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600'>Update</button>
            <button className='w-20 p-1 font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 '>Delete</button>
          </div>
        </div>
        ))}
        <p className='flex text-4xl font-bold text-red-600'>{fetchError}</p>
      </div>
    </div>
  );
}


