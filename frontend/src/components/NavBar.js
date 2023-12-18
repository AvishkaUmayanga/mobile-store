import React, { useState } from 'react'
import logo from '../images/logo.jpg'
import cart from '../images/cart-dash-fill-white.svg'
import menuBar from '../images/menu_hamburger-white.svg'
import userImg from '../images/user-circle-alt-white.svg'
import logOutImg from '../images/log-out-white.svg' 
import { NavLink, useNavigate} from 'react-router-dom'

export default function NavBar() {
  const activeLink = "bg-white w-[200px] h-[80px] flex justify-center items-center font-bold text-xl text-red-500"
  const activeLink1 = "bg-white w-full h-[40px] flex justify-center items-center font-bold text-xl text-red-500"
  const inActive = ' flex justify-center items-center text-center'
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  
  const toggleMenu =()=>{
    setIsMenuOpen(!isMenuOpen)
  }  
  const handleLogout =()=>{
    localStorage.removeItem('authToken')
    alert('Logout successfull!')
    navigate('/')
  }

  const isAuthenticated = localStorage.getItem('authToken') !== null;
  
  return (
    <div>
      <div className='top-0 left-0 right-0 flex items-center justify-between h-20 px-10 bg-blue-700 max-lg:p-4 max-sm:h-14 max-md:fixed'>
        <img src={menuBar} alt='menu' className='w-20 h-14 md:hidden max-sm:h-10' onClick={toggleMenu} />
        <NavLink to='/'><img src={logo} alt='mobile store' className='w-20 h-14 max-sm:h-10 max-sm:w-16'/></NavLink>
        <div className='max-md:hidden'>
          {isAuthenticated ?  (<div className='flex items-center gap-8 max-md:hidden'><NavLink to='/'><img src={logOutImg} alt='logout' className='h-10 cursor-pointer' onClick={handleLogout}/></NavLink>
          <NavLink to='/cart'><img src={cart} alt='cart' className='h-10 cursor-pointer'/></NavLink></div>):(
            <div className='flex items-center gap-8 max-md:hidden'>
              <h4 className='text-lg font-semibold text-white cursor-pointer'><NavLink to='/login'>Login/Signup</NavLink></h4>
            </div>)}
        </div>
      </div>
      <div className={`${isMenuOpen ? 'hidden' :'h-20 flex justify-between items-center px-10 '} max-md:hidden px-0 `}>
        <ul className='flex justify-between w-full font-semibold'>
            <NavLink to={`/mobile_phones/Apple`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>IPhone</li></NavLink>
            <NavLink to={`/mobile_phones/Samsung`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Samsung</li></NavLink>
            <NavLink to={`/mobile_phones/Google`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Google Pixel</li></NavLink>
            <NavLink to={`/mobile_phones/Redmi`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Redmi</li></NavLink>
            <NavLink to={`/mobile_phones/OnePlus`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>One Plus</li></NavLink>
            <NavLink to={`/mobile_phones/Nokia`} className={({ isActive }) => (isActive ? activeLink : inActive) }><li>Nokia</li></NavLink>
        </ul>
      </div>
      <div>
        <ul className={`${isMenuOpen ? 'flex flex-col items-center gap-4 w-full border fixed top-14 bg-slate-300' :'hidden'}`}>
          <NavLink to={`/mobile_phones/Apple`} className={({ isActive }) => (isActive ? activeLink1 : inActive) }><li>IPhone</li></NavLink>
          <NavLink to={`/mobile_phones/Samsung`} className={({ isActive }) => (isActive ? activeLink1 : 'bg-slate-300') }><li>Samsung</li></NavLink>
          <NavLink to={`/mobile_phones/Google`} className={({ isActive }) => (isActive ? activeLink1 : 'bg-slate-300') }><li>Google Pixel</li></NavLink>
          <NavLink to={`/mobile_phones/Redmi`} className={({ isActive }) => (isActive ? activeLink1 : 'bg-slate-300') }><li>Redmi</li></NavLink>
          <NavLink to={`/mobile_phones/OnePlus`} className={({ isActive }) => (isActive ? activeLink1 : 'bg-slate-300') }><li>One Plus</li></NavLink>
          <NavLink to={`/mobile_phones/Nokia`} className={({ isActive }) => (isActive ? activeLink1 : 'bg-slate-300') }><li>Nokia</li></NavLink>
        </ul>
      </div>
      <div className='fixed bottom-0 left-0 right-0 flex items-center justify-between px-5 bg-blue-700 h-14 md:hidden'>
       {isAuthenticated ?(<NavLink to='/'><img src={logOutImg} alt='logout' className='h-8 cursor-pointer' onClick={handleLogout}/></NavLink>):
        (<NavLink to='/login'><img src={userImg} alt='user logo' className='h-10 cursor-pointer'/></NavLink>)}
       <NavLink to='/cart'><img src={cart} alt='cart' className='h-8 cursor-pointer'/></NavLink>
      </div>
    </div>
  )
}
