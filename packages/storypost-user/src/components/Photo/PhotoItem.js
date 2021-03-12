import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import Button from '../Elements/Button'

const PhotoItem = () => {
  return (
    <figure className="photo-grid-item">
      <Link to="/photo/1">
        <div>
          <img src="https://via.placeholder.com/400x600" alt=""/>
        </div>
        <div className="photo-detail">
          <div className="photo-detail-ava-container">
            <div className="photo-detail-ava-image">
              <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
            </div>
            <div className="photo-detail-ava-user">
              <span>@arif_maulana</span>
            </div>
          </div>
          <div>
            <Button className="photo-detail-download-button" text={<FontAwesomeIcon icon={faArrowDown} />} />
          </div>
        </div>
      </Link>
    </figure>
  )
}

export default PhotoItem