import React from 'react';


import Formsy from 'formsy-react';
import {createContainer} from 'meteor/react-meteor-data'
import Competencies from '../components/appraisal/Competencies.js'
import Achievements from '../components/appraisal/Achievements.js'
import ManagerCompetencies from '../components/appraisal/ManagerCompetencies.js'
import ManagerAchievements from '../components/appraisal/ManagerAchievements.js'
import ManagerQuestions from '../components/appraisal/ManagerQuestions.js'
import ManagerSummary from '../components/appraisal/ManagerSummary.js'
import Targets from '../components/appraisal/Targets.js'
import Questions from '../components/appraisal/Questions.js'
import Summary from '../components/appraisal/Summary.js'
import Progress from '../components/appraisal/Progress.js'
import Progress2 from '../components/appraisal/Progress2.js'
import InProgress from '../components/appraisal/InProgress.js'
import Review from '../components/appraisal/Review.js'
import ManagerReview from '../components/appraisal/ManagerReview.js'
import PresidentReview from '../components/appraisal/PresidentReview.js'
import Notifications from '../../../api/notifications/notifications';
import ReactTransitionGroup from 'react-addons-transition-group'


import Test2 from './Test2.js'


class Test extends React.Component {
constructor(props){
  super(props)
  this.props.user
  this.state={
    stage: 0
  }
}
stageNumber(managerAccess,user) {
  switch (this.state.stage) {
                   case 0:
                     return <div>Loading...</div>;
                   case 1:
                    return <Competencies key="competencies" targetUser={this.props.targetUser[0]} managerAccess={managerAccess} advance={this.advance.bind(this)}/>;
                   case 2:
                    return <Achievements key="achievements" targetUser={this.props.targetUser[0]} managerAccess={managerAccess} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 3:
                    return <Summary key="summary" targetUser={this.props.targetUser[0]} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 4:
                    return <ManagerCompetencies key="manCompetencies" stage={this.state.stage} targetUser={this.props.targetUser[0]} managerAccess={managerAccess} user={user} advance={this.advance.bind(this)}/>;
                   case 5:
                    return <ManagerAchievements key="manAchievements" stage={this.state.stage} targetUser={this.props.targetUser[0]} managerAccess={managerAccess} user={user} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/>;
                   case 6:
                    return <ManagerSummary key="manSummary" stage={this.state.stage} targetUser={this.props.targetUser[0]} managerAccess={managerAccess} previous={this.previous.bind(this)}/>;
                   case 7:
                    return <Review stage={this.state.stage}  advance={this.advance.bind(this)} managerAccess={managerAccess} targetUser={this.props.targetUser[0]}/>;
                   case 8:
                     return <Targets stage={this.state.stage} targetUser={this.props.targetUser[0]} advance={this.advance.bind(this)} previous={this.previous.bind(this)}/>;
                   case 9:
                      return <ManagerReview  stage={this.state.stage}  advance={this.advance.bind(this)} targetUser={this.props.targetUser[0]}/>;
                   case 10:
                      return <PresidentReview  stage={this.state.stage}  advance={this.advance.bind(this)} targetUser={this.props.targetUser[0]}/>;
                  }
}

advance(){
  this.setState({stage: this.state.stage +=1})

}
previous(){
  this.setState({changing: true,stage: this.state.stage -=1})

}
noEntry(){
  this.setState({stage: 2})

}
componentDidUpdate(){

  this.state.stage == 0 ?  this.setState({stage: this.props.targetUser[0].stage}): ""
  this.state.changing == true ? "" : this.state.stage == this.props.targetUser[0].stage ? "" :this.setState({stage: this.props.targetUser[0].stage})

}

render(){
  var managerAccess = false
  if (!this.props.subsReady) {
      return <div>Loading</div>;
  }
  if (this.props.subsReady) {

    let{targetUser,user} =this.props
    targetUser = targetUser[0]
    user = user[0]
    const {stage} = this.state
    //Is targetUser the currentUser?
    if (targetUser._id == user._id) {
      managerAccess = false
      if (stage > 3 && stage < 7) {
          return <InProgress stage={stage} note="Current user cant access. At managers phase" text="Your Appraisal is in progress!"/>
        }
      if (stage > 8 && stage < 11) {
            return <InProgress stage={stage} note="Current user cant access. At managers phase" text="Your Appraisal is in progress!"/>
          }
    }
    //does the targetUser have a lead?
    if (targetUser.profile.lead){
      //Is user the lead?
      if (targetUser.profile.lead == user._id) {
        managerAccess = true
        if (stage < 4) {
            return <InProgress stage={stage} note="Lead cant access Still at employee stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
          }
          if (stage > 6 && stage <9  ) {
                return <InProgress stage={stage} note="Manager/Lead cant access Still at Employee stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
              }
      }
      //Is user the manager
      if (targetUser.profile.manager == user._id) {
        managerAccess = true
        if (stage > 3 && stage < 7) {
            return <InProgress stage={stage} note="Manager cant access Still at Lead stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
          }
          if (stage > 6 && stage <9  ) {
                return <InProgress stage={stage} note="Manager/Lead cant access Still at Employee stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
              }

      }

    }
    //does the targetUser have no lead but a manager?
    if (targetUser.profile.lead == null){
      if (targetUser.profile.manager == user._id) {
        managerAccess = true
        if (stage < 4 ) {
            return <InProgress stage={stage} note="Manager cant access Still at Employee stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
          }
        if (stage > 6 && stage <9 ) {
              return <InProgress stage={stage} note="Manager/Lead cant access Still at Employee stage" text={`${targetUser.profile.firstName}'s Appraisal is in progress!`}/>
            }
      }
    }

  return(

      <div style={{height: "calc(100vh - 62px)",display: 'flex',flexDirection: 'row',overflow: 'hidden'}}>
      <Progress2 stage={targetUser.stage} targetUser={targetUser}/>

      {/*<Test2 element={this.state.stage}>
      {this.state.stage == 1 ? <Competencies advance={this.advance.bind(this)}/> : this.state.stage ==  2 ? <Questions previous={this.previous.bind(this)} advance={this.advance.bind(this)}/> : <Summary/>}
      </Test2>*/}

      <ReactTransitionGroup>
      {this.stageNumber(managerAccess,targetUser)}
      </ReactTransitionGroup>
      {/*{this.state.stage == 1 ? <ManagerCompetencies managerAccess={managerAccess} user={user} advance={this.advance.bind(this)}/> : this.state.stage ==  2 ? <ManagerQuestions managerAccess={managerAccess} user={user} previous={this.previous.bind(this)} advance={this.advance.bind(this)}/> : <ManagerSummary user={user} previous={this.previous.bind(this)}/>}*/}

      </div>


  )
}

}
}

export  default createContainer((props)=>{

  let targetUserSub =  Meteor.subscribe('targetUser', props.params._id);
  //let userSub = Meteor.subscribe("currentUser");
  return {

    subsReady: targetUserSub.ready(),
    targetUser: Meteor.users.findFromPublication('targetUser').fetch()

  }
}, Test);
