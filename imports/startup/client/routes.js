import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';
import { render } from 'react-dom';

import App from '../../client/ui/layouts/App.js';
import Home from '../../client/ui/pages/Home';
import Login from '../../client/ui/pages/Login';
import Appraisal from '../../client/ui/pages/Appraisal.js';
import Team from '../../client/ui/pages/Team.js';
import Pdf from '../../client/ui/pages/Pdf.js';
import Google from '../../client/ui/pages/Google';
import Users from '../../client/ui/pages/Users';

const requireAuth = (nextState,replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()){
    replace({
      pathname: 'login',
      state: {nextPathname: nextState.location.pathname}

    })
  }
}

Meteor.startup(() => {
  render(
    <Router history={browserHistory}>
      <Route path="/" component={App} onEnter={requireAuth}>
        <IndexRoute component={Home} />
          <Route path="/appraisal/:_id" component={Appraisal}/>
          <Route path="/new" component={Home}/>
          <Route path="/team/:_id" component={Team}/>
          <Route path="/google" component={Google}/>
          <Route path="/users" component={Users}/>

      </Route>
      {/*<Route path="/" component={MainLayout} onEnter={requireAuth}>
        <IndexRoute component={App} />
        <Route path="/test" component={Test}/>
          <Route path="/new" component={New}/>
      </Route>*/}
      <Route path="/login" component={Login}/>
      <Route path="/google" component={Google}/>
    </Router>,
    document.getElementById('render-target')
  );
});
