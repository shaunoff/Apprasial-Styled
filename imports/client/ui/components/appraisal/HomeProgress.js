import React from 'react';
import {Circle} from 'rc-progress';

import ProgCircle from '../progressSidebar/ProgCircle.js';
import Header from '../progressSidebar/Header.js';
import SubHeader from '../progressSidebar/SubHeader.js';
import Radium from 'radium'

@Radium
export default class HomeProgress extends React.Component {
  render(){
    const {stage} = this.props
    const styles={
      percent: {
        height: '0px',
        width: '40px',
        margin: 'auto',
        flex: '1',
        textAlign:'center',
        position: 'relative',
        top: '10px',
        color: '#007681',
        fontSize:'14px'

      }
    }
    return(
      <div style={{display: 'flex',justifyContent: 'center'}}>
        <div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <div style={{display: 'flex', flex: '1', alignItems: 'center'}}>
            <div style={{width: '40px',margin: '0px 10px 0px 10px'}}>
              <div style={[styles.percent]}>
                {stage == 1 ? '0%' : stage == 2 ? '33%' : stage == 3 ? '66%': <img style={{width: '20px'}} src="/icons/checked2.svg"/>}
              </div>
              <Circle trailWidth={6}  percent={stage == 1 ? '0' : stage == 2 ? '33' : stage == 3 ? '66': '100'} strokeWidth="8" strokeColor={stage > 3 ? '#6bada7' : '#007681'}/>
            </div>
            <div style={{marginRight: '15px'}}>
              <Header stage={stage > 3 ? 'complete' : 'active'} text="Self-Assessment"/>
            </div>
            <div style={{flex: '1', background: '#ccc', height: '2px'}}>

            </div>
          </div>



              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 1 ? 'complete' : 'active'} number="1"/>
                <SubHeader stage={stage > 1 ? 'complete' : 'active'} text="Competencies"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 2 ? 'complete' : stage == 2 ? "active" : ""} number="2"/>
                <SubHeader stage={stage > 2 ? 'complete' : stage == 2 ? "active" : ""} text="Questions"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} number="3"/>
                <SubHeader stage={stage > 3 ? 'complete' : stage == 3 ? "active" : ""} text="Summary"/>
              </div>
        </div>




        <div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <div style={{display: 'flex', flex: '1', alignItems: 'center'}}>
            <div style={{width: '40px',margin: '0px 10px 0px 10px'}}>
              <div style={[styles.percent, stage < 4 ? {color: '#ccc'}: stage < 7 ? {color: '#007681'} : {color: '#6bada7'}]}>
                {stage <= 4 ? '0%' : stage == 5 ? '33%' : stage == 6 ? '66%': <img style={{width: '20px'}} src="/icons/checked2.svg"/>}
              </div>
              <Circle trailWidth={6}  percent={stage <= 4 ? '0' : stage == 5 ? '33' : stage == 6 ? '66': '100'} strokeWidth="8" strokeColor={stage > 6 ? '#6bada7' : '#007681'}/>
            </div>
            <div style={{marginRight: '15px'}}>
              <Header stage={stage < 3 ? '' : stage <= 6 ? "active" : "complete"} text="Manager Review"/>
            </div>
            <div style={{flex: '1', background: '#ccc', height: '2px'}}>

            </div>
          </div>



              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 4 ? 'complete' : stage == 4 ? "active" :''} number="1"/>
                <SubHeader stage={stage > 4 ? 'complete' : stage == 4 ? "active" :''} text="Competencies"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 5 ? 'complete' : stage == 5 ? "active" : ""} number="2"/>
                <SubHeader stage={stage > 5 ? 'complete' : stage == 5 ? "active" : ""} text="Questions"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 6 ? 'complete' : stage == 6 ? "active" : ""} number="3"/>
                <SubHeader stage={stage > 6 ? 'complete' : stage == 6 ? "active" : ""} text="Summary"/>
              </div>
        </div>
        <div style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center'}}>
          <div style={{display: 'flex', flex: '1', alignItems: 'center'}}>
            <div style={{width: '40px',margin: '0px 10px 0px 10px'}}>
              <div style={[styles.percent, stage < 7 ? {color: '#ccc'}: stage < 9 ? {color: '#007681'} : {color: '#6bada7'}]}>
                {stage <= 7 ? '0%' : stage == 8 ? '33%' : stage == 9 ? '66%': <img style={{width: '20px'}} src="/icons/checked2.svg"/>}
              </div>
              <Circle trailWidth={6}   percent={stage <= 7 ? '0' : stage == 8 ? '33' : stage == 9 ? '66': '100'} strokeWidth="8" strokeColor={stage > 9 ? '#6bada7' : '#007681'}/>
            </div>
            <div style={{marginRight: '15px'}}>
              <Header stage={stage < 7 ? '' : stage <= 9 ? "active" : "complete"} text="Finalization"/>
            </div>

          </div>



              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 7 ? 'complete' : stage == 7 ? "active" :''} number="1"/>
                <SubHeader stage={stage > 7 ? 'complete' : stage == 7 ? "active" :''} text="Competencies"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 8 ? 'complete' : stage == 8 ? "active" : ""} number="2"/>
                <SubHeader stage={stage > 8 ? 'complete' : stage == 8 ? "active" : ""} text="Questions"/>
              </div>
              <div style={{display: 'flex',flex: '1',margin: '5px 0px 0px 16px', alignItems:'center'}}>
                <ProgCircle stage={stage > 9 ? 'complete' : stage == 9 ? "active" : ""} number="3"/>
                <SubHeader stage={stage > 9 ? 'complete' : stage == 9 ? "active" : ""} text="Summary"/>
              </div>
        </div>
      {/*<div style={{flex: '1', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',minWidth: '200px'}}>
        <div style={{height: '0px',width: '60px',margin: 'auto',flex: '1',textAlign:'center',position: 'relative', top: '20px'}}><img style={{width: '20px'}} src="/icons/checked2.svg"/></div>
        <div  style={{flex: '1',width: '60px', margin: 'auto'}}>
          <Circle trailWidth={6}  percent="10" strokeWidth="8" strokeColor="#007681"/>
        </div>
        <div  style={{flex: '1'}}>
          <Header stage="complete" text="Self-Assessment"/>
        </div>

      </div>*/}
    </div>
    )
  }
}
