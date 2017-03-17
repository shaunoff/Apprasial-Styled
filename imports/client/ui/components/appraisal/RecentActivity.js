import React from 'react';
import moment from 'moment'
import Radium from 'radium'

@Radium
export default class RecentActivity extends React.Component {
  activityComment(stage){
    switch (stage) {
                     case 3:
                       return "Completed Self Assessment";
                     case 6:
                      return "Completed Manager's Assessment";
                     case 8:
                       return "Completed Targets";

                    }
  }
  render(){
    const {notifications} = this.props
    return(
      <div>
      {notifications.map((field,index)=>{
        let initials = field.completedUserName.split(' ')
        initials = initials[0][0]+initials[1][0]
        let color = field.completedUser == Meteor.userId() ? "#007681" : "#6bada7"
        return <div key={index} style={{display: 'flex', alignItems: 'center', margin: '10px 5px',border: '1px solid #ccc',
          borderRadius: '4px', height: '50px'}}>
          <div style={{margin: '10px',display:'flex',fontWeight: '500',height: "30px",width: "30px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: color, color: 'white'}}>

              <div style={{ fontSize: '14px',color: 'white'}}>{initials}</div>

          </div>
          <div style={{flex: '1', fontSize: "12px", fontWeight: '700', color: color,padding:"10px"}}>
             {field.completedUserName}
          </div>
          <div style={{flex: '1', fontSize: "12px", fontWeight: '700', color: '#585858',padding:"10px"}}>
            {this.activityComment(field.stage)}
          </div>
          <div style={{fontSize: "14px", fontWeight: '700', color: '#6bada7',padding:"10px"}}>
            {moment(field.added).format('DD MMM')}
          </div>
        </div>
      })}
    </div>
    )
  }
}
