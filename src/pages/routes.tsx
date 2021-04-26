import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './home/index'
import setUp from './setUp/index'
import Button from '../components/Button/index'
import Greetings from '../components/Greetings/index'
import fail from '../components/fail/index'
class routes extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/setUp" component={setUp} />
                    <Route path="/Button" component={Button} />
                    <Route path="/Greetings" component={Greetings} />
                    <Route path="/fail" component={fail} />
                    {/* <Redirect to="/fail"   /> */}
                </Switch>
            </>
        )
    }
}
export default routes