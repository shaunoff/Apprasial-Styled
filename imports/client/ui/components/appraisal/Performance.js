import React from 'react';


import Formsy from 'formsy-react';

import Rating from './Rating.js'
import Comment from './Comment.js'
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Button from '../button/Button.js'

export default class Performance extends React.Component {
constructor(){
  super()
  this.state={
    test: 0,
    canSubmit: false,
  }
}
handleSubmit(id,data){

  Meteor.call('insertPerformance', data, id, (err, res) => {
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
  console.log(this.props.targetUser)
  const {currentAppraisal = {}} = this.props.targetUser
  const {performance = {}} = currentAppraisal
  const {employee = {}} = competencies
  const {managerAccess} = this.props
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px',background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self-Assessment: Competencies
        </div>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. Communication: <span style={{color: "#ccc"}}>Ability to explain, convince and be understood in oral and written communications with employees and clients at all levels. Also, consider evidence of an understanding of people's views and the effect of own actions on others.</span>
        </div>
        {React.createElement(managerAccess ? DummyRating : Rating,{name: "commRating", value: employee.commRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? DummyComment : Comment,{name: "commComment", rows: 4, value: employee.commComment, validations:"isExisty", required: true})}

      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. Cooperation: <span style={{color: "#ccc"}}>Ability to demonstrate a spirit of willingness and interest when working with superior(s), co-workers and clients.</span>
      </div>
      {React.createElement(managerAccess ? DummyRating : Rating,{name: "coopRating", value: employee.coopRating, validations:"isExisty", required: true})}
      {React.createElement(managerAccess ? DummyComment : Comment,{name: "coopComment", rows: 4, value: employee.coopComment, validations:"isExisty", required: true})}

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. Judgement and Initiative: <span style={{color: "#ccc"}}>Ability to identify and appropriately solve or refer problems. Willingness to expand responsibilities.</span>
    </div>
    {React.createElement(managerAccess ? DummyRating : Rating,{name: "judgeRating", value: employee.judgeRating, validations:"isExisty", required: true})}
    {React.createElement(managerAccess ? DummyComment : Comment,{name: "judgeComment", rows: 4, value: employee.judgeComment, validations:"isExisty", required: true})}


    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. Time Management: <span style={{color: "#ccc"}}>Ability to organize time effectively. Also consider ability to set priorities, anticipate problems, estimate time requirements and meet deadlines.</span>
    </div>
    {React.createElement(managerAccess ? DummyRating : Rating,{name: "timeRating", value: employee.timeRating, validations:"isExisty", required: true})}
    {React.createElement(managerAccess ? DummyComment : Comment,{name: "timeComment", rows: 4, value: employee.timeComment, validations:"isExisty", required: true})}



    </div>
    <div style={{display: 'flex',margin: '10px'}}>
    <div style={{flex: '1'}}></div>
    <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
    </div>
    </Formsy.Form>


    </div>
  )
}
}
