import React, { useState } from 'react'

const AppContext = React.createContext()

const AppProvider = (props) => {
  const [showSubmitModal, setShowSubmitModal] = useState(false)

  const value = { showSubmitModal, setShowSubmitModal }
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