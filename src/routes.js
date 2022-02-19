import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React, { useMemo, useState } from 'react'

import App from './App'
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'
import RegisterPosts from './RegisterPosts'
import RegisterUsers from './RegisterUsers'
import UpdatePost from './UpdatePost'
import MobileApp from './mobile/MobileApp'
import MobileProfile from './mobile/MobileProfile'
import MobileRegisterPosts from './mobile/MobileRegisterPosts'
import MobileRegisterUsers from './mobile/MobileRegisterUsers'
import MobileDashboard from './mobile/MobileDashboard'
import MobileUpdatePost from './mobile/MobileUpdatePost'
import MobileLogin from './mobile/MobileLogin'

function Routes() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isMobileScreen = useMemo(() => windowWidth <= 600, [windowWidth])

  return (
    <>
      {isMobileScreen ? (
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={MobileApp} />
              <Route path="/profile" component={MobileProfile} />
              <Route path="/register-posts" component={MobileRegisterPosts} />
              <Route path="/login" component={MobileLogin} />
              <Route path="/register-user" component={MobileRegisterUsers} />
              <Route path="/dashboard" component={MobileDashboard} />
              <Route path="/update-post" component={MobileUpdatePost} />
            </Switch>
          </BrowserRouter>
        </>
      ) : (
        <>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={App} />
              <Route path="/profile" component={Profile} />
              <Route path="/register-posts" component={RegisterPosts} />
              <Route path="/login" component={Login} />
              <Route path="/register-user" component={RegisterUsers} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/update-post" component={UpdatePost} />
            </Switch>
          </BrowserRouter>
        </>
      )}
    </>
  )
}

export default Routes
