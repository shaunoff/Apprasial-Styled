import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import Radium from 'radium'
import moment from 'moment';
import OverallProgress from '../components/progressSidebar/OverallProgress.js'

@Radium
class Team extends React.Component {

  render() {
    const paramId = this.props.params._id
    const user = Meteor.users.findOne({_id: paramId})
    const managerAccess = Roles.userIsInRole(paramId,'Manager')

    if (!this.props.subsReady) {
        return <div>loading...</div>
      }
    if (this.props.subsReady) {
        const {team} = this.props
        const styles={

          row: {
            height: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #ccc'
          },
          header: {
            fontWeight: '700',
            fontSize: '18px',
            padding: '5px',
            color: '#6bada7'

          },
          rowContent: {
            fontWeight: '700',
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px',
            color: '#585858',
            height: '40px',
            borderBottom: '2px solid #ccc'

          },
          even: {
            background: "#f6f6f6"
          },
        }
        return (
          <div>
            
            {/*<div>
            {managerAccess ? "Param is a manager" : "Not a manager"}
          </div>*/}
          <div style={{margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px'}}>

          <div style={[styles.row,styles.header]}>
            <div style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Last Name</div>
              <div style={{flex: '1'}}></div>
            </div>
            <div  style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>First Name</div>
              <div style={{flex: '1'}}></div>
            </div>
            <div style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Deadline</div>
              <div style={{flex: '1'}}></div>
            </div>

            <div style={{flex: '1'}}>Complete</div>
            <div>View</div>
          </div>
          {/*users rows*/}
          <div>
           {team.map((field,index)=>{
            return <div style={[styles.rowContent, index%2 == 0 ? styles.even : ""]} key={index}>
                      <div style={{flex: '1'}}>{field.profile.lastName}</div>
                      <div style={{flex: '1'}}>{field.profile.firstName}</div>
                      <div style={{flex: '1'}}>{moment(field.profile.startDate).format('Do, MMM, YYYY')}</div>
                      <div style={{flex: '1'}}><OverallProgress stage={field.stage}/></div>
                      <div><Link  style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`/appraisal/${field._id}`}>Link</Link></div>



                  </div>
            })}
          </div>
          </div>

          </div>
        )
      }


  }
}

export default createContainer(({params}) => {
    const paramId = params._id
    let managerTeamSub =  Meteor.subscribe('managerTeam', paramId);
    return {
      subsReady: managerTeamSub.ready(),
      team: Meteor.users.findFromPublication('managerTeam',{},{sort: {
        'profile.lastName': 1}
      }).fetch()
    }
  }, Team);
