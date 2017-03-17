import React from 'react';


import Formsy from 'formsy-react';
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Rating from './Rating.js'
import Comment from './Comment.js'
import Button from '../button/Button.js'

export default class ManagerAchievements extends React.Component {
constructor(){
  super()
  this.state={
    test: 0,
    canSubmit: false,
  }
  this.handleClick = this.handleClick.bind(this)
}
shouldComponentUpdate(){
  if (this.state.canSubmit == false){
    return false
  }
  return true
}
handleSubmit(id,data){
  Meteor.call('insertManAchievements', data,id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        this.props.advance()
      }
    });
}
previous(){

  this.props.previous()
}
handleClick(){

  this.props.advance()
}
enableButton() {
      this.setState({
        canSubmit: true
      });
    }
disableButton() {
      this.setState({
        canSubmit: false
      });
    }
render(){
  const {currentAppraisal = {}} = this.props.targetUser
  const {achievements = {}} = currentAppraisal
  const {employee = {}, manager ={}} = achievements
  const {managerAccess} = this.props
  const {stage}= this.props

  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px',background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Manager Assessment: Achievements
        </div>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. Accomplishments: <span style={{color: "#ccc"}}>How would you rate the accomplishments achieved over the last year? Describe the biggest contributing factors to that rating</span>
        </div>
        <div style={{display: 'flex'}}>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        <DummyRating value={employee.accompRating} name="accompRating" validations="isExisty" required/>
        <DummyComment value={employee.accompComment} rows={4} name="accompComment" validations="isExisty" required/>
        </div>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        {React.createElement(managerAccess ? Rating : DummyRating,{name: "accompRating", value: manager.accompRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "accompComment", value: manager.accompComment, validations:"isExisty", required: true})}

        </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. Professional Development: <span style={{color: "#ccc"}}>What level of professional development has been achieved this year? Describe the steps taken.</span>
      </div>
      <div style={{display: 'flex'}}>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>

      <DummyRating value={employee.develRating} name="develRating" validations="isExisty" required/>
      <DummyComment value={employee.develComment} rows={4} name="develComment" validations="isExisty" required/>
      </div>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        {React.createElement(managerAccess ? Rating : DummyRating,{name: "develRating", value: manager.develRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "develComment", value: manager.develComment, validations:"isExisty", required: true})}

      </div>
      </div>

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. Proffesional Goals: <span style={{color: "#ccc"}}>How well did you accomplish your goals this year? Describe how you achieved them.</span>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
    <DummyRating value={employee.goalsRating} name="goalsRating" validations="isExisty" required/>
    <DummyComment value={employee.goalsComment} rows={4} name="goalsComment" validations="isExisty" required/>
    </div>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
      {React.createElement(managerAccess ? Rating : DummyRating,{name: "goalsRating", value: manager.goalsRating, validations:"isExisty", required: true})}
      {React.createElement(managerAccess ? Comment : DummyComment,{name: "goalsComment", value: manager.goalsComment, validations:"isExisty", required: true})}

    </div>
    </div>


    </div>

    {stage == 7 ? "":
    <div style={{display: 'flex',margin: '10px'}}>
    <Button type="button" click={this.previous.bind(this)}>Previous</Button>
    <div style={{flex: '1'}}></div>
    <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
    </div>
  }
    </Formsy.Form>


    </div>
  )
}
}
