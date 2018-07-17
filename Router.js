import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Admin from './Admin';
import Buttons from './pages/ui/Buttons';
import Modals from './pages/ui/Modals';
import Loadings from './pages/ui/Loadings';
import Notifications from './pages/ui/Notifications';
import Messages from './pages/ui/Messages';
import Tabs from './pages/ui/Tabs';
import Gallery from './pages/ui/Gallery';
import Carousels from './pages/ui/Carousels';
import NoMatch from './pages/NoMatch';
import FormLogin from './pages/form/login';
import FormRegister from './pages/form/register';
import BasicTable from './pages/table/BasicTable';
import HighTable from './pages/table/HighTable';
import Test from "./Test";

export default class Router extends React.Component {
  render() {
    console.log(Buttons);
    return (
      <HashRouter>
        <App>
          <Route path='/login' component={Login} exact/>
          <Route path='/' render={() => (
            <Admin>
              <Switch>
                <Route path="/ui/buttons" component={Buttons}/>
                <Route path="/ui/modals" component={Modals}/>
                <Route path="/ui/loadings" component={Loadings}/>
                <Route path="/ui/notifications" component={Notifications}/>
                <Route path="/ui/messages" component={Messages}/>
                <Route path="/ui/tabs" component={Tabs}/>
                <Route path="/ui/gallery" component={Gallery}/>
                <Route path="/ui/carousels" component={Carousels}/>

                <Route path="/form/login" component={FormLogin}/>
                <Route path="/form/register" component={FormRegister}/>
                <Route path="/table/basic" component={BasicTable}/>
                <Route path="/table/high" component={HighTable}/>
                <Route component={NoMatch}/>
              </Switch>
            </Admin>
          )}/>
          <Route path="/test" component={Test} exact/>
        </App>
      </HashRouter>
    )
  }
}
