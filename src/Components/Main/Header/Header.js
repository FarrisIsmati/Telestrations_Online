import React, { Component } from  'react'
import { Link } from              'react-router-dom'

import                            './Header.css'

class Header extends Component{
  render() {
    return(
        <div className='flex flex-space-around header-holder'>
          <Link to='/' style={{ textDecoration: 'none' }}>
          // While correctly done, I would recommend either always using external CSS stylesheets (classNames)
          // or always using inline styles for static CSS styling for consistency (dynamic styling would be ok)
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
