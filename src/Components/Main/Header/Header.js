import React                from  'react'
import { Link }             from  'react-router-dom'

import                            './Header.css'

const Header = () => (
  <div className='header-holder'>
    <Link to='/' style={{ textDecoration: 'none' }}>
      <h1>You Suck at <span>Art</span></h1>
    </Link>
    <Link to='/about' style={{ textDecoration: 'none' }}>
      <h1 className='about-page'> About </h1>
    </Link>
  </div>
)

export default Header
