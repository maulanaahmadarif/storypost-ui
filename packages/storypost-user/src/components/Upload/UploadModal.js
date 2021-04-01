import React, { useRef, useState } from 'react'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactCrop from 'react-image-crop'

import { useSubmitModal } from '../../context/AppProvider'
import Button from '../../components/Elements/Button'
import UploadBox from './UploadBox'

import './UploadModal.css'

import uploadButton from '../../assets/img/upload-button.png'
import plusIcon from '../../assets/img/plus.png'

const customStyles = {
  overlay: {
    zIndex: 9997,
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
  const [showEditModal, setShowEditModal] = useState(false)
  const [editedImage, setEditedImage] = useState({ image: null, name: null, index: null })
  const [crop, setCrop] = useState({ aspect: 16 / 9, unit: 'px' })
  const [croppedImg, setCroppedImg] = useState('')
  const [imageRef, setImageRef] = useState(null)

  let inputFile = useRef(null)
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

  const onClickEdit = (image, name, index) => {
    setShowEditModal(true)
    setEditedImage({ image, name, index })
  }

  const renderUploadedImages = () => {
    return files.map((file, index) => (
      <div className="col-md-4" key={`file-${index}`}>
        <UploadBox file={file} removeBox={() => removeUploadedPhoto(index)} onEdit={onClickEdit} index={index} />
      </div>
    ))
  }

  const onImageLoaded = image => {
    setImageRef(image)
  }

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName
        const newFileObj = new File([blob], fileName)
        resolve(newFileObj);
      }, 'image/jpeg');
    });
  }

  const makeClientCrop = async () => {
    if (imageRef && crop.width && crop.height) {
      const croppedImageFileObj= await getCroppedImg(
        imageRef,
        crop,
        editedImage.name
      );
      setCroppedImg(URL.createObjectURL(croppedImageFileObj))
      
      const shallowCopyFilesState = [...files]
      shallowCopyFilesState[editedImage.index] = croppedImageFileObj
      setFiles(shallowCopyFilesState)

      setShowEditModal(false)
    }
  }

  return (
    <div>
      <Modal
        isOpen={showSubmitModal}
        onRequestClose={() => setShowSubmitModal(false)}
        style={customStyles}
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
      <Modal
        isOpen={showEditModal}
        onRequestClose={() => setShowEditModal(false)}
        style={customStyles}
      >
        <div className="upload-modal-close">
          <span onClick={() => setShowEditModal(false)}><FontAwesomeIcon icon={faTimes} /></span>
        </div>
        <div className="upload-modal-content">
          <div className="upload-modal-content-wrapper">
            <div className="upload-modal-header">
              <span>Edit Image</span>
            </div>
            <div className="upload-modal-form">
              <div className="upload-modal-form-upload">
                <div className="upload-modal-form-upload-input">
                  <div className="upload-modal-form-button upload-modal-form-button-edit">
                    <div className="mb--1 edit-image-wrapper">
                      <ReactCrop
                        src={editedImage.image}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={onImageLoaded}
                        // onComplete={makeClientCrop}
                        onChange={newCrop => setCrop(newCrop)} />
                    </div>
                    <div className="upload-ratio">
                      <img src={croppedImg} alt=""/>
                      {/* <div className="upload-ration-item" onClick={() => setCrop({...crop, aspect: 16 / 9 })}>
                        <span><strong>16 : 9</strong></span>
                      </div>
                      <div className="upload-ration-item" onClick={() => setCrop({...crop, aspect: 4 / 3 })}>
                        <span><strong>4 : 3</strong></span>
                      </div>
                      <div className="upload-ration-item" onClick={() => setCrop({...crop, aspect: 1 / 1 })}>
                        <span><strong>1 : 1</strong></span>
                      </div>
                      <div className="upload-ration-item" onClick={() => setCrop({...crop, aspect: 2 / 3 })}>
                        <span><strong>2 : 3</strong></span>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="upload-modal-form-submit">
                <div>
                  <span className="mr--1"><Button onClick={() => setShowEditModal(false)} text="Cancel" className="btn-upload" /></span>
                  <span><Button text="Save" className="btn-upload" onClick={makeClientCrop} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default UploadModal