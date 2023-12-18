import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import addToCart from '../images/cart-plus-white.svg'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function MobileDetails() {
  const {phoneName} = useParams()
  const [fetchDescribe, setFetchDescribe] = useState(null)
  const navigate = useNavigate()
  
  useEffect(()=>{
    const describeMobile = async() =>{
      try{
        const response = await axios.get(`http://localhost:4000/mobile_details/${phoneName}`)
        console.log(response.data)
        setFetchDescribe(response.data.details)
      }
      catch(error){
        console.error(error)
      }
    }
    describeMobile()
  },[phoneName])


  const handleAddToCart = async() =>{
    const token = localStorage.getItem('authToken')
    try{
      const response = await axios.post('http://localhost:4000/add_to_cart', {mobileName: phoneName, mobilePrice: fetchDescribe.mobilePrice},{headers: {Authorization: `Bearer ${token}`}})
      console.log('cart response', response.data.message)
      if(response.data.message==='Item added'){
        alert('Item added')
      }
    }
    catch(error){
      console.error(error.response.data)
      if(error.response.data.message==='Forbidden'){
        alert('Please login first!')
        navigate('/login')
      }
    }
  }
  return (
    <div>
      <NavBar/>
      <div className='my-10 max-sm:my-20'>
        <div className='flex justify-center max-sm:flex-col max-sm:gap-5 max-sm:items-center'>
          <div className=' lg:w-[500px]   flex justify-center items-center p-5 md:w-[420px] max-sm:w-[380px] max-xs:w-[280px]'>
            <img src={fetchDescribe?.mobileImage} alt=" mobile" className='object-cover ' />
           </div>
           <div className='px-10 flex flex-col xl:w-[600px] justify-center items-center gap-5 lg:w-[500px]  md:w-[310px] max-sm:w-[380px] max-xs:w-[280px]'>
            <h3 className='font-semibold '>{phoneName}</h3>
            <ol style={{ listStyleType: 'disc' }} className='flex flex-col gap-5 max-md:gap-3'>
            {fetchDescribe?.describe?.map((data,index)=>(
              <li key={index}>{data}</li>
            ))}
            </ol>
            <h4 className='text-xl font-bold text-green-500'>Rs.{fetchDescribe?.mobilePrice}</h4>
            <div className='flex  w-[250px]  justify-center max-sm:w-[200px] max-xs:w-[180px]'>
                <button onClick={handleAddToCart} className='flex items-center justify-center w-full p-2 text-lg text-white bg-blue-500 rounded-lg max-xs:text-base gap-7 hover:bg-blue-700 max-sm:gap-5'>Add to cart <img src={addToCart} alt='cart' className='w-5'/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
