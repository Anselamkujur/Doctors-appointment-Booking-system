import React from 'react'
import { assets } from '../assets/assets_admin/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img src={assets.admin_logo} alt="" />
      <ul className='flex gap-10 '>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>ALL DOCTORS</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>ABOUT</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>CONTACT</li>
          <hr />
        </NavLink>
      </ul>
      <div>
        <button>Create ccount</button>
      </div>

    </div>
  )
}

export default Navbar
