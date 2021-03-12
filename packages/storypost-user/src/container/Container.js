import React from 'react'
import {
  Switch,
  Route } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'
import routes from '../routes'

import './Container.css'

const Container = () => {
  return (
    <div className="storypost-container">
      <Header />
      <div className="storypost-main-content">
        <Switch>
          { routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              name={route.name} >
              <route.component />
            </Route>
          )) }
        </Switch>
      </div>
    </div>
  )
}

export default Container