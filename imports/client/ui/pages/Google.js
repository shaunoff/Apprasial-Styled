import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data'

class Google extends React.Component {
  noteTest(){
    Meteor.call('addNotification',(err, res) => {
        if(err) {
          console.log(err)
        }
        if(!err) {
          console.log('success',res)

        }
      });
  }
  handleClick(){
    googleQuery.set()
    Meteor.call('directory',(err, res) => {
        if(err) {
          console.log('error')
        }
        if(!err) {
          console.log('success', res)
          googleQuery.set(res)
        }
      });
  }
  componentDidMount(){
    Meteor.call('directory',(err, res) => {
        if(err) {
          console.log('error')
        }
        if(!err) {
          googleQuery.set(res)
        }
      });
  }
  render() {
    if (!this.props.google) {
      return <div>loading...</div>
    }
    if (this.props.google) {
      return (
        <div>
          <div onClick={this.handleClick.bind(this)}>click</div>
            {this.props.google.data && this.props.google.data.users.map((field,index)=>{
            return <div key={index}>{field.name.fullName}</div>
          })}
          <div onClick={this.noteTest.bind(this)}>fghfghjfdghjdfghjdfgshjfgdshj</div>
        </div>
      )
    }

  }
}

const googleQuery = new ReactiveVar();


export  default createContainer(()=>{
  const showAll = Roles.userIsInRole(Meteor.userId(), 'admin')
  let userSub =  Meteor.subscribe(showAll ? 'allUsers' : 'currentUser');

  //let userSub = Meteor.subscribe("currentUser");
  return {
    google: googleQuery.get(),
    ready: userSub.ready(),
    users: Meteor.users.find({}).fetch(),
  }
}, Google);
