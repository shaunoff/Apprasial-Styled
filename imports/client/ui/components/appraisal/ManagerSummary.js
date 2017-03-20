import React from 'react';
import Radium from 'radium'
import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Rating from './Rating.js'
import Comment from './Comment.js'
import Button from '../button/Button.js'
import Dialog from 'material-ui/Dialog'
import SummaryModalBody from './SummaryModalBody.js'

@Radium
export default class ManagerSummary extends React.Component {
constructor(){
  super()
  this.state={
    test: 0,
    canSubmit: false,
    modalOpen: false
  }
}
modalOpen(){
    this.setState({modalOpen: true})
}
modalClose(){
    this.setState({modalOpen: false})
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
handleSubmit(id){
  const data = this.form.getModel()
  Meteor.call('insertManSummary', data,id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/');
      }
    });
}
previous(){
  this.props.previous()
}
componentWillEnter (callback) {
  const el = this.manSumWrapper;
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
  const el = this.manSumWrapper;
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
  const styles={
    wrapper: {
      position:'absolute',
      display: 'flex',
      overflowY: 'scroll',
      height: "calc(100vh - 95px)",
      flexDirection: 'column',
      margin: '15px',
      width: "calc(100vw - 380px)",
      display: 'flex',
      border: "2px solid #ccc",
      borderRadius: '8px',
      background: "white"
    },
    review: {
      border: "0px solid #ccc",
    }
  }
  const {currentAppraisal = {}} = this.props.targetUser
  const {summary = {}} = currentAppraisal
  const {employee = {}, manager ={}} = summary
  const {stage} = this.props
  const {managerAccess} = this.props
  return(

    <div ref={(ref) => {this.manSumWrapper = ref}} style={[styles.wrapper,stage == 7 ? styles.review: ""]}>
        {stage == 7 ? "":
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Manager Assessment: Summary
        </div>
        }
        <Formsy.Form ref={(ref) => {this.form = ref;}}  onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
          <div style={{display: 'flex', flexDirection: "column"}}>
          <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Overall Rating:
          </div>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex',flex: '1'}}>
                <DummyRating value={employee.summaryRating} size="40px" name="summaryRating"/>
            </div>
            <div style={{display: 'flex',flex: '1'}}>
                {React.createElement(managerAccess && stage > 6 ? DummyRating : managerAccess ? Rating : DummyRating,{name: "summaryRating", value: manager.summaryRating, validations:"isExisty", size:"40px", required: true})}

            </div>
          </div>



          </div>

        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Overall Summary: <span style={{color: "#ccc"}}>How well have you performed over the last year?</span>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{display: 'flex',flex: '1'}}>
              <DummyComment value={employee.summaryComment} rows={8} name="dummySummaryComment"/>
          </div>
          <div style={{display: 'flex',flex: '1'}}>

              {React.createElement(managerAccess && stage > 6 ? DummyComment : managerAccess ? Comment : DummyComment,{name: "summaryComment", value: manager.summaryComment, validations:"isExisty", rows:8, required: true})}
          </div>
        </div>

      </div>
    {stage == 7 ? "":
    <div style={{display: 'flex',margin: '10px'}}>
    <Button type="button" click={this.previous.bind(this)}>Previous</Button>
    <div style={{flex: '1'}}></div>
    <Button type="button" click={this.modalOpen.bind(this)}disabled={!this.state.canSubmit}>Submit</Button>
    </div>
  }

      <Dialog

              modal={false}
              open={this.state.modalOpen}
              onRequestClose={this.modalClose.bind(this)}
            >
              <SummaryModalBody section='Manager/Lead Assessment'/>
              <div style={{display: 'flex'}}>
                <div style={{flex: '1'}}></div>
                <Button type="button" customStyle='#ff7606' click={this.modalClose.bind(this)}>Cancel</Button>
                <Button type="button" click={this.handleSubmit.bind(this,this.props.targetUser._id)} disabled={!this.state.canSubmit}>Confirm</Button>
              </div>
      </Dialog>
    </Formsy.Form>


    </div>
  )
}
}
