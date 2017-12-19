import React, { Component } from  'react'
import { Link } from              'react-router-dom'

import                            './Header.css'

class Header extends Component{
  render() {
    return(
      <div className="header-holder">
        <nav>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/about'> About</Link>
            <Link to='/:gameId'> Create Header</Link>
          </li>
        </nav>
      </div>
    )
   }
  }


export default Header
