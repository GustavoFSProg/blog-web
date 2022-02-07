import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Profile from './Profile'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
