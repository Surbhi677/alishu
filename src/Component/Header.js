import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div>
      <div class="header">
  <a href="Home" class="logo">CompanyLogo</a>
  <div class="header-right">
    <a href="/">Home</a>
    <a href="About">About</a>
    <a href="Services">Services</a>
    <a href="Charges">Charges</a>
    <a href="Contact">Contact</a>
    
  </div>
</div>
      </div>
    )
  }
}
