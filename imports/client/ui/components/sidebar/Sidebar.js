import React, { Component } from 'react';
import { Link } from 'react-router';
import IsRole from '../../utilities/IsRole';

export default class Sidebar extends Component {

render() {

    const {path} = this.props
    const {profile} = Meteor.user()
    const inactive= {borderLeft: "6px solid #f8fafb", background:'#FFFFFF', display: 'flex', paddingTop: '15px', height: '40px', paddingBottom: '15px', flexDirection: 'row', width: '154px', alignItems: 'center'}
    const active=   {borderLeft: "6px solid #6bada7", background:'#F8FAFB', display: 'flex', paddingTop: '15px', height: '36px', paddingBottom: '15px', borderTop: "2px solid #ccc", borderBottom: "2px solid #ccc", width: '158px',  alignItems: 'center'}
    return (

      <div style={{borderRight:'2px solid #ccc',display: 'flex',flexDirection: 'column', width: '160px',background: 'white',alignItems: "center"}}>

        <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "60px",width: "60px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>

            <div style={{ fontSize: '28px',color: 'white'}}>{`${profile.firstName[0].toUpperCase()}${profile.lastName[0].toUpperCase()}`}</div>

        </div>

        <div style={{fontWeight: '500', color: "#585858"}}>{profile.firstName}</div>
        <div style={{marginBottom: '15px',fontWeight: '500',color:'#585858' }}>{profile.lastName}</div>


         <div style={path === '/' ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_home.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link  style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/'>Home</Link></div>
         </div>
         <div style={path === '/appraisal' ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_appraisal.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#007681" }} to={`/appraisal/${Meteor.userId()}`}>Appraisal</Link></div>
         </div>

         <IsRole role={['Lead', "Manager"]} path={path}>
         <div style={path.includes("/team/") ? active : inactive}>

            <img style={{marginLeft: "15px", width: '25px'}} src="/icons/c_team.svg"/>

          <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to={`/team/${Meteor.userId()}`}>Your Team</Link></div>
         </div>
       </IsRole>
         <IsRole role="admin" path={path}>

             <div style={path === '/users' ? active : inactive}>

                <img style={{marginLeft: "15px", width: '25px'}} src="/icons/admin.svg"/>

              <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/users'>Admin</Link></div>
             </div>

          </IsRole>
          <IsRole role="President" path={path}>

              <div style={path === '/president' ? active : inactive}>

                 <img style={{marginLeft: "15px", width: '25px'}} src="/icons/admin.svg"/>

               <div style={{marginLeft:"10px", fontWeight: "500"}}><Link style={{ fontSize: "16px",textDecoration: 'none',color: "#585858 " }} to='/president'>President</Link></div>
              </div>

           </IsRole>
       </div>



    )
  }
}
