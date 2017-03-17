import React from 'react';
import Formsy from 'formsy-react';
import Rating from './Rating.js'
import Comment from './Comment.js'
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Button from '../button/Button.js'

export default class Achievements extends React.Component {
constructor(){
  super()
  this.state={
    test: 0,
    canSubmit: false,
  }
}
previous(){

  this.props.previous()
}

handleSubmit(id,data){

  Meteor.call('insertAchievements', data, id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        this.props.advance()
      }
    });
}
enableButton() {
  this.state.canSubmit == true ? "": this.setState({
    canSubmit: true
  });
    }
disableButton() {
      this.state.canSubmit == false ? "": this.setState({
        canSubmit: false
      });
    }
render(){
  console.log('render')
  const {currentAppraisal = {}} = this.props.targetUser
  const {achievements = {}} = currentAppraisal
  const {employee = {}} = achievements
  const {managerAccess} = this.props
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px',background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self-Assessment: Achievements
        </div>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. Accomplishments: <span style={{color: "#ccc"}}>How would you rate the accomplishments achieved over the last year? Describe the biggest contributing factors to that rating</span>
        </div>
        {React.createElement(managerAccess ? DummyRating : Rating,{name: "accompRating", value: employee.accompRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? DummyComment : Comment,{name: "accompComment", rows: 4, value: employee.accompComment, validations:"isExisty", required: true})}

      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. Professional Development: <span style={{color: "#ccc"}}>What level of professional development has been achieved this year? Describe the steps taken. </span>
      </div>
      {React.createElement(managerAccess ? DummyRating : Rating,{name: "develRating", value: employee.develRating, validations:"isExisty", required: true})}
      {React.createElement(managerAccess ? DummyComment : Comment,{name: "develComment", rows: 4, value: employee.develComment, validations:"isExisty", required: true})}

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. Professional Goals: <span style={{color: "#ccc"}}>How well did you accomplish your goals this year? Describe how you achieved them.</span>
    </div>
    {React.createElement(managerAccess ? DummyRating : Rating,{name: "goalsRating", value: employee.goalsRating, validations:"isExisty", required: true})}
    {React.createElement(managerAccess ? DummyComment : Comment,{name: "goalsComment", rows: 4, value: employee.goalsComment, validations:"isExisty", required: true})}


    </div>

    <div style={{display: 'flex',margin: '10px'}}>
    <Button type="button" click={this.previous.bind(this)}>Previous</Button>
    <div style={{flex: '1'}}></div>
    <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
    </div>
    </Formsy.Form>


    </div>
  )
}
}
