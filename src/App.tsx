import React from 'react'
import 'antd/dist/antd.css'
import './styles/App.scss'
import { render } from 'react-dom'
import { Route, Switch, HashRouter } from 'react-router-dom'
// import NewApp from './pages/App/App'
import routes from './pages/routes'
// 动态生产一个div
const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)
const App = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" component={routes} />
        </Switch>
      </HashRouter>
      {/* <NewApp /> */}
      {/* <div className="App"> */}
      {/* <div className="head">111</div> */}
      {/* <div className="main"> */}
      {/* <div className="main_left">111</div> */}
      {/* <div className="main_right"> */}
      {/* <HashRouter> */}
      {/* <Switch> */}
      {/* <Route path="/" component={routes} /> */}
      {/* </Switch> */}
      {/* </HashRouter> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  )
}
render(<App />, mainElement)
