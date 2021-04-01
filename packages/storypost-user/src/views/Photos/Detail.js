import React from 'react'

import PhotoGrid from '../../components/Photo/PhotoGrid'

import './Detail.css'

import people1 from '../../assets/img/people1.jpg'

const Detail = () => {
  return (
    <div className="storypost-photo-detail">
      <div className="container">
        <div className="row justify-content-center mb--2">
          <div className="col-md-4">
            <div className="mb--1">
              <div className="fx justify-content-between align-items-end">
                <div>
                  <h2 className="mb--0">Some Title</h2>
                  <span className="text--size-14">Location if added</span>
                </div>
                <div className="fx align-items-center">
                  <div className="ava">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
                  </div>
                  <div className="ml--1">
                    <span className="text--size-14">@arif_maulana</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb--1">
              <figure className="detail-image">
                <img src={people1} alt=""/>
              </figure>
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo iure ea a provident quisquam officia, animi aut alias dicta est iste voluptatum, corporis, ipsam architecto possimus amet consequatur eum expedita.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur accusamus assumenda, maxime sed dolorem ab veritatis facere! Temporibus earum est eaque sequi fuga eveniet neque ipsam ut voluptates dolorem.
              </p>
              <br/>
              <br/>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius eos minus ipsam deserunt nisi! Dolore amet nobis, distinctio omnis quisquam placeat soluta, doloremque eius sit earum debitis enim saepe.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="mb--1">
              <h1>Postingan Lainnya</h1>
            </div>
            <div>
              <PhotoGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail