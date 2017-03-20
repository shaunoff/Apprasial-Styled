import React, { Component } from 'react';
import {TweenMax, Power2, TimelineMax} from "gsap";

export default class TransitionWrapper extends React.Component {
  componentWillEnter (callback) {

    const el = this.appsWrapper;
    TweenMax.from(el, 0.6, {opacity: 0, onComplete: callback});
  }

  componentWillLeave(callback) {
    const el = this.appsWrapper;
    TweenMax.to(el, 0.3, {opacity: 0, onComplete: callback});

    }
  render() {
    return (
      <div ref={(ref) => {this.appsWrapper = ref}} style={{position: 'absolute',width: "600px"}}>
          {React.cloneElement(this.props.children, {...this.props})}
      </div>
      )
    }


}
