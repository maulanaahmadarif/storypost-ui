import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import className from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faGlobeAsia, faMapMarkerAlt, faImage, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Button from '../../components/Elements/Button'
import PhotoGrid from '../../components/Photo/PhotoGrid'

import './Profile.css'

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="storypost-profile">
      <div className="container">
        <div className="row justify-content-center category-title-row">
          <div className="col-md-8">
            <div className="profile-bio-wrapper">
              <div className="mr--2">
                <div className="ava ava-profile">
                  <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
                </div>
              </div>
              <div>
                <div className="fx align-items-center profile-name">
                  <div className="mr--1">
                    <h1 className="text--big mb--0">
                      Arif Maulana
                    </h1>
                  </div>
                  <div>
                    <Link to="/profile/edit">
                      <Button text={<><FontAwesomeIcon icon={faEdit} /> Edit Profile</>} className="profile-edit-button" />
                    </Link>
                  </div>
                </div>
                <div className="mb--1">
                  <p>
                    Food stylist &amp; photographer. Loves nature and healthy food . Always happy to drink a good cup of coffee ☕️<br/>Girl from Poland living in Uk
                  </p>
                </div>
                <div>
                  <div className="fx profile-icon-container">
                    <span className="profile-icon"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                    <span>Indonesia</span>
                  </div>
                  <div className="fx profile-icon-container">
                    <span className="profile-icon"><FontAwesomeIcon icon={faGlobeAsia} /></span>
                    <span>https://ahmadarifmaulana.com</span>
                  </div>
                  <div className="fx profile-icon-container">
                    <span className="profile-icon"><FontAwesomeIcon icon={faInstagram} /></span>
                    <span>maulana__arif</span>
                  </div>
                  <div className="fx profile-icon-container">
                    <span className="profile-icon"><FontAwesomeIcon icon={faTwitter} /></span>
                    <span>maulana__arif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-divider">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="fx profile-tab-container">
                <div className={className('fx', 'profile-tab', { 'profile-tab--active': activeTab === 0 })} onClick={() => setActiveTab(0)}>
                  <div className="mr--1">
                    <span><FontAwesomeIcon icon={faImage} /></span>
                  </div>
                  <div>
                    Photos 84
                  </div>
                </div>
                <div className={className('fx', 'profile-tab', { 'profile-tab--active': activeTab === 1 })} onClick={() => setActiveTab(1)}>
                  <div className="mr--1">
                    <span><FontAwesomeIcon icon={faHeart} /></span>
                  </div>
                  <div>
                    Likes 0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <PhotoGrid />
      </div>
    </div>
  )
}

export default Profile