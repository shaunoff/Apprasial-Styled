import React, { Component } from 'react';
import Appraisal from './Appraisal.js'
import {TweenMax, Power2, TimelineMax} from "gsap";

export default class AppraisalWrapper extends React.Component {
  componentWillEnter (callback) {
    console.log("ghjghjkghjkgfd")
    const el = this.appsWrapper;
    TweenMax.from(el, 0.6, {opacity: 0, onComplete: callback});
  }

  componentWillLeave(callback) {
    const el = this.appsWrapper;
    TweenMax.to(el, 0.3, {opacity: 0, onComplete: callback});

    }
  render() {
    return (
      <div ref={(ref) => {this.appsWrapper = ref}} style={{position: 'absolute',width: "calc(100% - 160px)"}}>
        <Appraisal {...this.props}/>
      </div>
      )
    }


}
