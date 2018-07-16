import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './Admin';
import Buttons from './pages/ui/Buttons';
import NoMatch from "./pages/NoMatch";

export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login}/>
          <Route path='/admin' render={() => (
            <Admin>
              <Switch>
                <Route path='/admin/ui/buttons' component={Buttons}/>
                <Route component={NoMatch}></Route>
              </Switch>
            </Admin>
          )}/>
        </App>
      </HashRouter>
    )
  }
}
