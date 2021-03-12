import React from 'react'

import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="storypost-generic-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className="text--big text--center">
              Not Found :(
            </h1>
            <h3 className="text--center text-weight-normal">
              you lost? click <Link to="/"><span className="text--underline">here</span></Link> to guide you the right way
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound