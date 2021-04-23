import React, { useState, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

import { oauth, setLocalAuth } from '../utils/oauth'
import { useSubmitModal } from '../context/AppProvider'

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
        .then((res) => {
          console.log(res)
          const decodedJWT = jwtDecode(res.accessToken)

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