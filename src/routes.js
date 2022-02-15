import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Dashboard from './Dashboard'
import Login from './Login'
import Profile from './Profile'
import RegisterPosts from './RegisterPosts'
import RegisterUsers from './RegisterUsers'
import UpdatePost from './UpdatePost'

function Routes() {
  return (
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
  )
}

export default Routes
