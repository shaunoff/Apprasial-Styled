import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default class Header extends Component {
handleLogout(){
  Meteor.logout(() => browserHistory.push('/login'))
}
headerTitle(){
  let path = this.props.title
  if (/appraisal/i.test(this.props.title)){
    path = "appraisal"
  }
  if (/team/i.test(this.props.title)){
    path = "team"
  }
  if (/users/i.test(this.props.title)){
    path = "admin"
  }

  switch (path) {
                   case "/":
                     return "Home";
                   case "appraisal":
                       return "Appraisal";
                   case "team":
                       return "Your Team";
                   case "admin":
                       return "Administration";
                   case "/president":
                           return "President Administration";


                  }
}
render() {
    const {profile} = Meteor.user()
    return (
      <header style={{display: 'flex', background: '#F8FAFB', height: '60px',alignItems: 'center', width: "100%"}}>

        <div style={{paddingLeft: '22px',display: 'flex',flex:'1'}}>

          <div style={{fontSize: "24px", fontWeight: '700', color: '#585858' }}>{this.headerTitle()}</div>
        </div>



          <div style={{display: 'flex', fontWeight: '500',fontSize: '20px', alignItems: 'center'}} onClick={this.handleLogout}>
              <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>
                <div style={{ fontSize: '14px',color: 'white'}}>{`${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`}</div></div>
              <div style={{fontSize: "16px", fontWeight: '500', color: '#585858', marginRight: '15px' }}>{`Hi, ${profile.firstName}`}</div>
              <img style={{marginRight: "20px", height: '12px',width: '12px'}} src="/icons/down.svg"/>
          </div>

      </header>
    )
  }
}
