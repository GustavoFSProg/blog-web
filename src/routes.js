import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile'
import Register from './RegisterPosts'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
