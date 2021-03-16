import React from 'react'
import { Link } from 'react-router-dom'

import ChallengeBox from '../../components/Challenge/ChallengeBox'

import './index.css'

const Challenge = () => {
  return (
    <div className="storypost-challenge">
      <div className="container">
        <div className="row category-title-row justify-content-center">
          <div className="col-md-8">
            <h1 className="text--center text--big">
              Weekly Challenge
            </h1>
            <h3 className="text--center text-weight-normal">
              Stories from the community powering the internet visual
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Active Challenge</h2>
          </div>
        </div>
        <div className="row mb--2">
          <div className="col-md-6">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h2>Past Challenge</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/challenge/community">
              <ChallengeBox
                title="Title"
                category="Comunity"
                text="From epic drone shots to inspiring moments in nature, find free HD wallpapers worthy of your mobile and desktop screens. Finally."
                author="Storypost"
                date="14 Maret 2021" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Challenge