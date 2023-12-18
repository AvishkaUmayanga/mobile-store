import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.jpg'
import logOutImg from '../images/log-out-white.svg'

export default function AdminNavbar() {
  const activeLink = "font-bold text-xl p-2 border rounded-3xl text-black bg-white"
  const inActive = ''

  const navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem('authToken')
    alert('Logout successfull!')
    navigate('/')
  }
  return (
    <div>
      <div className='top-0 left-0 right-0 flex items-center justify-between h-20 px-10 bg-blue-700 max-lg:p-4 max-sm:h-14 max-md:fixed'>
        <NavLink to='/'><img src={logo} alt='mobile store' className='w-20 h-14 max-sm:h-10 max-sm:w-16'/></NavLink>
        <div className='flex items-center gap-8 text-lg text-white max-md:hidden'>
          <div className='flex items-center gap-8'>
            <NavLink to='/dashboard' className={({ isActive }) => (isActive ? activeLink : inActive) }><h4>Dashboard</h4></NavLink>
            <NavLink to='/add_new_mobile' className={({ isActive }) => (isActive ? activeLink : inActive) }><h4>Add New Mobile</h4></NavLink>
            <NavLink to='/'><img src={logOutImg} alt='logout' className='h-10 cursor-pointer' onClick={handleLogout}/></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
