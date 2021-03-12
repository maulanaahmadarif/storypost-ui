import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames'

import './CategoryList.css'

const categories = [
  {
    id: 'cat-1',
    name: 'Nature'
  },
  {
    id: 'cat-2',
    name: 'Animals'
  },
  {
    id: 'cat-3',
    name: 'Food'
  },
  {
    id: 'cat-4',
    name: 'City'
  },
  {
    id: 'cat-5',
    name: 'Car'
  },
  {
    id: 'cat-6',
    name: 'Street'
  },
  {
    id: 'cat-7',
    name: 'Space'
  },
  {
    id: 'cat-8',
    name: 'Building'
  },
  {
    id: 'cat-9',
    name: 'Sea'
  },
  {
    id: 'cat-10',
    name: 'Mountain'
  },
  {
    id: 'cat-11',
    name: 'Food'
  },
  {
    id: 'cat-12',
    name: 'City'
  },
  {
    id: 'cat-13',
    name: 'Car'
  },
  {
    id: 'cat-14',
    name: 'Street'
  },
  {
    id: 'cat-15',
    name: 'Space'
  },
  {
    id: 'cat-16',
    name: 'Building'
  },
  {
    id: 'cat-17',
    name: 'Sea'
  },
  {
    id: 'cat-18',
    name: 'Mountain'
  }
]

const CategoryList = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  return (
    <div className="category-list-container">
      <div className="category-list-item-wrapper">
        <ul className="category-list">
          { categories.map((category, index) => (
            <li className={className('category-list-item', { 'category-list-item--active': activeCategory === index })} key={category.id} onClick={() => setActiveCategory(index)}>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
            </li>
          )) }
        </ul>
      </div>
      <div className={className('category-list-viewall', { 'category-list-viewall--active': activeCategory === 'all' })} onClick={() => setActiveCategory('all')}>
        <Link to="/category">View All</Link>
      </div>
    </div>
  )
}

export default CategoryList