import React from 'react';
import Radium from 'radium'

@Radium
export default class ProgCircle extends React.Component {
  render(){
    const popAnimation = Radium.keyframes({
      '50%': { transform: 'scale(1.2) ' }
    })
    const styles = {
      normal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20px',
        height: '20px',
        background:'white',
        borderRadius: '40px',
        border: '2px solid #ccc',
        zIndex: '3',
        marginRight: '8px'
      },
      number: {
        fontSize: '16px',
        fontWeight: '500',
        color: '#ccc'
      },
      numberActive: {
        color: "#007681"
      },

      active: {
        border: '2px solid #007681',

      },
      complete: {
        border: '2px solid #6bada7',
        animation: ' 0.6s ease',
        animationName: popAnimation

      },
    }
    const {stage,inProgress} =this.props
    return(
      <div style={[styles.normal, this.props.style, stage == "active" ? styles.active : stage == "complete" ? styles.complete : ""]}>
        {stage == "complete" ?
          <img style={{width: '12px'}} src="/icons/checked2.svg"/>
          :
          <div style={[styles.number, stage == 'active' && styles.numberActive]}>{this.props.number}</div>
        }
      </div>
    )
  }
}
