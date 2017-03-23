import React from 'react';
import { Line} from 'rc-progress';
import ReviewIcon from '../animations/ReviewIcon.js'
import Comment from './Comment.js'
import Checkbox from 'material-ui/Checkbox';
import { browserHistory } from 'react-router';

import Button from '../button/Button.js'

export default class ManagerReview extends React.Component {
  constructor(){
    super()
    this.state={
      checked: false,
      canSubmit: false,
      superb: "gfjggdfgfgfgffffgfg fdg shfdgsdfhfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjf gsfjd gsfdh gjh fgdsfgsdjgsdjfjsdgjgjsgjsdf",
      excellent: "gfjggdfgfgfgffffgfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjfsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjfjsdgjgjsgjsdf",
      good: "gfjggdfgfgfgffffgfg fdg shfdgsdfh gfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdgfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdgsfjd gsfdh gjh fgdsfgsdjgsdjfjsdgjgjsgjsdf",
      average: "gfjggdfgfgfgffffgfg fdg shgfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdgfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdgfg fdg shfdgfgfg fdg shfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjffgfg fdfdgsdfh gsfjd gsfdh gjh fgdsfgsdjgsdjfjsdgjgjsgjsdf",

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
handleSubmit(id){
  const data = this.form.getModel()
  Meteor.call('managerComment', data,id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/');
      }
    });
}
useComment(data){
  this.state.checked == data ?
  (this.setState({checked: false}),
  this.comment.setValue(''))
  :
  (this.setState({checked: data}),
  this.comment.setValue(this.state[data])
  )
}
render(){

  const styles={
    wrapper: {
      position:  'absolute',
      display: 'flex',
      overflow: 'scroll',
      height: "calc(100vh - 95px)",
      flexDirection: 'column',
      margin: '15px',
      width: "calc(100vw - 380px)",
      display: 'flex',
      border: "2px solid #ccc",
       borderRadius: '8px',
       background: "white"
    },
    userContainer: {
      display: 'flex',
      border: "2px solid #ccc",
       borderRadius: '8px',
       margin: '10px'
    }

  }
  const {currentAppraisal = {}} = this.props.targetUser
  const {comments = {}} = currentAppraisal
  const {manager ={}} = comments
  const {stage} = this.props
  const {targetUser} = this.props

  return(
    <div style={styles.wrapper}>
      <div style={{flex: '1'}}>
      <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        Senior Manager Review
      </div>
      <div style={styles.userContainer}>
        <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center',padding: '15px'}}>
          <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "60px",width: "60px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>
            <div style={{ fontSize: '28px',color: 'white'}}>{targetUser.profile.firstName[0].toUpperCase()+targetUser.profile.lastName[0].toUpperCase()}</div>
          </div>
          <div style={{fontWeight: '500', color: "#585858"}}>{targetUser.profile.firstName}</div>
          <div style={{marginBottom: '15px',fontWeight: '500',color:'#585858' }}>{targetUser.profile.lastName}</div>
        </div>
        <div style={{flex: '1', display: 'flex', justifyContent: 'center',flexDirection: "column", fontSize: "14px", fontWeight: '700', color: '#585858',margin:"10px"}}>
            <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.2</span></div>
           <Line style={{marginBottom: '10px'}} percent="76" trailWidth="2.5" strokeWidth="2.5" strokeColor="#6bada7" />
           <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>4.6</span></div>
          <Line style={{marginBottom: '10px'}} percent="82" trailWidth="2.5" strokeWidth="2.5" strokeColor="#6bada7" />
        </div>
          <div style={{flex: '1',display: 'flex',flexDirection: 'column',justifyContent: "center", alignItems: "center",fontWeight: '500',color:'#585858'}}>
            <div style={{width: '60px'}}><ReviewIcon/></div>
            <div>{targetUser.profile.firstName}'s full appraisal is available to download.</div>
            <Button  customMargin={{margin: "15px"}} type="button" >Click Here</Button>
          </div>
      </div>
      <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
      Canned Comments
      </div>
      <div style={{display: 'flex'}}>
        <div style={{flex: "1"}}>
          <div style={styles.userContainer}>
            <div style={{margin: '10px'}}>
              <Checkbox  checked={this.state.checked == "superb" ? true : false} onCheck={this.useComment.bind(this, "superb")}/>
            </div>
            <div style={{margin: '10px'}}>{this.state.superb}</div>
          </div>
          <div style={styles.userContainer}>
            <div style={{margin: '10px'}}>
              <Checkbox  checked={this.state.checked == "excellent" ? true : false} onCheck={this.useComment.bind(this, "excellent")}/>
            </div>
            <div style={{margin: '10px'}}>{this.state.excellent}</div>
          </div>

        </div>
        <div style={{flex: "1"}}>
          <div style={styles.userContainer}>
            <div style={{margin: '10px'}}>
              <Checkbox  checked={this.state.checked == "good" ? true : false} onCheck={this.useComment.bind(this, "good")}/>
            </div>
            <div style={{margin: '10px'}}>{this.state.superb}</div>
          </div>
          <div style={styles.userContainer}>
            <div style={{margin: '10px'}}>
              <Checkbox  checked={this.state.checked == "average" ? true : false} onCheck={this.useComment.bind(this, "average")}/>
            </div>
            <div style={{margin: '10px'}}>{this.state.excellent}</div>
          </div>
        </div>
      </div>
      <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        Comment
      </div>
        <Formsy.Form ref={(ref) => {this.form = ref}} onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
          <div style={{display: 'flex',flex: '1'}}>
            <Comment ref={(ref) => {this.comment = ref}}rows={4} name="managerComment"/>
          </div>
        </Formsy.Form>
      </div>
      <div style={{displpay:'flex'}}>
        <div style={{flex: '1'}}></div>
      <Button type="button" click={this.handleSubmit.bind(this,this.props.targetUser._id)} disabled={!this.state.canSubmit}>Confirm</Button>
    </div>
    </div>
  )
}
}
