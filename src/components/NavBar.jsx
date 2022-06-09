import React from 'react'
import { NavLink } from 'react-router-dom';
import { ImgNavB, NavButton } from '../styles/StylesGlobales';

const NavBar = () => {
    return (
        <NavButton className='w-100 d-flex'>
            <div className='d-flex justify-content-between mx-5 my-auto w-100'>
                <NavLink to='/' className='ImgNavB-2 my-auto'><ImgNavB><img className='my-auto' src="https://i.ibb.co/Nt15DY6/Vector-7.png" alt="" /></ImgNavB></NavLink>
                <NavLink to='/' className='ImgNavB-2 my-auto'><ImgNavB><img className='my-auto' src="https://i.ibb.co/R95VFfw/Vector-8.png" alt="" /></ImgNavB></NavLink>
                <NavLink to='/' className='ImgNavB-2 my-auto'><ImgNavB><img className='my-auto' src="https://i.ibb.co/h8KbMPT/Vector-3.png" alt="" /></ImgNavB></NavLink>
                <NavLink to='/' className='ImgNavB-2 my-auto'><ImgNavB><img className='my-auto' src="https://i.ibb.co/8bG4VBm/Group-24.png" alt="" /></ImgNavB></NavLink>
                <NavLink to='/' className='ImgNavB-2 my-auto'><ImgNavB><img className=' my-auto' src="https://i.ibb.co/xzw46k1/Group-11.png" alt="" style={{borderRadius: '50%'}} /></ImgNavB></NavLink>
            </div>
        </NavButton>
    )
}

export default NavBar;