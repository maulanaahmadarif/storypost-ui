import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'

import Input from '../components/Form/Input'
import Button from '../components/Elements/Button'
import CategoryList from '../components/Category/CategoryList'

import './Header.css'

// IMAGES
import LogoWhite from '../assets/img/logo-white.png'

const Header = () => {
  const dropdownRef = useRef()
  const [showDropDownAva, setShowDropDownAva] = useState(false)

  const handleClick = e => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropDownAva(false)
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  })

  return (
    <div className="header-container">
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-9">
              <div className="fx align-items-center">
                <div className="logo header--logo">
                  <Link to="/">
                    <img src={LogoWhite} alt=""/>
                  </Link>
                </div>
                <div className="header--search">
                  <Input type="text" className="form-input--rounded" placeholder="Search Photos" icon={faSearch} />
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="fx align-items-center justify-content-end">
                <div>
                  <span className="mr--1"><Button text="Events" /></span>
                  <span><Button text={<FontAwesomeIcon icon={faPlus} />} /></span>
                </div>
                <div className="ava-wrapper" ref={dropdownRef}>
                  <div className="ava" onClick={() => setShowDropDownAva(true)}>
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
                  </div>
                  <div className={className('ava-dropdown', { 'ava-dropdown--show': showDropDownAva })}>
                    <div className="ava-dropdown-wrapper">
                      <ul>
                        <li><Link to="/profile">Profile</Link></li>
                        <li className="ava-li-divider"><Link to="/profile/edit">Settings</Link></li>
                        <li><Link to="/">Logout @arif_maulana</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="header-category">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <CategoryList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header