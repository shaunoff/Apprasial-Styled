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
export default class Targets extends React.Component {
constructor(){
  super()
  this.state={

    canSubmit: false,
    modalOpen: false
  }
}
shouldComponentUpdate(){
  if (this.state.canSubmit == false){
    return false
  }
  return true
}
modalOpen(){
    this.setState({modalOpen: true})
}
modalClose(){
    this.setState({modalOpen: false})
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
  Meteor.call('insertTargets', data,id, (err, res) => {
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
render(){
  const styles={
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      margin: '15px',flex: '3',
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
  const {targets = {}} = currentAppraisal
  const {target1 = {}, target2 ={}, target3 ={}} = targets
  const {stage} = this.props
  return(

    <div style={[styles.wrapper,stage == 7 ? styles.review: ""]}>
        {stage == 7 ? "":
        <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
          Targets
        </div>
        }
        <Formsy.Form ref={(ref) => {this.form = ref;}}  onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
          <div style={{display: 'flex', flexDirection: "column"}}>


            <div style={{display: 'flex',flex: '1'}}>
              <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
                Target 1:
              </div>
                <Comment value={targets.target1} size="40px" name="target1" required/>
            </div>
            <div style={{display: 'flex',flex: '1'}}>
              <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
                Target 2:
              </div>
                <Comment value={targets.target2} size="40px" name="target2"/>
            </div>
            <div style={{display: 'flex',flex: '1'}}>
              <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
                Target 3:
              </div>
                <Comment value={targets.target2} size="40px" name="target3" required/>
            </div>





          </div>



          <div style={{display: 'flex',margin: '10px'}}>
          <Button type="button" click={this.previous.bind(this)}>Previous</Button>
          <div style={{flex: '1'}}></div>
          <Button type="button" click={this.modalOpen.bind(this)} disabled={!this.state.canSubmit}>Submit</Button>

          </div>
          <Dialog

                  modal={false}
                  open={this.state.modalOpen}
                  onRequestClose={this.modalClose.bind(this)}
                >
                  <SummaryModalBody section="Targets"/>
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
