import React from 'react';
import {TimelineMax} from "gsap";
import GSAP from 'react-gsap-enhancer'
import ProgCircle from '../progressSidebar/ProgCircle.js'
import Radium from 'radium'
import HourGlass from '../animations/HourGlass.js'



@Radium
export default class InProgress extends React.Component {
  
  render(){
    const {stage} = this.props
    styles={
      circle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '30px',
        height: '30px',
        background:'white',
        borderRadius: '40px',
        border: '2px solid #ccc',
        zIndex: '3',
      },
      circleActive: {
        width: '50px',
        height: '50px',
      },
      circleComplete: {
        border: '2px solid #6bada7',
      },
      line:{
        width: '15px',
        background: 'rgb(204, 204, 204)',
        height: '2px'

      },
      lineComplete :{
        background: '#6bada7',
      },
      number: {

        fontWeight: '700',
        color: '#ccc'

      }

    }
    return(
      <div style={{height: '100%',display: 'flex',alignItems: 'center',justifyContent:'center'}}>
        <div style={{display: 'flex',minWidth: '600px', flexDirection: "column",alignItems: 'center'}}>

        <div style={{fontSize: '18px', fontWeight: '700',padding: '20px', color: '#585858'}}>{this.props.text}</div>
        <div style={{display: 'flex',alignItems: 'center'}}>

            <div style={[styles.circle, stage > 3 ? styles.circleComplete : styles.circleActive]}>
              {stage < 4 ?
              <HourGlass size="30px"/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
              }
            </div>
            <div style={[styles.line,stage > 3 ? styles.lineComplete : ""]}></div>
            <div style={[styles.line,stage > 6 ? styles.lineComplete: ""]}></div>
            <div style={[styles.circle,stage > 3 && stage < 7 ? styles.circleActive : stage > 6 ? styles.circleComplete: ""]}>
              {stage < 4 ?
              <div style={styles.number}>2</div>
              :
              stage > 3 && stage < 7 ?
              <div style={styles.number}>
                <HourGlass size="30px"/>
              </div>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
              }
            </div>
            <div style={[styles.line,stage > 6 ? styles.lineComplete: ""]}></div>
            <div style={[styles.line,stage > 8 ? styles.lineComplete: ""]}></div>
            <div style={[styles.circle,stage > 6 && stage < 9 ? styles.circleActive : stage > 8 ? styles.circleComplete: ""]}>
              {stage < 7 ?
              <div style={styles.number}>2</div>
              :
              stage > 6 && stage < 9 ?
              <div style={styles.number}>
                <HourGlass size="30px"/>
              </div>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
              }
            </div>
            <div style={[styles.line,stage > 8 ? styles.lineComplete: ""]}></div>
            <div style={[styles.line,stage > 11 ? styles.lineComplete: ""]}></div>
              <div style={[styles.circle,stage > 8 && stage < 11 ? styles.circleActive : stage > 11 ? styles.circleComplete: ""]}>
                {stage < 9 ?
                <div style={styles.number}>4</div>
                :
                stage > 8 && stage < 11 ?
                <div style={styles.number}>
                  <HourGlass size="30px"/>
                </div>
                :
                <img style={{width: '12px'}} src="/icons/checked2.svg"/>
                }
              </div>
            </div>
        <div style={{fontSize: '16px', fontWeight: '700',padding: '20px',color: '#6bada7',color: '#585858'}}>You will be notified when you can access this page.</div>

      </div>
    </div>
    )
  }
}
