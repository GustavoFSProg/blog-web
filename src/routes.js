import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Profile from './Profile'
import Register from './RegisterPosts'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
