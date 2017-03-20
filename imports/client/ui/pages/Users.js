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


@Radium
class Users extends React.Component {
  constructor(){
    super()
    this.state={
      skip: 0,
      arrowUp: true,
      modalOpen: false,
      editUser: ''
      }
  }
  testSearch(data){
    searchQuery.set(data.target.value)

  }
  modalToggle(user,body){
    this.setState({modal: body},()=>{
      this.setState({modalOpen: true,editUser: user})
    })


  }
  modalClose(){
    this.setState({
      modalOpen: false,
      modal: null
    })
  }
  lastSort(){
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    if (value == 'lastName'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'lastName'){
      sortValue.set('lastName')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }

  }
  firstSort(){
    console.log('clicked')
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    console.log(value)
    if (value == 'firstName'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'firstName'){
      sortValue.set('firstName')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }
  }
  dateSort(){
    const arrowDirection = sortDirection.get()
    const value = sortValue.get()
    if (value == 'startDate'){
      if (arrowDirection == 1) {
        sortDirection.set(-1)
        this.setState({arrowUp: false})
      }
      if (arrowDirection == -1) {
        sortDirection.set(1)
        this.setState({arrowUp: true})
      }
    }
    if (value !== 'startDate'){
      sortValue.set('startDate')
      sortDirection.set(1)
      this.setState({arrowUp: true})

    }

  }
  handleNext(){
    console.log('clicked')
    this.setState({skip: this.state.skip + 10}, ()=>{
      skipAmount.set(this.state.skip)
    }
    );

  }
  handlePrev(){
    this.setState({skip: this.state.skip - 10}, ()=>{
      skipAmount.set(this.state.skip)
    }
    );

  }
  componentWillEnter (callback) {
    console.log("ghjghjkghjkgfd")
    const el = this.usersWrapper;
    TweenMax.from(el, 3, {opacity: 0, onComplete: callback});
  }

  componentWillLeave(callback) {
    const el = this.usersWrapper;
    TweenMax.to(el, 3, {opacity: 0, onComplete: callback});

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
      const {users} = this.props
      const sortActive =sortValue.get()
      let clickedUser = this.state.editUser ? users.filter((user)=>{return user._id == this.state.editUser})[0] : null

      return (
        <div >
          <div style={{margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px'}}>
            <input onChange={this.testSearch.bind(this)}/>
          </div>
          <div style={{background: 'white',margin:'15px', border: "2px solid #ccc", borderRadius: '8px', padding: '0px 15px 5px 15px'}}>

          <div style={[styles.row,styles.header]}>
            <div onClick={this.lastSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Last Name</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'lastName' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>
            <div onClick={this.firstSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>First Name</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'firstName' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>
            <div onClick={this.dateSort.bind(this)} style={{display: 'flex',flex: '1',alignItems: 'center'}}>
              <div>Start Date</div>
              <img style={[styles.sortArrow, this.state.arrowUp && styles.arrowUp,sortActive == 'startDate' ? '' : {display: 'none'}]} src="/icons/down.svg"/>
              <div style={{flex: '1'}}></div>
            </div>

            <div style={{flex: '1.5'}}>Complete</div>
            <div style={{flex: '1'}}>Lead</div>
            <div style={{flex: '1'}}>Manager</div>
            <div style={{flex: '1'}}>Roles</div>
          </div>
          <div>
           {users && users.map((field,index)=>{
            let manager
            let managerProfile = this.props.managers.filter((manager)=>{return manager._id == field.profile.manager})[0]
            if (managerProfile){

            manager = <div key={`manager${index}`} style={[styles.managerText]}>
                          {`${managerProfile.profile.firstName} ${managerProfile.profile.lastName}`}
                          {Radium.getState(this.state, `manager${index}`, ':hover') ? (
                              <img key={index} style={[styles.addIcon]} onClick={this.modalToggle.bind(this,field,'manager')} src="/icons/addPerson.svg"/>
                            ) : null}

                        </div>
            }
            else {
              manager =
              <img onClick={this.modalToggle.bind(this,field,'manager')} style={{width: '18px'}} src="/icons/addPerson.svg"/>
            }
            let lead
            let leadProfile = this.props.leads.filter((lead)=>{return lead._id == field.profile.lead})[0]
            if (leadProfile){

            lead = <div key={`lead${index}`} style={[styles.leadText]}>
                          {`${leadProfile.profile.firstName} ${leadProfile.profile.lastName}`}
                          {Radium.getState(this.state, `lead${index}`, ':hover') ? (
                              <img key={index} style={[styles.addIcon]} onClick={this.modalToggle.bind(this,field,"lead")} src="/icons/addPerson.svg"/>
                            ) : null}

                        </div>
            }
            else {
              lead =
              <img onClick={this.modalToggle.bind(this,field,'lead')} style={{width: '18px'}} src="/icons/addPerson.svg"/>
            }

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
                      {/*<div style={{flex: '1'}}>{Roles.userIsInRole(field._id,'Manager')  ? 'yes': 'no'}</div>*/}


                      <div style={{display: 'flex',flex: 1}} onClick={this.modalToggle.bind(this,field,"role")}>
                        {Roles.userIsInRole(field._id,'Employee') ? <div style={[styles.circle]}>E</div> : ""}
                        {Roles.userIsInRole(field._id,'Lead') ? <div style={[styles.circle,{background: '#6bada7'}]}>L</div> : ""}
                        {Roles.userIsInRole(field._id,'Manager') ? <div style={[styles.circle,{background: '#007681'}]}>M</div> : ""}
                        {Roles.userIsInRole(field._id,'admin') ? <div style={[styles.circle,{background: '#ff7606'}]}>A</div> : ""}
                        +
                      </div>

                  </div>
            })}
          </div>
          <div style={{display: 'flex',alignItems: 'center', height: '40px'}}>
            <div style={{flex: '1'}}></div>
            <div style={[styles.navigation]} onClick={this.handlePrev.bind(this)}>Previous</div>
            <TablePage />
            <div style={[styles.navigation]} onClick={this.handleNext.bind(this)}>next</div>

          </div>

        </div>

        <AppModal
          open={this.state.modalOpen}
          title={`Add Manager for ${clickedUser && clickedUser.profile.firstName} ${clickedUser && clickedUser.profile.lastName}`}
          body={React.createElement(this.state.modal == 'role' ? RolesModal : this.state.modal == "lead" ? UserLead : UserManager,{user: this.state.editUser, managers: this.props.managers, leads: this.props.leads})}

          footer={'modalFooter'}
          modalClose={this.modalClose.bind(this)}
        />

      </div>

      )
    }


}
const skipAmount = new ReactiveVar(0);
const sortValue = new ReactiveVar('lastName');
const sortDirection = new ReactiveVar(1);
const searchQuery = new ReactiveVar(null);
export default createContainer(({params}) => {

    let allUsersSub =  Meteor.subscribe('allUsers',skipAmount.get(),sortValue.get(),sortDirection.get(),searchQuery.get());
    let leadsSub =  Meteor.subscribe('leads');
    let managersSub =  Meteor.subscribe('managers');
    return {
      subsReady: allUsersSub.ready() && leadsSub.ready() && managersSub.ready(),
      users: Meteor.users.findFromPublication('allUsers').fetch(),
      managers: Meteor.users.findFromPublication('managers',{},{sort: {
        'profile.firstName': 1
      }
      }).fetch(),
      leads: Meteor.users.findFromPublication('leads',{},{sort: {
        'profile.firstName': 1
      }
      }).fetch(),
    }
  }, Users);
