import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Input from '../../components/Form/Input'
import TextArea from '../../components/Form/TextArea'
import Button from '../../components/Elements/Button'

import UploadLocation from './UploadLocation'

const UploadBox = (props) => {
  const [tag, setTag] = useState('')
  const [caption, setCaption] = useState('')

  const imageRef = useRef()

  const onClickEditButton = () => {
    props.onEdit(URL.createObjectURL(props.file), props.file.name, props.index)
  }

  return (
    <div className="uploaded-box-image">
      <div className="uploaded-image">
        <div>
          <img ref={imageRef} src={URL.createObjectURL(props.file)} alt=""/>
        </div>
        <div className="floating-uploaded-close">
          <span onClick={props.removeBox}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="floting-uploaded-location">
          <UploadLocation />
        </div>
      </div>
      <div className="uploaded-input">
        <Button text="Edit" className="btn-image-edit" onClick={onClickEditButton} />
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