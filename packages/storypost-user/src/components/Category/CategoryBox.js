import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

import './CategoryBox.css'

const CategoryBox = (props) => {
  return (
    <div className="category-box">
      <div className="category-box-header">
        <img src="https://via.placeholder.com/300x400" alt=""/>
      </div>
      <div className="category-box-body">
        <div className="mb--1">
          <h3 className="mb--0">{ props.title }</h3>
        </div>
        <div className="mb--1">
          <p>
            From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally.
          </p>
        </div>
        <div>
          <div className="fx">
            <div className="mr--1">
              <span><FontAwesomeIcon icon={faImage} /></span>
            </div>
            <div>
              <span className="text--size-14">1k contributions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryBox