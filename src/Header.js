import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  constructor (props) {
    super (props)
    this.state = {
      active: 'home'
    }
  }
  render () {
    const active = this.state.active
    return (
      <header>
        <li
          className={active === 'home' ? 'active' : ''}
          onClick={() => this.setState({ active: 'home' })}
        >Home</li>
        <li
          className={active === 'profile' ? 'active' : ''}
          onClick={() => this.setState({ active: 'profile' })}
        >Profile</li>
        <li
          className={active === 'about' ? 'active' : ''}
          onClick={() => this.setState({ active: 'about' })}
        >About</li>
        <li
          className={active === 'contact' ? 'active' : ''}
          onClick={() => this.setState({ active: 'contact' })}
        >Contact</li>
      </header>
    )
  }
}

export default Header
