import React, { Component } from  'react'
import { Link } from              'react-router-dom'

import                            './Header.css'

class Header extends Component{
  render() {
    return(
        <div className='flex flex-space-around header-holder'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h1>You Suck at <span>Art</span></h1>
          </Link>
          <Link to='/about' style={{ textDecoration: 'none' }}>
            <h1> About </h1>
          </Link>
        </div>
    )
   }
  }


export default Header
