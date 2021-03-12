import React from 'react'

import PhotoGrid from '../../components/Photo/PhotoGrid'

const CategoryDetail = () => {
  return (
    <div className="storypost-category-detail">
      <div className="container">
        <div className="row category-title-row">
          <div className="col-md-6">
            <h1 className="text--big">
              Nature
            </h1>
            <h3 className="text-weight-normal">
              From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally.
            </h3>
          </div>
        </div>
        <div className="category-detail-photo-grid">
          <PhotoGrid />
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail