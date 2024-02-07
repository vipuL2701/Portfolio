import React from 'react'
import brand_logo from'../img/vip.jpg'
import './Header.css'
import Discord from './discord'
import Github from './Github'
import ContactUs from './ContatcUs'
import Linkin from './Linkin'

function Header() {
  return (
    <header>
        <div className='header-container'>
          <div className='nav-logo'>
           <img src={brand_logo} className="logo" alt="Logo"/>
          </div>
          <ol className='main-header'><Github/></ol>
          <ol className='main-header'><Discord/></ol>
          <ol className='main-header'><Linkin/></ol>
          <ol className='main-header'><ContactUs/></ol>
          
        </div>
    </header>
  )
}

export default Header