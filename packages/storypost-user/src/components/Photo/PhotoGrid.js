import React from 'react'
import className from 'classnames'

import useWindowSize from '../../hooks/useWindowSize'
import PhotoItem from '../Photo/PhotoItem'

import './PhotoGrid.css'

const images = ["https://via.placeholder.com/400x400", "https://via.placeholder.com/400x400"]

const PhotoGrid = () => {
  const [width, _] = useWindowSize()

  return (
    <div className={className('photo-grid-container', { 'photo-grid-container-one': width < 768 })}>
      { width > 768 ? (
        <>
          <div className="photo-grid-column">
            <PhotoItem images={images} />
            <PhotoItem images={["https://via.placeholder.com/400x400"]} />
            <PhotoItem images={["https://via.placeholder.com/500x400"]} />
            <PhotoItem images={["https://via.placeholder.com/400x200"]} />
            <PhotoItem images={["https://via.placeholder.com/300x200"]} />
            <PhotoItem images={["https://via.placeholder.com/300x300"]} />
            <PhotoItem images={images} />
            <PhotoItem images={["https://via.placeholder.com/500x400"]} />
          </div>
          <div className="photo-grid-column">
            <PhotoItem images={["https://via.placeholder.com/500x400"]} />
            <PhotoItem images={["https://via.placeholder.com/300x400"]} />
            <PhotoItem images={["https://via.placeholder.com/600x400"]} />
            <PhotoItem images={images} />
            <PhotoItem images={["https://via.placeholder.com/200x200"]} />
            <PhotoItem images={["https://via.placeholder.com/300x600"]} />
            <PhotoItem images={["https://via.placeholder.com/200x300"]} />
            <PhotoItem images={["https://via.placeholder.com/500x200"]} />
          </div>
          <div className="photo-grid-column">
            <PhotoItem images={images} />
            <PhotoItem images={["https://via.placeholder.com/500x400"]} />
            <PhotoItem images={["https://via.placeholder.com/400x400"]} />
            <PhotoItem images={["https://via.placeholder.com/200x200"]} />
            <PhotoItem images={["https://via.placeholder.com/200x400"]} />
            <PhotoItem images={images}/>
            <PhotoItem images={["https://via.placeholder.com/200x200"]} />
            <PhotoItem images={["https://via.placeholder.com/500x400"]} />
          </div>
        </>
      ) : (
        <div className="photo-grid-column">
          <PhotoItem images={images} />
          <PhotoItem images={["https://via.placeholder.com/400x400"]} />
          <PhotoItem images={["https://via.placeholder.com/500x400"]} />
          <PhotoItem images={["https://via.placeholder.com/400x200"]} />
          <PhotoItem images={["https://via.placeholder.com/300x200"]} />
          <PhotoItem images={["https://via.placeholder.com/300x300"]} />
          <PhotoItem images={images} />
          <PhotoItem images={["https://via.placeholder.com/500x400"]} />
          <PhotoItem images={images} />
          <PhotoItem images={["https://via.placeholder.com/400x400"]} />
          <PhotoItem images={["https://via.placeholder.com/500x400"]} />
          <PhotoItem images={["https://via.placeholder.com/400x200"]} />
          <PhotoItem images={["https://via.placeholder.com/300x200"]} />
          <PhotoItem images={["https://via.placeholder.com/300x300"]} />
          <PhotoItem images={images} />
          <PhotoItem images={["https://via.placeholder.com/500x400"]} />
        </div>
      ) }     
    </div>
  )
}

export default PhotoGrid