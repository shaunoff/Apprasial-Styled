import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

export default class Header extends Component {
handleLogout(){
  Meteor.logout(() => browserHistory.push('/login'))
}
render() {
      const {family_name,given_name, } = Meteor.user().services.google
    return (
      <header style={{display: 'flex', background: '#F8FAFB', height: '60px',alignItems: 'center', width: "100%"}}>

        <div style={{paddingLeft: '22px',display: 'flex',flex:'1'}}>

          <div style={{fontSize: "24px", fontWeight: '700', color: '#585858' }}>Home Dashboard</div>
        </div>



          <div style={{display: 'flex', fontWeight: '500',fontSize: '20px', alignItems: 'center'}} onClick={this.handleLogout}>
              <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>
                <div style={{ fontSize: '14px',color: 'white'}}>SH</div></div>
              <div style={{fontSize: "16px", fontWeight: '500', color: '#585858', marginRight: '15px' }}>{`Hi, ${given_name}`}</div>
              <img style={{marginRight: "20px", height: '12px',width: '12px'}} src="/icons/down.svg"/>
          </div>

      </header>
    )
  }
}
