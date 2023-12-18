import React, { useState } from 'react'
import userImage from '../images/user.jpg'
import { NavLink } from 'react-router-dom'
import homeImage from '../images/house-door-fill.svg'
import axios from 'axios'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [userName, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSignup = async(e) =>{
    e.preventDefault()
    try{
      const response = await axios.post('/signup', {email, userName, password})
      console.log(response.data)
      if(response.data.message==='Signup successfull'){
        alert('Signup successfully')
      }
    }
    catch(error){
      console.error(error.response.data)
      alert(error.response.data.message)
    }
  }
  return (
    <div>
      <div className="box-border flex items-center justify-center w-screen h-screen bg-cover bg-login-bg" style={{ opacity: 0.8 }}>
        <div className=' w-[480px] h-[580px] bg-white flex flex-col items-center p-5 gap-8 rounded-3xl justify-center max-sm:w-[330px] max-sm:h-[470px] max-sm:gap-6'>
          <NavLink to='/'><img src={homeImage} alt='home' className='w-8 max-sm:w-6'/></NavLink>
          <h3 className='text-3xl font-bold max-sm:text-xl'>Sign up</h3>
          <img src={userImage} alt='user' className=' w-[130px] h-[130px] rounded-full border-4 bg-cover max-sm:w-[90px] max-sm:h-[90px]'/>
          <form onSubmit={handleSignup}  className='flex flex-col items-center gap-5 '>
            <input placeholder='email' className=' border-b-2 w-[300px] max-sm:w-[200px]' onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder='user name' className=' border-b-2 w-[300px] max-sm:w-[200px]' onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder='password' className=' border-b-2 w-[300px] max-sm:w-[200px]' onChange={(e) => setPassword(e.target.value)}/>
            <button className=' w-[300px] max-sm:w-[200px] bg-lime-600 rounded-full p-1 sm:p-2 text-white text-lg font-semibold'>Sign up</button>
          </form>
          <p className='text-sm sm:text-base'>Already have an account.? <span className='font-semibold text-blue-600 '><NavLink to='/login'>Login</NavLink></span></p>
        </div>
      </div>
    </div>
  )
}
