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
import Appraisals from '../../../api/appraisals/appraisals.js'
import ReactTransitionGroup from 'react-addons-transition-group'


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

class App extends Component {
  constructor(){
    super()
    this.state={
      width: 0,
      height: 0
    }
  }
  componentDidMount(){
    this.setState({
      width:window.innerWidth,
      height:window.innerHeight,
    })
  }
  render() {
    if (!this.props.subsReady) {
        return <div>Loading</div>;
    }
    if (this.props.subsReady) {
      currentId.set(this.props.currentUser[0]._id)
      const path = this.props.location.pathname
      console.log(path)
      return  <StyleRoot>
                <MuiThemeProvider>
                  <div style={{display:'-webkit-flex',display: 'flex', width: `${this.state.width - 2}px`, height: this.state.height,background: '#F8FAFB'}}>
                    <Sidebar path={path}/>
                    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
                      <Header title={path}/>
                      <div style={{display: 'flex',flex: '1'}}>
                        <ReactTransitionGroup>
                          {React.cloneElement(this.props.children, {key: path, user: this.props.currentUser, notifications: this.props.notifications, appraisals: this.props.currentUserAppraisals})}
                        </ReactTransitionGroup>
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
    let userAppraisalSub =  Meteor.subscribe('currentUserAppraisals');
    return {
      subsReady: currentUserSub.ready() && notificationsSub.ready() && userAppraisalSub.ready(),
      currentUser: Meteor.users.findFromPublication('currentUser').fetch(),
      currentUserAppraisals: Appraisals.findFromPublication('currentUserAppraisals').fetch(),
      notifications: Notifications.find({targetUser: currentId.get()},{sort: {
        'added': -1}}).fetch(),

    }
  }, App);
