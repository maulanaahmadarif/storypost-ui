import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

import Input from '../../components/Form/Input'
import TextArea from '../../components/Form/TextArea'
import Button from '../../components/Elements/Button'

import './EditProfile.css'

const EditProfile = () => {
  return (
    <div className="storypost-edit-profile">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="edit-profile-section">
              <div className="mb--1">
                <h3>Edit Profile</h3>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="ava ava-profile-edit">
                    <img src="https://image.flaticon.com/icons/png/512/147/147144.png" alt=""/>
                  </div>
                  <div>
                    <p className="mb--0 text--underline text--size-14 text--center">Change profile picture</p>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form--group">
                        <label htmlFor="fName">First Name</label>
                        <Input type="text" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form--group">
                        <label htmlFor="lName">Last Name</label>
                        <Input type="text" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form--group">
                        <label htmlFor="lName">Email Address</label>
                        <Input type="email" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-profile-section">
              <div className="mb--1">
                <h3>About</h3>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form--group">
                    <label htmlFor="fName">Location</label>
                    <Input type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form--group">
                    <label htmlFor="lName">Personal Site</label>
                    <Input type="text" placeholder="https://" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form--group">
                    <label htmlFor="bio">Bio</label>
                    <TextArea name="bio" id="bio" />
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-profile-section">
              <div className="mb--1">
                <h3>Social</h3>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form--group">
                    <label htmlFor="twitter">Twitter</label>
                    <Input type="text" icon={faTwitter} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form--group">
                    <label htmlFor="lName">Instagram</label>
                    <Input type="text" icon={faInstagram} />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="row">
                <div className="col">
                  <Button text="Update account" className="btn-update-profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfile