import React from 'react';
import {progressStyles} from "./progressStyles.js"

import ProgCircle from '../progressSidebar/ProgCircle.js';
import SubHeader from '../progressSidebar/SubHeader.js';
import Radium from 'radium'

@Radium
export default class Progress extends React.Component {
  render(){
    const {progressContainer,headerActive,header,headerComplete,circleActive,circleComplete,numberActive,numberInactive,circleInactive,textComplete,textActive,textInactive,lineComplete,line1Active,line2Active,line1Inactive,line2Inactive} = progressStyles
    const {stage,targetUser} = this.props
    return(
      <div style={progressContainer}>
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'center',justifyContent: 'left',alignItems: 'left'}}>
          {targetUser._id !== Meteor.user()._id ?
          <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{margin: '15px',display:'flex',fontWeight: '500',height: "60px",width: "60px", borderRadius: '30px',alignItems:'center',justifyContent: "center", background: '#007681', color: 'white'}}>
              <div style={{ fontSize: '28px',color: 'white'}}>{targetUser.profile.firstName[0].toUpperCase()+targetUser.profile.lastName[0].toUpperCase()}</div>
            </div>
            <div style={{fontWeight: '500', color: "#585858"}}>{targetUser.profile.firstName}</div>
            <div style={{marginBottom: '15px',fontWeight: '500',color:'#585858' }}>{targetUser.profile.lastName}</div>
          </div>:""}
          <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
            <div style={{display: 'flex',flex: '1',alignItems:'center'}}>
              <div style={[header, stage > 3 ? headerComplete: headerActive]}>Self Assessment</div>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                <ProgCircle stage={stage > 1 ? 'complete' : 'active'} number="1"/>
                <SubHeader stage={stage > 1 ? 'complete' : 'active'} text="Competencies"/>


                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <ProgCircle stage={stage > 2 ? 'complete' : stage == 2 ? "active" : ""} number="2"/>
                  <SubHeader stage={stage > 2 ? 'complete' : stage == 2 ? "active" : ""} text="Questions"/>
                </div>
                <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                  <ProgCircle stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} number="3"/>
                  <SubHeader stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} text="Summary"/>
                </div>

              </div>
              <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
                <div style={{display: 'flex',flex: '1',alignItems:'center'}}>
                  <div style={[header, stage > 6 ? headerComplete: stage > 3 ? headerActive: '']}>Manager Review</div>
                    </div>
                    <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                    <ProgCircle stage={stage > 4 ? 'complete' : stage == 4 ? "active" :''} number="1"/>
                    <SubHeader stage={stage > 4 ? 'complete' : stage == 4 ? "active" :''} text="Competencies"/>


                    </div>
                    <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                      <ProgCircle stage={stage > 5 ? 'complete' : stage == 5 ? "active" : ""} number="2"/>
                      <SubHeader stage={stage > 5 ? 'complete' : stage == 5 ? "active" : ""} text="Questions"/>
                    </div>
                    <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                      <ProgCircle stage={stage > 6 ? 'complete' : stage == 6 ? "active" : ""} number="3"/>
                      <SubHeader stage={stage > 6 ? 'complete' : stage == 6 ? "active" : ""} text="Summary"/>
                    </div>

                  </div>
                  <div style={{display: "flex", flexDirection: 'column',marginLeft: '10px',marginTop: '10px',marginBottom: "50px"}}>
                    <div style={{display: 'flex',flex: '1',alignItems:'center'}}>
                      <div style={[header, stage > 9 ? headerComplete: stage > 6 ? headerActive: '']}>Approval</div>
                        </div>
                        <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                        <ProgCircle stage={stage > 7 ? 'complete' : stage == 7 ? "active" :''} number="1"/>
                        <SubHeader stage={stage > 7 ? 'complete' : stage == 7 ? "active" :''} text="Competencies"/>


                        </div>
                        <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                          <ProgCircle stage={stage > 8 ? 'complete' : stage == 8 ? "active" : ""} number="2"/>
                          <SubHeader stage={stage > 8 ? 'complete' : stage == 8 ? "active" : ""} text="Questions"/>
                        </div>
                        <div style={{display: 'flex',flex: '1',marginTop: '10px',alignItems:'center'}}>
                          <ProgCircle stage={stage > 9 ? 'complete' : stage == 9 ? "active" : ""} number="3"/>
                          <SubHeader stage={stage > 9 ? 'complete' : stage == 9 ? "active" : ""} text="Summary"/>
                        </div>

                      </div>




            </div>







      </div>




    )
  }
}
