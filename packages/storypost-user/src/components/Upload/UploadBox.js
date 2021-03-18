import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Input from '../../components/Form/Input'
import TextArea from '../../components/Form/TextArea'

import UploadLocation from './UploadLocation'

const UploadBox = (props) => {
  const [tag, setTag] = useState('')
  const [caption, setCaption] = useState('')

  return (
    <div className="uploaded-box-image">
      <div className="uploaded-image">
        <div>
          <img src={URL.createObjectURL(props.file)} alt=""/>
        </div>
        <div className="floating-uploaded-close">
          <span onClick={props.removeBox}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="floting-uploaded-location">
          <UploadLocation />
        </div>
      </div>
      <div className="uploaded-input">
        <Input type="text" value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Add Tag" className="uploaded-input-field" />
      </div>
      <div className="uploaded-input">
        <TextArea value={caption} onChange={(e) => setCaption(e.target.value)} placeholder="Caption" className="uploaded-input-field" />
      </div>
    </div>
  )
}

export default UploadBox