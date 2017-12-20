import React, { Component } from  'react'
import { Link } from              'react-router-dom'

import About from                            '../../SubComponents/About/About'


import                            './Header.css'

class Header extends Component{
  render() {
    return(
      <div className="header-holder">
        <Link to='/' style={{ textDecoration: 'none' }}>
            <h1>You Suck at <span>Art</span></h1>
        </Link>
          <Link to='/about'>
          <h1 className='aboutPage'> About </h1>
          </Link>
      </div>
    )
   }
  }


export default Header
