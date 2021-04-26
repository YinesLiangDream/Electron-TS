import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import routes from '../routes'
import './App.scss'
class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className="head">111</div>
        <div className="main">
          <div className="main_left">111</div>
          <div className="main_right">
            <HashRouter>
              <Switch>
                <Route path="/" component={routes} />
              </Switch>
            </HashRouter>
          </div>
        </div>
      </div>
    )
  }
}
export default App
