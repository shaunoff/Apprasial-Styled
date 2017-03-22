import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import ManagerCompetencies from './ManagerCompetencies'
import ManagerAchievements from './ManagerAchievements'
import ManagerSummary from './ManagerSummary'
import DummyRating from './DummyRating.js'
import DummyComment from './DummyComment.js'

import Button from '../button/Button.js'

export default class Review extends React.Component {


handleClick(id){
  console.log("clicked")
  Meteor.call('addReview', id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')

      }
    });
  this.props.advance()
}

render(){
  const styles={
    wrapper: {
      position:  'absolute',
       display: 'flex',

       height: "calc(100vh - 95px)",
       flexDirection: 'column',
       margin: '15px',
       width: "calc(100vw - 380px)",
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
      textTransform: 'capitalize',
      overflow: 'hidden'
    }

  }
  const {currentAppraisal = {}} = this.props.targetUser

  return(
    <div style={styles.wrapper}>
      <Tabs  contentContainerStyle={{overflow: 'hidden'}}inkBarStyle={styles.inkBar} tabItemContainerStyle={styles.tabItem}>
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
      <div style={{display: 'flex',margin: '10px'}}>
      <div style={{flex: '1'}}></div>
      <Button type="button" click={this.handleClick.bind(this,this.props.targetUser._id)}>Next</Button>
      </div>
      <div style={{display: 'flex',margin: '10px'}}>
      <div style={{flex: '1'}}></div>
      <Button type="button" click={this.handleClick.bind(this,this.props.targetUser._id)}>Next</Button>
      </div>

    </div>
  )
}
}
