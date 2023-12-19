import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import closeBtn from '../images/x.svg'
import visaCard from '../images/visa.jpg'
import masterCard from '../images/mastercard.png'
import genieCard from '../images/Dialog-genie.jpg'
import axios from 'axios'

export default function Cart() {
  const [fetchData, setFetchData] = useState(null)

  useEffect(()=>{
    const handleFetch = async() =>{
      const token = localStorage.getItem('authToken')
      try{
        const response = await axios.get('https://mobile-store-mliz.onrender.com/cartDetails', {headers: {Authorization: `Bearer ${token}`}})
        console.log(response.data)
        setFetchData(response.data.cartDetails)
      }
      catch(error){
        console.error(error)
      }
    }
    handleFetch()  
  },[])
  
  const calculateSubTotal = () => {
    if (!fetchData?.itemDetails) {
      return 0;
    }
    return fetchData.itemDetails.reduce((total, item) => total + item.mobilePrice, 0)
  }
  
  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const delivery = 500
    return subTotal + delivery;
  }
  
  const deleteItem = async(itemID) =>{
    const token = localStorage.getItem('authToken')
      try{
        const response = await axios.post('https://mobile-store-mliz.onrender.com/remove_item',{itemID}, {headers:{Authorization: `Bearer ${token}`}})
        console.log(response.data)
        if(response.data.message==='Item removed successfully'){
          alert(response.data.message)
        }
      }
      catch(error){
        console.error(error)
      }
  }
  

  return (
    <div>
      <NavBar/>
      <div className='flex flex-col px-6 lg:gap-8 3xl:px-20 xl:px-10 '>
        <h4 className='text-lg font-semibold'>Hi {fetchData?.email}!</h4>
          <div className='flex lg:gap-10 xl:gap-20 md:gap-4 max-md:flex-col max-md:mt-10'>
            <div className='flex flex-col w-full gap-5'>
              {fetchData?.itemDetails.map((items,index)=>(
                <div key={index}  className='flex  border-2  h-[300px] items-center p-5 gap-5 max-sm:h-[200px] max-sm:p-1 max-sm:gap-0'>
                  <div className=' w-[250px] h-[250px]  items-center flex max-sm:w-[200px] max-sm:h-[200px]'>
                    <img src={items.mobileImage} alt=' mobile phone' />  
                  </div>
                  <div className=' h-[250px]  w-full flex flex-col p-4 max-sm:h-[150px]'>
                    <div className='flex justify-between'>
                      <div className='flex flex-col gap-2'>
                        <h4 className='text-lg font-semibold'>{items.mobileName}</h4>
                        <h3 className='text-lg font-semibold'>Rs.{items.mobilePrice}</h3>
                      </div>
                    <div>
                      <img src={closeBtn} alt='remove' className='w-8 cursor-pointer' onClick={()=>deleteItem(items._id)}/>
                    </div>
                  </div>
                </div>
              </div> 
               ))}
            </div>
            <div className='border-2 max-md:my-20 xl:w-[800px]   flex flex-col gap-5 p-8 justify-center lg:w-[500px] lg:h-[500px] w-[300px] md:h-[440px] max-md:w-full rounded-xl shadow-xl'>
              <div className='pb-4 border-b-2'>
                <h3 className='text-lg font-semibold'>TOTAL</h3>
              </div>
              <div className='pb-4 border-b-2 '>
                <div className='flex justify-between'>
                  <h4 className='my-5'>Sub-total :</h4>
                  <h4 className='my-5'>Rs.{calculateSubTotal()}</h4>
                </div>
                <div className='flex justify-between'>
                  <h4>Delivery:</h4>
                  <h4>Rs.500</h4>
                </div>           
              </div>
              <div className='flex justify-between'>
                <h4>Total:</h4>
                <h4>Rs.{calculateTotal()}</h4>
              </div>
              <div> 
              <div className='w-full h-10 font-bold text-white bg-green-400 cursor-pointer lg:h-14'>
                <h4 className='flex items-center justify-center w-full h-full'>CHECKOUT</h4>
              </div>
            </div>
            <div className='flex justify-center my-5'>
              <div className='flex justify-between lg:h-10  lg:w-[350px] md:w-[250px] md:h-9 w-[250px] h-10'>
                <img src={visaCard} alt="visacard" className='w-16 border lg:w-20 md:w-14' />
                <img src={masterCard} alt="mastercard " className='w-16 border lg:w-20 md:w-14'/>
                <img src={genieCard} alt="dealog genie" className='w-16 border lg:w-20 md:w-14'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
