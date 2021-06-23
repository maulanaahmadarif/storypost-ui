import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

import { oauth, setLocalAuth } from '../utils/oauth'
import { useSubmitModal } from '../context/AppProvider'
import { register } from '../api/auth'


const AuthContext = React.createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    picture: 'https://image.flaticon.com/icons/png/512/147/147144.png'
  })

  const setLoggedInUser = (data) => {
    setUser({
      name: data.name,
      email: data.email,
      // DEFAULT
      picture: data.picture || 'https://image.flaticon.com/icons/png/512/147/147144.png'
    })
  }

  const { setShowLoginModal } = useSubmitModal()

  useEffect(() => {
    const token = localStorage.getItem('story_token')
    if (!token) {
      oauth.code.getToken(`/${window.location.search}`)
        .then(async (res) => {
          console.log(res)

          const decodedJWT = jwtDecode(res.accessToken)

          console.log(decodedJWT)
          var CryptoJS = require("crypto-js");
          var key = CryptoJS.enc.Utf8.parse('7061737323313233');
          var iv = CryptoJS.enc.Utf8.parse('7061737323313233');
          const hasPass = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(decodedJWT.email), key,
          {
              keySize: 128 / 8,
              iv: iv,
              mode: CryptoJS.mode.CBC,
              padding: CryptoJS.pad.Pkcs7
          });

          const registerData = {
            Username: decodedJWT.email,
            Password: hasPass.toString(),
            Name: decodedJWT.name,
            Phone: null,
            Facebook: null,
            Twitter: null,
            Instagram: null,
            Picture: null,
            Email: decodedJWT.email
          }
    
          try {
            // notes
            // 1. login dengan registerData
            // 2. kalau return gagal, register account
            // 3. login lagi untuk get token
            // 4. set token user di localStorage, dipakai untuk identity id ketika post/ like

            await register(registerData);
          } catch (err) {
            console.log(err)
          }

          setLoggedInUser(decodedJWT)

          setLocalAuth(res.accessToken, decodedJWT.exp)
        })
        .catch((error) => {
          setShowLoginModal(true)
        })
    } else {
      const decodedJWT = jwtDecode(token)

      setLoggedInUser(decodedJWT)
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
      {...props}
    />
  )
}

const useAuth = () => {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export { AuthProvider, useAuth }