import React, { Component } from 'react';
import Users from './Users.js'
import {TweenMax, Power2, TimelineMax} from "gsap";

export default class UsersWrapper extends React.Component {
  componentWillEnter (callback) {
    console.log("ghjghjkghjkgfd")
    const el = this.usersWrapper;
    TweenMax.from(el, 0.6, {opacity: 0, onComplete: callback});
  }

  componentWillLeave(callback) {
    const el = this.usersWrapper;
    TweenMax.to(el, 0.3, {opacity: 0, onComplete: callback});

    }
  render() {
    return (
      <div ref={(ref) => {this.usersWrapper = ref}} style={{position: 'absolute',width: "calc(100% - 160px)"}}>
        <Users {...this.props}/>
      </div>
      )
    }


}
