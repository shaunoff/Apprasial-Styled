import React from 'react';


import Formsy from 'formsy-react';
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Rating from './Rating.js'
import Comment from './Comment.js'
import Button from '../button/Button.js'

export default class ManagerCompetencies extends React.Component {
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
  Meteor.call('insertManCompetencies', data,id, (err, res) => {
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
componentWillEnter (callback) {
      console.log("manComp triggered")
      const el = this.manCompWrapper;
      let tl = new TimelineMax();
      tl
      .fromTo(el, 1, {y: 500,opacity: 0,scale: 0.6},{y:0,opacity: 0.8,scale: 0.6},0.6)
      .to(el, 0.4, {
        scale: 1,
        opacity: 1,
        onComplete: callback,
      })

    }

    componentWillLeave(callback) {
      console.log("manComp triggered")
      const el = this.manCompWrapper;
      let tl = new TimelineMax();
      tl
        .to(el, 0.5, {
          scale: 0.6,
          opacity: 0.8
        })
        .to(el, 1, {
          opacity: 0,
          y: -500,

          onComplete: callback,
        },0.6)
      }
render(){
  const {currentAppraisal = {}} = this.props.targetUser
  const {competencies = {}} = currentAppraisal
  const {employee = {}, manager ={}} = competencies
  const {managerAccess} = this.props
  let {stage} = this.props

  return(

    <div ref={(ref) => {this.manCompWrapper = ref}} style={{position:  'absolute', display: 'flex', overflow: 'scroll',height: "calc(100vh - 95px)",flexDirection: 'column',margin: '15px',width: "calc(100vw - 380px)", display: 'flex',border: "2px solid #ccc", borderRadius: '8px',background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Manager Assessment: Competencies
        </div>
        <Formsy.Form ref="form" onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>


        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          1. Communication: <span style={{color: "#ccc"}}>Ability to explain, convince and be understood in oral and written communications with employees and clients at all levels. Also, consider evidence of an understanding of people's views and the effect of own actions on others.</span>
        </div>
        <div style={{display: 'flex'}}>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        <DummyRating value={employee.commRating} name="commRating" validations="isExisty" required/>
        <DummyComment value={employee.commComment} rows={4} name="commComment" validations="isExisty" required/>
        </div>
        <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        {React.createElement(managerAccess ? Rating : DummyRating,{name: "manCommRating", value: manager.manCommRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "manCommComment", value: manager.manCommComment, validations:"isExisty", required: true})}

        </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: "column"}}>
      <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        2. Cooperation: <span style={{color: "#ccc"}}>Ability to demonstrate a spirit of willingness and interest when working with superior(s), co-workers and clients.</span>
      </div>
      <div style={{display: 'flex'}}>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>

      <DummyRating value={employee.coopRating} name="coopRating" validations="isExisty" required/>
      <DummyComment value={employee.coopComment} rows={4} name="coopComment" validations="isExisty" required/>
      </div>
      <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
        {React.createElement(managerAccess ? Rating : DummyRating,{name: "manCoopRating", value: manager.manCoopRating, validations:"isExisty", required: true})}
        {React.createElement(managerAccess ? Comment : DummyComment,{name: "manCoopComment", value: manager.manCoopComment, validations:"isExisty", required: true})}

      </div>
      </div>

    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      3. Judgement and Initiative: <span style={{color: "#ccc"}}>Ability to identify and appropriately solve or refer problems. Willingness to expand responsibilities.</span>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
    <DummyRating value={employee.judgeRating} name="judgeRating" validations="isExisty" required/>
    <DummyComment value={employee.judgeComment} rows={4} name="judgeComment" validations="isExisty" required/>
    </div>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
      {React.createElement(managerAccess ? Rating : DummyRating,{name: "manJudgeRating", value: manager.manJudgeRating, validations:"isExisty", required: true})}
      {React.createElement(managerAccess ? Comment : DummyComment,{name: "manJudgeComment", value: manager.manJudgeComment, validations:"isExisty", required: true})}

    </div>
    </div>


    </div>
    <div style={{display: 'flex', flexDirection: "column"}}>
    <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      4. Time Management: <span style={{color: "#ccc"}}>Ability to organize time effectively. Also consider ability to set priorities, anticipate problems, estimate time requirements and meet deadlines.</span>
    </div>
    <div style={{display: 'flex'}}>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
    <DummyRating value={employee.timeRating} name="timeRating" validations="isExisty" required/>
    <DummyComment value={employee.timeComment} rows={4} name="timeComment" validations="isExisty" required/>
    </div>
    <div style={{flex: '1', display: 'flex', flexDirection: 'column'}}>
      {React.createElement(managerAccess ? Rating : DummyRating,{name: "manTimeRating", value: manager.manTimeRating, validations:"isExisty", required: true})}
      {React.createElement(managerAccess ? Comment : DummyComment,{name: "manTimeComment", value: manager.manTimeComment, validations:"isExisty", required: true})}

    </div>
    </div>

    </div>
    <div style={{display: 'flex',margin: '10px'}}>
    <div style={{flex: '1'}}></div>

    {stage == 7 ? "":
    <div style={{display: 'flex',margin: '10px'}}>

    <div style={{flex: '1'}}></div>
    <Button onClick={this.handleClick.bind(this)}>Submit</Button>
    </div>
  }
    </div>
    </Formsy.Form>


    </div>
  )
}
}
