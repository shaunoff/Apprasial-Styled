import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data'
import {TweenMax, Power2, TimelineMax} from "gsap";
import Radium from 'radium'
import TablePage from '../components/table/TablePage.js'
import moment from 'moment';
import Switch from 'react-toggle-switch'
import AppModal from '../components/modal/AppModal.js'
import OverallProgress from '../components/progressSidebar/OverallProgress.js'
import UserManager from '../components/modal/UserManager.js'
import UserLead from '../components/modal/UserLead.js'
import RolesModal from '../components/modal/RolesModal.js'
import { Link } from 'react-router';


@Radium
class President extends React.Component {
  constructor(){
    super()
    this.state={
      skip: 0,
      arrowUp: true,
      modalOpen: false,
      editUser: ''
      }
  }

  render() {
    const styles={
      even: {
        background: "#f6f6f6"
      },
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
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        color: '#585858',
        height: '40px',
        borderBottom: '2px solid #ccc'

      },
      navigation: {
        color: '#6bada7',
        fontWeight: '700',
        fontSize: '16px',

      },
      sortArrow:{
        marginLeft: "20px",
         height: '12px',
         width: '12px'
      },
      arrowUp:{
        transform: 'rotate(180deg)'
      },
      managerText:{
        fontSize: '12px',
        ':hover': {}
      },
      leadText:{
        fontSize: '12px',
        ':hover': {}
      },
      addIcon:{
        width: '18px',
        marginLeft: '10px'
      },
      circle: {
        background: "#ccc",
        margin: '5px',
        display:'flex',
        fontSize: '12px',
        fontWeight: '500',
        height: "20px",
        width: "20px",
        borderRadius: '30px',
        alignItems:'center',
        justifyContent: "center",
        color: 'white'}

    }
    if (!this.props.subsReady){
      return <div> loading</div>
    }
      const {users} = this.props
      console.log(users)
      return (
        <div style={{position: 'absolute',width: "calc(100% - 160px)"}}>

          <div style={{background: 'white',margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px'}}>

          <div style={[styles.row,styles.header]}>
            <div  style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Last Name</div>

              <div style={{flex: '1'}}></div>
            </div>
            <div  style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>First Name</div>

              <div style={{flex: '1'}}></div>
            </div>
            <div  style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Start Date</div>

              <div style={{flex: '1'}}></div>
            </div>

            <div style={{flex: '1.5'}}>Complete</div>
            <div style={{flex: '1'}}>Lead</div>
            <div style={{flex: '1'}}>Manager</div>
            <div style={{flex: '1'}}>Link</div>
          </div>
          <div>
           {users && users.map((field,index)=>{
            const manager = `${field.currentAppraisal.managerFirstName} ${field.currentAppraisal.managerLastName}`
            const lead = field.currentAppraisal.lead ? `${field.currentAppraisal.leadFirstName} ${field.currentAppraisal.leadLastName}` : "-"
            return <div style={[styles.rowContent, index%2 == 0 ? styles.even : ""]} key={index}>
                      <div style={{flex: '1'}}>{field.profile.lastName}</div>
                      <div style={{flex: '1'}}>{field.profile.firstName}</div>
                      <div style={{flex: '1'}}>{moment(field.profile.startDate).format('Do, MMM, YYYY')}</div>
                      <div style={{flex: '1.5'}}><OverallProgress stage={field.stage}/></div>
                      <div style={{flex: '1'}}>
                        {lead}
                      </div>
                      <div style={{flex: '1'}}>
                        {manager}
                      </div>

                        <div style={{flex: '1'}}><Link  style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`/appraisal/${field._id}`}>Link</Link></div>





                  </div>
            })}
          </div>


        </div>



      </div>

      )
    }


}
const skipAmount = new ReactiveVar(0);
const sortValue = new ReactiveVar('lastName');
const sortDirection = new ReactiveVar(1);
const searchQuery = new ReactiveVar(null);
export default createContainer(({params}) => {

    let allUsersSub =  Meteor.subscribe('presidentUsers');

    return {
      subsReady: allUsersSub.ready(),
      users: Meteor.users.findFromPublication('presidentUsers').fetch(),

    }
  }, President);
