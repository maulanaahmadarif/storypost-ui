import React from 'react'
import className from 'classnames'

import useWindowSize from '../../hooks/useWindowSize'
import PhotoItem from '../Photo/PhotoItem'

import './PhotoGrid.css'

// IMAGES
import cat1 from '../../assets/img/cat1.jpg'
import cat2 from '../../assets/img/cat2.jpg'
import room1 from '../../assets/img/room1.jpg'
import people1 from '../../assets/img/people1.jpg'

const images = [room1, cat2]

const PhotoGrid = () => {
  const [width, _] = useWindowSize()

  return (
    <div className={className('photo-grid-container', { 'photo-grid-container-one': width < 768 })}>
      { width > 768 ? (
        <>
          <div className="photo-grid-column">
            <PhotoItem images={images} />
            <PhotoItem images={[room1]} />
            <PhotoItem images={[cat1]} />
            <PhotoItem images={[people1]} />
            <PhotoItem images={[cat2]} />
            <PhotoItem images={[room1]} />
            <PhotoItem images={images} />
            <PhotoItem images={[cat1]} />
          </div>
          <div className="photo-grid-column">
            <PhotoItem images={[cat1]} />
            <PhotoItem images={[room1]} />
            <PhotoItem images={[cat2]} />
            <PhotoItem images={images} />
            <PhotoItem images={[cat2]} />
            <PhotoItem images={[cat1]} />
            <PhotoItem images={[people1]} />
            <PhotoItem images={[room1]} />
          </div>
          <div className="photo-grid-column">
            <PhotoItem images={images} />
            <PhotoItem images={[cat1]} />
            <PhotoItem images={[people1]} />
            <PhotoItem images={[cat2]} />
            <PhotoItem images={[room1]} />
            <PhotoItem images={images}/>
            <PhotoItem images={[cat2]} />
            <PhotoItem images={[cat1]} />
          </div>
        </>
      ) : (
        <div className="photo-grid-column">
          <PhotoItem images={images} />
          <PhotoItem images={[people1]} />
          <PhotoItem images={[cat1]} />
          <PhotoItem images={[people1]} />
          <PhotoItem images={[cat2]} />
          <PhotoItem images={[room1]} />
          <PhotoItem images={images} />
          <PhotoItem images={[cat1]} />
          <PhotoItem images={images} />
          <PhotoItem images={[people1]} />
          <PhotoItem images={[cat1]} />
          <PhotoItem images={[people1]} />
          <PhotoItem images={[cat2]} />
          <PhotoItem images={[room1]} />
          <PhotoItem images={images} />
          <PhotoItem images={[cat1]} />
        </div>
      ) }     
    </div>
  )
}

export default PhotoGrid