import React from 'react';

import { browserHistory } from 'react-router';
import Formsy from 'formsy-react';
import Button from '../button/Button.js'
import Rating from './Rating.js'
import Comment from './Comment.js'
import Dialog from 'material-ui/Dialog'
import SummaryModalBody from './SummaryModalBody.js'

export default class Summary extends React.Component {
constructor(){
  super()
  this.state={
    canSubmitFalse: 0,
    modalOpen: false
  }
}
modalOpen(){
    this.setState({modalOpen: true})
}
modalClose(){
    this.setState({modalOpen: false})
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
handleSubmit(targetId){
 const data = this.form.getModel()

  Meteor.call('insertSummary', data, targetId, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/')
      }
    });
}
previous(){

  this.props.previous()
}
render(){
  const {currentAppraisal = {}} = this.props.targetUser
  const {summary = {}} = currentAppraisal
  const {employee = {}} = summary
  return(

    <div style={{display: 'flex', flexDirection: 'column',margin: '15px',flex: '3', display: 'flex',border: "2px solid #ccc", borderRadius: '8px', background: "white"}}>
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Self Assessment: Summary
        </div>
        <Formsy.Form ref={(ref) => {this.form = ref;}}  onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
          <div style={{display: 'flex', flexDirection: "column"}}>
          <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            Overall Rating:
          </div>
          <Rating value={employee.summaryRating} size="40px" name="summaryRating" required/>


          </div>

        <div style={{display: 'flex', flexDirection: "column"}}>
        <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Overall Summary: <span style={{color: "#ccc"}}>How well have you performed over the last year?</span>
        </div>

        <Comment value={employee.summaryComment} rows={8} name="summaryComment" required/>
      </div>

    <div style={{display: 'flex',margin: '10px'}}>
    <Button type="button" click={this.previous.bind(this)}>Previous</Button>
    <div style={{flex: '1'}}></div>
    <Button type="button" click={this.modalOpen.bind(this)} disabled={!this.state.canSubmit}>SubmitHehehehe</Button>

    </div>
    <Dialog

            modal={false}
            open={this.state.modalOpen}
            onRequestClose={this.modalClose.bind(this)}
          >
            <SummaryModalBody section="Self Assessment"/>
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
