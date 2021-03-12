import React from 'react'

import PhotoItem from '../Photo/PhotoItem'

import './PhotoGrid.css'

const PhotoGrid = () => {
  return (
    <div className="photo-grid-container">
      <div className="photo-grid-column">
        <PhotoItem />
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/300x400" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x500" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x700" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/500x500" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/500x600" alt=""/>
        </figure>
      </div>
      <div className="photo-grid-column">
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/300x300" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/300x400" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x500" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/500x500" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/500x600" alt=""/>
        </figure>
      </div>
      <div className="photo-grid-column">
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x300" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/300x300" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/300x400" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x500" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/400x700" alt=""/>
        </figure>
        <figure className="photo-grid-item">
          <img src="https://via.placeholder.com/500x500" alt=""/>
        </figure>
      </div>
    </div>
  )
}

export default PhotoGrid