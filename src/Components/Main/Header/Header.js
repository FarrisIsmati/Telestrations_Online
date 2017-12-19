import React, { Component } from  'react'
import { Link } from              'react-router-dom'

import                            './Header.css'

class Header extends Component{
  render() {
    return(
      <div className="header-holder">
        <nav>
            <Link to='/' style={{ textDecoration: 'none' }}>
            <h1 className='title'> Telestrations</h1>
            </Link>
        </nav>
      </div>
    )
   }
  }


export default Header
