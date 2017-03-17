import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import { browserHistory } from 'react-router';
import ManagerCompetencies from './ManagerCompetencies'
import ManagerAchievements from './ManagerAchievements'
import ManagerSummary from './ManagerSummary'
import Formsy from 'formsy-react';
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'
import Rating from './Rating.js'
import Comment from './Comment.js'


import Button from '../button/Button.js'

export default class ManagerReview extends React.Component {
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
    inkBar: {
      background: "#007681",
      height: "3px",
      margin: "0px 0px"

    },
    tabItem: {
      background: 'white',
      padding: "-10px",
      borderRadius: "8px"


    },
    tabText:{
      color:'#007681',
      fontSize: '18px',
      fontWeight: 'bold',
      fontFamily: "Quicksand",
      textTransform: 'capitalize'
    }

  }
  const {currentAppraisal = {}} = this.props.targetUser
  const {comments = {}} = currentAppraisal
  const {manager ={}} = comments
  const {stage} = this.props
  return(
    <div style={styles.wrapper}>
      <Tabs  inkBarStyle={styles.inkBar} tabItemContainerStyle={styles.tabItem}>
        <Tab style={styles.tabText} label="Comments" >
          <Formsy.Form ref="form"  onValidSubmit={this.handleSubmit.bind(this,this.props.targetUser._id)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)}>
            <div style={{display: 'flex', flexDirection: "column"}}>
              <div style={{display: 'flex',flex: '1'}}>
                <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
                  Manager:
                </div>
                  <Comment value={comments.manager} size="40px" name="manager" required/>
              </div>
        </div>
        <div style={{display: 'flex',margin: '10px'}}>
          <div style={{flex: '1'}}></div>
      <Button type="submit" disabled={!this.state.canSubmit}>Submit</Button>
      </div>



      </Formsy.Form>
        </Tab>
        <Tab style={styles.tabText} label="Competencies" >
          <ManagerCompetencies stage={this.props.stage} targetUser={this.props.targetUser}/>
        </Tab>
        <Tab style={styles.tabText} label="Achievements" >
          <ManagerAchievements stage={this.props.stage} targetUser={this.props.targetUser}/>
        </Tab>
        <Tab style={styles.tabText} label="Summary">
          <ManagerSummary stage={this.props.stage} targetUser={this.props.targetUser}/>

        </Tab>
      </Tabs>


    </div>
  )
}
}
