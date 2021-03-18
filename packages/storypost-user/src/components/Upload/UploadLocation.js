import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import Input from '../../components/Form/Input'

import './UploadLocation.css'

const UploadLocation = () => {
  const [editable, setEditable] = useState(false)
  const [location, setLocation] = useState('')

  return (
    <div className="upload-location-container">
      { editable ? (
        <Input name="input" className="input-location" value={location} onChange={(e) => setLocation(e.target.value)} icon={faMapMarkerAlt} onBlur={() => setEditable(!editable)} />
      ) : (
        <div className="upload-location-field-locked" onClick={() => setEditable(!editable)}>
          <span className="upload-location-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
          <span>{ location ? location : 'Add Location' }</span>
        </div>
      ) }
    </div>
  )
}

export default UploadLocation