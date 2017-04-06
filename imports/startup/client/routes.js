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
import President from '../../client/ui/pages/President';
import Login from '../../client/ui/pages/Login';
import AppraisalWrapper from '../../client/ui/pages/AppraisalWrapper.js';
import Team from '../../client/ui/pages/Team.js';
import Pdf from '../../client/ui/pages/Pdf.js';
import Google from '../../client/ui/pages/Google';
import UsersWrapper from '../../client/ui/pages/UsersWrapper';
import Test1 from '../../client/ui/pages/Test1.js';
import Test2 from '../../client/ui/pages/Test2.js';


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
      <Route path="/" component={App} >
          <IndexRoute component={Home} onEnter={requireAuth}/>
          <Route path="/appraisal/:_id" component={AppraisalWrapper} onEnter={requireAuth}/>
          <Route path="/new" component={Home} onEnter={requireAuth}/>
          <Route path="/team/:_id" component={Team} onEnter={requireAuth}/>
          <Route path="/google" component={Google} onEnter={requireAuth}/>
          <Route path="/users" component={UsersWrapper} onEnter={requireAuth}/>
          <Route path="/president" component={President} onEnter={requireAuth}/>
      </Route>

      <Route path="/login" component={Login}/>
      <Route path="/google" component={Google}/>
    </Router>,
    document.getElementById('render-target')
  );
});
