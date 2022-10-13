import React from 'react'
import './styles.scss'
import { BiSearchAlt2 } from "react-icons/bi"
import { IoIosNotificationsOutline } from "react-icons/io"
import {AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"


const root = process.env.PUBLIC_URL
function NavComponent() {

  return (
    <div className='nav'>
      <div className="logo">
        <img src={root + 'asset/logo.svg'} alt='logo' />
      </div>
    <AiOutlineMenu className="mobileIcon " />
     <div className="navright">
     <div className='searchbar' >
        <input type='text' className='search' placeholder='Search for anything' />
        <i className='iconm'>  <BiSearchAlt2 /></i>

      </div>

      <div className='setting' >
        <Link to='docs'> Docs </Link>
        <IoIosNotificationsOutline />
        <div className="detail">
          <img src={root + 'asset/user.svg'} alt='user' />
          <select > 
          <option value="free">Settings</option>
          <option value="free">Edit</option>
          <option value="view" defaultValue={'Adedeji'}> Adedeji</option>

          </select>
        </div>

      </div>
     </div>

    </div>
  )
}

export default NavComponent