import React from 'react';
import {Circle} from 'rc-progress';
import HourGlass from '../animations/HourGlass.js'
import Click from '../animations/Click.js'
import ProgCircle from '../progressSidebar/ProgCircle.js';
import Header from '../progressSidebar/Header.js';
import SubHeader from '../progressSidebar/SubHeader.js';
import Radium from 'radium'

@Radium
export default class HomeProgress extends React.Component {
  render(){
    const styles={
      section: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',

      },
      subSection: {
        display: 'flex',
        alignItems: 'center',
        flex: '1',
        height: '40px'
      },
      circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ccc',
        width: '30px',
        height: '30px',
        background:'white',
        borderRadius: '40px',
        border: '3px solid #ccc',
        zIndex: '3',
        position: 'relative'
      },
      circleActive: {
        width: '50px',
        height: '50px',
        border: '3px solid #ccc',
      },
      circleComplete: {
        border: '3px solid #6bada7',
      },
      subtitle:{
        textAlign: 'center',
        margin: '10px 5px',
        color: "#ccc"

      },
      subtitleActive:{
        color: "#6bada7"

      },
      subtitleComplete:{
        color: "#6bada7"

      },
      line:{
        flex: '1',
        background: 'rgb(204, 204, 204)',
        height: '3px'

      },
      lineEnd:{
        flex: '1',
        background: 'white',
        height: '4px'
      },
      lineActive :{
        background: '#ccc',
      },
      lineComplete :{
        background: '#6bada7',
      },

    }
    const {stage} = this.props
    let section ="none"
    stage < 4 ? section = 1 : stage > 3 && stage < 7 ? section = 2 : stage > 6 && stage < 9 ? section = 3 : stage > 8 && stage < 11 ? section = 4 : section= 5
    console.log(section)
    return(
    <div style={{display: 'flex'}}>
      <div style={styles.section}>
        <div style={styles.subSection}>
          <div style={styles.lineEnd}></div>
          <div style={[styles.circle,section == 1 ? styles.circleActive : styles.circleComplete]}>
            {section == 1 ? <Click/> : <img style={{width: '12px'}} src="/icons/checked2.svg"/>}
          </div>
          <div style={[styles.line, section == 1 ? "" : styles.lineComplete]}></div>
        </div>
        <div style={[styles.subtitle,styles.subtitleActive]}>
          Self Assessment
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.subSection}>
          <div style={[styles.line,section > 2 ? styles.lineComplete: ""]}></div>
          <div style={[styles.circle,section == 2 ? styles.circleActive: section > 2 ? styles.circleComplete : ""]}>
            {section < 2 ?
              <div><div>2</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
              : section == 2 ?
              <HourGlass size="30px"/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
            }
          </div>
          <div style={[styles.line,section > 2 ? styles.lineComplete: ""]}></div>
        </div>
        <div style={[styles.subtitle, section > 1 ? styles.subtitleActive : ""]}>
          Manager Assessment
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.subSection}>
          <div style={[styles.line,section > 3 ? styles.lineComplete: ""]}></div>
          <div style={[styles.circle,section == 3 ? styles.circleActive: section > 2 ? styles.circleComplete : ""]}>
            {section < 3 ?
              <div><div>3</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
              : section == 3 ?
              <Click/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
            }
          </div>
          <div style={[styles.line,section > 3 ? styles.lineComplete: ""]}></div>
        </div>
        <div style={[styles.subtitle, section > 2 ? styles.subtitleActive : ""]}>
          Review & Targets
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.subSection}>
          <div style={[styles.line,section > 4 ? styles.lineComplete: ""]}></div>
          <div style={[styles.circle,section == 4 ? styles.circleActive: section > 4 ? styles.circleComplete : ""]}>
            {section < 4 ?
              <div><div>2</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
              : section == 4 ?
              <HourGlass size="30px"/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
            }
          </div>
          <div style={styles.lineEnd}></div>
        </div>
        <div style={[styles.subtitle, section > 3 ? styles.subtitleActive : ""]}>
          Finalization
        </div>
      </div>


    </div>
    )
  }
}
