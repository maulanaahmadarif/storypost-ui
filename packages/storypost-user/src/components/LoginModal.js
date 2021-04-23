import React, { useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import sign from 'jwt-encode'

import { useSubmitModal } from '../context/AppProvider'
import { useAuth } from '../components/AuthProvider'
import { oauth, setLocalAuth } from '../utils/oauth'

import './LoginModal.css'

import kemenkeuLogo from '../assets/img/kemenkeu-logo.png'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    zIndex: 9997,
    backgroundColor: 'rgba(0,0,0,.9)',
    cursor: 'zoom-out'
  },
  content: {
    background: 'none',
    border: 0,
    display: 'flex',
    overlay: 'hidden'
  }
};

const LoginModal = () => {
  const { showLoginModal, setShowLoginModal } = useSubmitModal()
  const { setUser } = useAuth()

  const loginSSO = () => {
    window.location.href = oauth.code.getUri()
  }

  const responseFacebook = (res) => {
    setShowLoginModal(false)
    const { name, email, _, data_access_expiration_time, picture } = res

    const data = {
      name,
      email,
      picture: picture.data.url
    }

    setUser(data)

    const accessToken = sign(data, 'SECRET'); 

    setLocalAuth(accessToken, data_access_expiration_time, 'fb')
  }

  return (
    <div className="login-container">
      <Modal
        isOpen={showLoginModal}
        style={customStyles}
      >
        <div className="login-wrapper">
          <div className="login-content">
            <div className="mb--2">
              <h2 className="text--center">Login with</h2>
            </div>
            <div className="login-button-wrapper">
              <div className="login-button login-sso">
                <div onClick={loginSSO}>
                  <img src={kemenkeuLogo} alt=""/>
                </div>
              </div>
              <div className="login-button login-fb">
                <FacebookLogin
                  appId="456344162301086"
                  fields="name,email,picture"
                  callback={responseFacebook}
                  redirectUri={window.origin}
                  version="10.0"
                  render={renderProps => (
                    <span onClick={renderProps.onClick}>
                      <FontAwesomeIcon icon={faFacebookSquare} />
                    </span>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default LoginModal