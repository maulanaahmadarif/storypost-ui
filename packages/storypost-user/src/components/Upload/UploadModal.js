import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { useSubmitModal } from '../../context/AppProvider'
import Button from '../../components/Elements/Button'
import UploadBox from './UploadBox'

import './UploadModal.css'

import uploadButton from '../../assets/img/upload-button.png'
import plusIcon from '../../assets/img/plus.png'

const customStyles = {
  overlay: {
    zIndex: 9999,
    backgroundColor: 'rgba(0,0,0,.6)',
    cursor: 'zoom-out'
  },
  content: {
    background: 'none',
    border: 0,
    display: 'flex',
    overlay: 'hidden'
  }
};

Modal.setAppElement('#root')

const UploadModal = () => {
  const [files, setFiles] = useState([])
  const [maxPhoto, setMaxPhoto] = useState(5)

  const inputFile = useRef(null)
  const { showSubmitModal, setShowSubmitModal } = useSubmitModal()

  const handleChangeFile = (e) => {
    const fileObj = e.target.files[0]
    setFiles([...files, fileObj])
    inputFile.current.value = null
  }

  const removeUploadedPhoto = (index) => {
    const newArr = files.filter((_, i) => i !== index)
    setFiles(newArr)
  }

  const renderUploadedImages = () => {
    return files.map((file, index) => (
      <div className="col-md-4" key={`file-${index}`}>
        <UploadBox file={file} removeBox={() => removeUploadedPhoto(index)} />
      </div>
    ))
  }

  return (
    <Modal
      isOpen={showSubmitModal}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => setShowSubmitModal(false)}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="upload-modal-close">
        <span onClick={() => setShowSubmitModal(false)}><FontAwesomeIcon icon={faTimes} /></span>
      </div>
      <div className="upload-modal-content">
        <div className="upload-modal-content-wrapper">
          <div className="upload-modal-header">
            <span>Submit to Storypost</span>
          </div>
          <div className="upload-modal-form">
            <div className="upload-modal-form-upload">
              { files.length > 0 ? (
                <div className="upload-modal-form-more-image-container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="add-more-box" onClick={() => inputFile.current.click()}>
                        <div className="add-more-box-button">
                          <img src={plusIcon} alt=""/>
                          <span>Add up to {maxPhoto - files.length} more images</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt--1">
                    { renderUploadedImages() }
                  </div>
                </div>
              ) : (
                <div className="upload-modal-form-upload-input">
                  <div className="upload-modal-form-button" onClick={() => inputFile.current.click()}>
                    <div className="mb--1">
                      <img src={uploadButton} alt=""/>
                    </div>
                    <div className="upload-modal-form-button-text">
                      <span>Click</span> to choose a file
                    </div>
                  </div>
                  <div className="upload-modal-form-instruction">
                    <ul>
                      <li><strong>High quality photos</strong> (at least <strong>5MP</strong>)</li>
                      <li>Photos are <strong>clear &amp; original</strong></li>
                    </ul>
                    <ul>
                      <li>Only upload photos you <strong>own the rights</strong> to</li>
                      <li>Zero tolerance for nudity, violence or hate</li>
                    </ul>
                    <ul>
                      <li>Respect the intellectual property of others</li>
                    </ul>
                  </div>
                </div>
              ) }
              <input className="upload-modal-form-input-file" accept="image/*" type="file" ref={inputFile} onChange={handleChangeFile} />
            </div>
            <div className="upload-modal-form-submit">
              <div>
                <span className="mr--1"><Button onClick={() => setShowSubmitModal(false)} text="Cancel" className="btn-upload" /></span>
                <span><Button text="Submit" className="btn-upload"/></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default UploadModal