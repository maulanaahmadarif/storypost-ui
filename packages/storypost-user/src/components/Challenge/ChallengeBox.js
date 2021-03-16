import React from 'react'

const ChallengeBox = (props) => {
  const {
    title,
    category,
    text,
    author,
    date
  } = props
  return (
    <div className="category-box">
      <div className="category-box-header category-box-header-challenge">
        <img src="https://via.placeholder.com/300x400" alt=""/>
      </div>
      <div className="category-box-body">
        <p className="text--size-14">
          <strong>{category}</strong>
        </p>
        <div className="mb--1">
          <h3 className="mb--0">{title}</h3>
        </div>
        <div className="mb--1">
          <p>
            {text}
          </p>
        </div>
        <div>
          <p className="text--size-14 mb--0">
            {author} . {date}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChallengeBox