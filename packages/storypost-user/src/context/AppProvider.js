import React, { useState, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = (props) => {
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  useEffect(() => {
    const htmlDom = document.querySelector('html')

    if (showLoginModal || showSubmitModal) {
      htmlDom.classList.add('no-scroll')
    } else {
      htmlDom.classList.remove('no-scroll')
    }
  }, [showLoginModal, showSubmitModal])

  const value = {
    showSubmitModal,
    setShowSubmitModal,
    showLoginModal,
    setShowLoginModal
  }
  return <AppContext.Provider value={value}>{ props.children }</AppContext.Provider>
}

const useSubmitModal = () => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error('useSubmitModal must be used within a AppProvider')
  }
  return context
}

export { AppProvider, useSubmitModal }