import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Sidebar extends Component {

render() {
    const {path} = this.props
    const {family_name,given_name, picture} = Meteor.user().services.google
    const inactive= {borderLeft: "6px solid #f8fafb", background:'#FFFFFF', display: 'flex', paddingTop: '15px', height: '40px', paddingBottom: '15px', flexDirection: 'row', width: '154px', alignItems: 'center'}
    const active=   {borderLeft: "6px solid #6bada7", background:'#F8FAFB', display: 'flex', paddingTop: '15px', height: '36px', paddingBottom: '15px', borderTop: "2px solid #ccc", borderBottom: "2px solid #ccc", width: '158px',  alignItems: 'center'}
    return (

      <div style={{borderRight:'2px solid #ccc',display: 'flex',flexDirection: 'column', width: '160px',background: 'white',alignItems: "center"}}>

        <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "60px",width: "60px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>

            <div style={{ fontSize: '28px',color: 'white'}}>SH</div>

        </div>

        <div style={{fontWeight: '500', color: "#585858"}}>{given_name}</div>
        <div style={{marginBottom: '15px',fontWeight: '500',color:'#585858' }}>{family_name}</div>


         <div style={path === '/' ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_home.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link  style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/'>Home</Link></div>
         </div>
         <div style={path === '/appraisal' ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_appraisal.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#007681" }} to={`/appraisal/${Meteor.userId()}`}>Appraisal</Link></div>
         </div>
         <div style={path === '/test' ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/target.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/test2'>Targets</Link></div>
         </div>

         <div style={{borderLeft: "12px solid #f8fafb",display: 'flex', marginTop: '15px', marginBottom: '15px', flexDirection: 'row', width: '160px',height: '40px', alignItems: 'center'}}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_team.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`/team/${Meteor.userId()}`}>Your Team</Link></div>
         </div>
         <div style={{borderLeft: "12px solid #f8fafb",display: 'flex', marginTop: '15px', marginBottom: '15px', flexDirection: 'row', width: '160px',height: '40px', alignItems: 'center'}}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/admin.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/users'>Admin</Link></div>
         </div>
       </div>



    )
  }
}
