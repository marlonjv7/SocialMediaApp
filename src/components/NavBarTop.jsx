import React from 'react'
import { ImgNavT, NavTop } from '../styles/StylesGlobales';
import { NavLink } from 'react-router-dom';

const NavBarTop = () => {


  return (
    <div>
      <NavLink to='/' className='ImgNavB-2 my-auto'><NavTop><ImgNavT src="https://i.ibb.co/JvHH6cg/Back.png" alt="" /></NavTop></NavLink>
    </div>


  )
}

export default NavBarTop;