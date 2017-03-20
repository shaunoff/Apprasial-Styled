import React from 'react';
import Radium from 'radium'
import HourGlass from '../animations/HourGlass.js'
import Click from '../animations/Click.js'

@Radium
export default class Progress2 extends React.Component {
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
        fontWeight: '700',
        margin: '5px',
        color: "#ccc"

      },
      subtitleActive:{
        color: "#6bada7",
        fontSize: '18px'

      },
      subtitleComplete:{
        color: "#6bada7",


      },
      line:{
        flex: '1',
        background: 'rgb(204, 204, 204)',
        width: '3px',
        height: '40px'

      },
      lineEnd:{

        background: 'white',
        height: '25px'
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
    <div style={{
      display: 'flex',
      minWidth: '165px',
      height: "calc(100vh - 95px)",
      margin: '15px 0px 15px 15px',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'white',
      border: "2px solid #ccc",
      borderRadius: '8px',
  }}>


          <div style={styles.lineEnd}></div>
          <div style={[styles.circle,stage == 1 ? styles.circleActive : styles.circleComplete]}>
            {stage == 1 ? <Click/> : <img style={{width: '12px'}} src="/icons/checked2.svg"/>}
          </div>
          <div style={[styles.subtitle,stage == 1 ? styles.subtitleActive: stage > 1 ? styles.subtitleComplete : ""]} >Competencies</div>

          <div style={[styles.line, stage == 1 ? "" : styles.lineComplete]}></div>




          <div style={[styles.line,stage > 2 ? styles.lineComplete: ""]}></div>
          <div style={[styles.circle,stage == 2 ? styles.circleActive: stage > 2 ? styles.circleComplete : ""]}>
            {stage < 2 ?
              <div><div>2</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
              : stage == 2 ?
              <HourGlass size="30px"/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
            }
          </div>
          <div style={[styles.subtitle,stage == 2 ? styles.subtitleActive: stage > 2 ? styles.subtitleComplete : ""]} >Achievements</div>
          <div style={[styles.line,styles > 2 ? styles.lineComplete: ""]}></div>



          <div style={[styles.line,stage > 3 ? styles.lineComplete: ""]}></div>
          <div style={[styles.circle,stage == 3 ? styles.circleActive: stage > 2 ? styles.circleComplete : ""]}>
            {stage < 3 ?
              <div><div>3</div><img style={{position: 'absolute',left: '20px',top: "20px",width: '15px'}} src="/icons/padlock.svg"/></div>
              : stage == 3 ?
              <Click/>
              :
              <img style={{width: '12px'}} src="/icons/checked2.svg"/>
            }
          </div>
          <div style={styles.subtitle}>Summary</div>
          <div style={[styles.lineEnd]}></div>




    </div>
    )
  }
}
