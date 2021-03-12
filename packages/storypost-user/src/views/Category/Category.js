import React from 'react'
import { Link } from 'react-router-dom'

import CategoryBox from '../../components/Category/CategoryBox'

import './Category.css'

const Category = () => {
  return (
    <div className="storypost-category">
      <div className="container">
        <div className="row category-title-row">
          <div className="col">
            <h1 className="text--big">
              Category
            </h1>
            <h3 className="text-weight-normal">
              Explore the world through topics of beautiful photos free to use under the
            </h3>
          </div>
        </div>
        <div className="row mb--2">
          <div className="col">
            <h2>All Categories</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Nature" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="People" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Business" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="City" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Animals" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Food" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Street" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/category/nature">
              <CategoryBox title="Village" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category