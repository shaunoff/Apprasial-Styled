import React, { Component } from 'react';
import {TweenMax, Power2, TimelineMax} from "gsap";
import GSAP from 'react-gsap-enhancer'

function appearAnim(utils) {
  return new TimelineMax()
    .from(utils.target, 0.8, {
      opacity: 0,
      x: -500,

      onComplete: utils.options.callback,
    })
}

function leaveAnim(utils) {
  return new TimelineMax()
  .to(utils.target, 0.3, {
    scale: 0.8,
    opacity: 0.8,


  })
    .to(utils.target, 0.4, {
      opacity: 0,
      x: 500,

      onComplete: utils.options.callback,
    })
}


class Test1 extends Component {
  componentWillEnter (callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
  }

  componentWillLeave(callback) {
    const el = this.container;
    TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});

    }
  render() {

    return (
      <div ref={c => this.container = c} style={{position: 'absolute',width: '500px', height:'500px',background: 'blue'}}></div>
    )
  }
}
export default Test1
