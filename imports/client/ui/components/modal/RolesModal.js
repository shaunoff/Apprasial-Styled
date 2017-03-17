import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Radium from 'radium'
import Checkbox from 'material-ui/Checkbox';

@Radium
class RolesModal extends Component {
  constructor(props){
    super(props)
    const {user} = this.props

    this.state ={
      'Employee': Roles.userIsInRole(user._id,'Employee'),
      'Lead': Roles.userIsInRole(user._id,'Lead'),
      'Manager': Roles.userIsInRole(user._id,'Manager'),
      admin: Roles.userIsInRole(user._id,'admin'),
    }
  }
  updateRoles(role){
    if (this.state[role] == false){
      this.setState({[role]: true })
      Meteor.call('addRole', role, this.props.user._id)
    }
    if (this.state[role] == true){
      this.setState({[role]: false })
      Meteor.call('removeRole', role, this.props.user._id)
    }
  }
  render() {
    const styles = {
      managerWrapper: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        minWidth: '45%',
        maxWidth: '48%',
        margin: '5px 0px 5px 0px',
        height: '40px'
      },
      name: {
        flex: '1',
        fontSize: "16px",
        fontWeight: '700',
        padding:"10px"
      },
      circle: {
        background: "#007681",
        margin: '0px',
        display:'flex',
        fontWeight: '500',
        height: "30px",
        width: "30px",
        borderRadius: '30px',
        alignItems:'center',
        justifyContent: "center",
        color: 'white'}
    }
    return (

        <div style={{display: 'flex',flexWrap: 'wrap'}}>
          <div style={[styles.managerWrapper]}>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              <Checkbox checked={this.state.Employee} onCheck={this.updateRoles.bind(this, 'Employee')}/>
            </div>
            <div style={[styles.circle]}>
              <div style={{ fontSize: '14px',color: 'white'}}>E</div>
            </div>
            <div style={[styles.name]}>
               Employee
            </div>
          </div>
          <div style={[styles.managerWrapper]}>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              <Checkbox checked={this.state.Lead} onCheck={this.updateRoles.bind(this, 'Lead')}/>
            </div>
            <div style={[styles.circle]}>
              <div style={{ fontSize: '14px',color: 'white'}}>L</div>
            </div>
            <div style={[styles.name]}>
               Lead
            </div>
          </div>
          <div style={[styles.managerWrapper]}>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              <Checkbox checked={this.state.Manager} onCheck={this.updateRoles.bind(this, 'Manager')}/>
            </div>
            <div style={[styles.circle]}>
              <div style={{ fontSize: '14px',color: 'white'}}>M</div>
            </div>
            <div style={[styles.name]}>
               Manager
            </div>
          </div>
          <div style={[styles.managerWrapper]}>
            <div style={{fontSize: "16px", fontWeight: '700', color: '#D93A32',padding:"10px"}}>
              <Checkbox checked={this.state.admin} onCheck={this.updateRoles.bind(this, 'admin')}/>
            </div>
            <div style={[styles.circle]}>
              <div style={{ fontSize: '14px',color: 'white'}}>A</div>
            </div>
            <div style={[styles.name]}>
               Admin
            </div>
          </div>
        </div>

    )
   }
}
export default RolesModal
