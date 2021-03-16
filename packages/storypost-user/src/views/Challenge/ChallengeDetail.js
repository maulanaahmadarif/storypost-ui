import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrophy, faMoneyBill, faImage, faUserFriends } from '@fortawesome/free-solid-svg-icons'

import Button from '../../components/Elements/Button'
import PhotoGrid from '../../components/Photo/PhotoGrid'

import './ChallengeDetail.css'

const ChallengeDetail = () => {
  return (
    <div className="storypost-challenge">
      <div className="container">
        <div className="row mb--2">
          <div className="col-md-8">
            <h1 className="text--big">
              Community
            </h1>
            <h3 className="text-weight-normal">
              Explore the world through topics of beautiful photos free to use under the
            </h3>
          </div>
          <div className="col-md-4">
            <div className="challenge-detail-box">
              <div className="challenge-detail-box-item">
                <div className="challenge-detail-box-item-icon">
                  <span><FontAwesomeIcon icon={faTrophy} /></span>
                </div>
                <div className="challenge-detail-box-item-text">
                  <span>Winner</span>
                </div>
              </div>
              <div className="challenge-detail-box-item">
                <div className="challenge-detail-box-item-icon">
                  <span><FontAwesomeIcon icon={faMoneyBill} /></span>
                </div>
                <div className="challenge-detail-box-item-text">
                  <span>Price</span>
                </div>
              </div>
              <div className="challenge-detail-box-item">
                <div className="challenge-detail-box-item-icon">
                  <span><FontAwesomeIcon icon={faImage} /></span>
                </div>
                <div className="challenge-detail-box-item-text">
                  <span>Photos</span>
                </div>
                <div className="challenge-detail-box-item-value">
                  <strong>7.7K</strong>
                </div>
              </div>
              <div className="challenge-detail-box-item">
                <div className="challenge-detail-box-item-icon">
                  <span><FontAwesomeIcon icon={faUserFriends} /></span>
                </div>
                <div className="challenge-detail-box-item-text">
                  <span>Contributors</span>
                </div>
                <div className="challenge-detail-box-item-value">
                  <strong>10</strong>
                </div>
              </div>
            </div>
            <div>
              <Button text={<span>Submit to <strong>Weekly Challenge</strong></span>} className="text--size-14 btn-update-profile" />
            </div>
          </div>
        </div>
        <div className="row">
          <PhotoGrid />
        </div>
      </div>
    </div>
  )
}

export default ChallengeDetail