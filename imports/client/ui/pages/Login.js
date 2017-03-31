import React, { Component } from 'react';
import {LoginButtons} from 'meteor/okgrow:accounts-ui-react';
import {browserHistory} from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Button from '../components/button/Button.js';
import {TweenMax, Power2, TimelineMax} from "gsap";

 class Login extends React.Component {
   constructor(){
     super()
     console.log("gfhjfgjdhfgjh")
   }
  googleLogin() {
    Meteor.loginWithGoogle((error) =>{
     console.log(error)
    });

  }
  componentDidMount(){
    let tl = new TimelineMax();
    tl.fromTo(this.image, 0.5, {opacity: 0},{opacity: 1});
    tl.fromTo(this.image2, 0.5, {opacity: 0},{opacity: 1},0);
    tl.fromTo(this.appraisal, 0.8, {scale: 0, opacity: 0},{scale: 1,opacity: 1},0.4);
    tl.fromTo(this.welcome, 0.8, {opacity: 0, x: -100},{opacity: 1, x:0},0.8);
    tl.fromTo(this.login, 0.8, {opacity: 0, x: -100},{opacity: 1, x:0},0.8);
  }
  componentDidUpdate(){
    if (Meteor.user()){
      browserHistory.push('/')
    }
  }
  render() {

      if (Meteor.loggingIn()){
        return (
          <main style={{height: '100vh',display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: "center"}}>
            <div style={{fontSize: '28px',color: '#6bada7', marginBottom: '30px'}}>Logging in User.....</div>
          </main>
        )
      }

      return (
        <main style={{height: '100vh',display: 'flex',flexDirection:'column', justifyContent: 'center', alignItems: "center"}}>
          <img ref={(ref)=>{this.image = ref}} style={{width: '300px',marginBottom: '30px'}} src="/master.png"/>
          <img ref={(ref)=>{this.image2 = ref}} style={{width: '400px'}} src="/appraisal.png"/>
          <div ref={(ref)=>{this.appraisal = ref}} style={{fontSize: '40px',color: '#6bada7', marginBottom: '30px'}}>Appraisals</div>
          <div ref={(ref)=>{this.welcome = ref}} style={{fontSize: '20px',color: '#858585', marginBottom: '10px'}}>Welcome to P3I's Appraisal site!</div>

          <div ref={(ref)=>{this.login = ref}}>
            <Button  click={this.googleLogin.bind(this)}>Login Here</Button>
          </div>


        </main>

      )}
}

export default createContainer((props) => {
    return {
      user: Meteor.user(),


    }
  }, Login);
