import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import className from 'classnames'
import { useHistory } from 'react-router-dom'
 
import { useSubmitModal } from '../context/AppProvider'
import { useAuth } from '../components/AuthProvider'
import Input from '../components/Form/Input'
import Button from '../components/Elements/Button'
import CategoryList from '../components/Category/CategoryList'

import './Header.css'

// IMAGES
import LogoWhite from '../assets/img/logo-white.png'

const Header = () => {
  const dropdownRef = useRef()
  const [showDropDownAva, setShowDropDownAva] = useState(false)
  const { setShowSubmitModal, setShowLoginModal } = useSubmitModal()
  const { user } = useAuth()
  const history = useHistory()

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

  const handleClickMenu = (path) => {
    history.push(path)
    setShowDropDownAva(false)
  }

  const logout = () => {
    setShowDropDownAva(false)

    localStorage.removeItem('story_token')
    localStorage.removeItem('story_expiry')

    setShowLoginModal(true)
  }

  return (
    <div className="header-container">
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-10 col-sm-10 col-md-9">
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
            <div className="col-2 col-sm-2 col-md-3">
              <div className="fx align-items-center justify-content-end">
                <div className="header-button">
                  <span className="mr--1"><Link to="/challenge"><Button text="Events" /></Link></span>
                  <span><Button onClick={() => setShowSubmitModal(true)} text={<FontAwesomeIcon icon={faPlus} />} /></span>
                </div>
                <div className="ava-wrapper" ref={dropdownRef}>
                  <div className="ava" onClick={() => setShowDropDownAva(true)}>
                    <img src={user.picture} alt=""/>
                  </div>
                  <div className={className('ava-dropdown', { 'ava-dropdown--show': showDropDownAva })}>
                    <div className="ava-dropdown-wrapper">
                      <ul>
                        <li onClick={() => handleClickMenu("/profile")}>Profile</li>
                        <li onClick={() => handleClickMenu("/profile/edit")}>Settings</li>
                        <li onClick={() => setShowSubmitModal(true)}>Add Photo</li>
                        <li onClick={() => handleClickMenu("/challenge")} className="ava-li-divider">Events</li>
                        <li onClick={logout}>Logout { user.name }</li>
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
        <div className="category-list-arrow category-list-arrow--left">
          <span><FontAwesomeIcon icon={faChevronLeft} /></span>
        </div>
        <div className="category-list-arrow category-list-arrow--right">
          <span><FontAwesomeIcon icon={faChevronRight} /></span>
        </div>
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