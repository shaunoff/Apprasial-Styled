import React from 'react';


import Formsy from 'formsy-react';

import DummyComment from './DummyComment.js'
import Comment from './Comment.js'
import Button from '../button/Button.js'


export default class ManagerQuestions extends React.Component {
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
  console.log(data)
  Meteor.call('insertManQuestions', data,id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        this.props.advance()
      }
    });
}
handleClick(){
  this.props.advance()
}
previous(){

  this.props.previous()
}
render(){
    const {questions = {}} = Meteor.user()
    const {employee = {}, manager ={}} = questions
    const {managerAccess} = this.props
    let {stage} = this.props
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
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex',flex: '1'}}>
            <DummyComment value={employee.q1comment} rows={4} name="q1comment"/>
          </div>
          <div style={{display: 'flex',flex: '1'}}>
              {React.createElement(managerAccess ? Comment : DummyComment,{name: "manQ1comment", value: manager.manQ1comment, rows: 4, validations:"isExisty", required: true})}

          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. What have been your most important accomplishments this year?
      </div>
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex',flex: '1'}}>
          <DummyComment value={employee.q2comment} rows={4} name="q2comment"/>
        </div>
        <div style={{display: 'flex',flex: '1'}}>
          {React.createElement(managerAccess ? Comment : DummyComment,{name: "manQ2comment", value: manager.manQ2comment, rows: 4, validations:"isExisty", required: true})}

        </div>
      </div>

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. How well did you accomplish last year's goals?
    </div>
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex',flex: '1'}}>
        <DummyComment value={employee.q3comment} rows={4} name="q3comment"/>
      </div>
      <div style={{display: 'flex',flex: '1'}}>
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "manQ3comment", value: manager.manQ3comment, rows: 4, validations:"isExisty", required: true})}

      </div>
    </div>


  </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. What do you think are the areas in which you need to improve and what training is needed to achieve these imrovements??
    </div>
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex',flex: '1'}}>
        <DummyComment value={employee.q4comment} rows={4} name="q4comment"/>
      </div>
      <div style={{display: 'flex',flex: '1'}}>
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "manQ4comment", value: manager.manQ4comment, rows: 4, validations:"isExisty", required: true})}

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
