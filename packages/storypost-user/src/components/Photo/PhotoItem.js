import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../Elements/Button'

SwiperCore.use([Navigation, Pagination]);

const PhotoItem = ({ images = [] }) => {


  const renderImage = () => {
    if (images.length > 1) {
      return (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          { images.map((image, index) => (
            <SwiperSlide key={`image-${index}`}>
              <Link to="/photo/1">
                <img src={image} alt=""/>
              </Link>
            </SwiperSlide>
          )) }
        </Swiper>
      )
    }

    return (
      <Link to="/photo/1">
        <img src={images[0]} alt=""/>
      </Link>
    )
  }

  return (
    <figure className="photo-grid-item">
      <div>
        <div className="photo-grid-image">
          { renderImage() }
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
      </div>
    </figure>
  )
}

export default PhotoItem