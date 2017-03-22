import React from 'react';
import { Line} from 'rc-progress';
import ReviewIcon from '../animations/ReviewIcon.js'
import Comment from './Comment.js'


import Button from '../button/Button.js'

export default class PresidentReview extends React.Component {
  constructor(){
    super()
    this.state={
      canSubmit: false,
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
  Meteor.call('presidentComment', data,id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')
        browserHistory.push('/');
      }
    });
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
      <div style={{fontSize: "18px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
        President Review
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
    </div>
  )
}
}
