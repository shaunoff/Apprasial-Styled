import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import Radium from 'radium'
import moment from 'moment';
import OverallProgress from '../components/progressSidebar/OverallProgress.js'
import TeamProgress from '../components/appraisal/TeamProgress.js'

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
          even: {
            background: "#f6f6f6"
          },
          row: {
            
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
            fontSize: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px',
            color: '#585858',

            borderBottom: '2px solid #ccc'

          },
          navigation: {
            color: '#6bada7',
            fontWeight: '700',
            fontSize: '16px',

          }
        }
        return (
          <div style={{position: 'absolute',width: "calc(100% - 160px)"}}>
            <div style={{background: 'white',margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px',flex: '1'}}>
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

          <div style={{flex: '3'}}>Complete</div>
          <div style={{width: "100px"}}>View</div>
        </div>

        <div>
         {team.map((field,index)=>{
          return <div style={[styles.rowContent, index%2 == 0 ? styles.even : ""]} key={index}>
                    <div style={{flex: '1'}}>{field.profile.lastName}</div>
                    <div style={{flex: '1'}}>{field.profile.firstName}</div>
                    <div style={{flex: '1'}}>{moment(field.profile.startDate).format('Do, MMM, YYYY')}</div>
                    <div style={{flex: '3'}}><TeamProgress stage={field.stage}/></div>
                    <div style={{width: "100px"}}><Link  style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`/appraisal/${field._id}`}>Link</Link></div>



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
