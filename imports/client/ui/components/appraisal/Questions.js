import React from 'react';


import Formsy from 'formsy-react';

import Rating from './Rating.js'
import Comment from './Comment.js'
import DummyComment from './DummyComment.js'
import Button from '../button/Button.js'


export default class Questions extends React.Component {
constructor(){
  super()
  this.state={
    test: 0
  }
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
handleSubmit(id,data){
  Meteor.call('insertQuestions', data, id,(err, res) => {
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
render(){
    const {currentAppraisal = {}} = this.props.targetUser
    const {questions = {}} = currentAppraisal
    const {employee = {}} = questions
    const {managerAccess} = this.props
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px', background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self-Assessment: Questions
        </div>
        <Formsy.Form ref="form"  onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. What are your principle strengths
        </div>

        {React.createElement(managerAccess ? DummyComment : Comment,{name: "q1comment", rows: 4, value: employee.q1comment, validations:"isExisty", required: true})}

      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. What have been your most important accomplishments this year?
      </div>
      {React.createElement(managerAccess ? DummyComment : Comment,{name: "q2comment", rows: 4, value: employee.q2comment, validations:"isExisty", required: true})}

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. How well did you accomplish last year's goals?
    </div>
    {React.createElement(managerAccess ? DummyComment : Comment,{name: "q3comment", rows: 4, value: employee.q3comment, validations:"isExisty", required: true})}

  </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. What do you think are the areas in which you need to improve and what training is needed to achieve these imrovements??
    </div>
      {React.createElement(managerAccess ? DummyComment : Comment,{name: "q4comment", rows: 4, value: employee.q4comment, validations:"isExisty", required: true})}


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
