import React, { Component } from 'react';
import { LoginButtons } from 'meteor/okgrow:accounts-ui-react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import {StyleRoot} from 'radium';
import AppModal from '../components/modal/AppModal.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/header/Header.js'
import Sidebar from '../components/sidebar/Sidebar.js'
import Notifications from '../../../api/notifications/notifications'



import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class App extends Component {

  render() {

    if (!this.props.subsReady) {
        return <div>Loading</div>;
    }
    if (this.props.subsReady) {
      currentId.set(this.props.currentUser[0]._id)
      const path = this.props.location.pathname
      return  <StyleRoot>
                <MuiThemeProvider>
                  <div style={{display: 'flex', width: "calc(100% - 2px)"}}>
                    <Sidebar path={path}/>
                    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                      <Header />
                      <div style={{flex: '1', background: '#F8FAFB'}}>
                        {React.cloneElement(this.props.children, {user: this.props.currentUser, notifications: this.props.notifications})}
                      </div>
                    </div>
                  </div>
                </MuiThemeProvider>
            </StyleRoot>
    }
  }
}

const currentId = new ReactiveVar('');

export default createContainer(({params}) => {
    let notificationsSub = Meteor.subscribe('allNotifications');
    let currentUserSub =  Meteor.subscribe('currentUser');
    return {
      subsReady: currentUserSub.ready() && notificationsSub.ready(),
      currentUser: Meteor.users.findFromPublication('currentUser').fetch(),
      notifications: Notifications.find({targetUser: currentId.get()},{sort: {
        'added': -1}}).fetch(),

    }
  }, App);
