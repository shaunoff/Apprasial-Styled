import React from 'react';
import Radium from 'radium'

@Radium
export default class Header extends React.Component {
  render(){
    const popAnimation = Radium.keyframes({
      '50%': { transform: 'scale(1.2) ' }
    })
    const styles = {
      text: {
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: '500',
        color: '#ccc'
      },
      active: {
        color: '#007681',
        fontWeight: '700',
      },
      complete: {
        color: '#6bada7',
        fontWeight: '500',
        animation: ' 0.6s ease',
        animationName: popAnimation
      },
    }
    const {stage} =this.props
    return(
      <div style={[styles.text, stage == 'active' ? styles.active: stage == 'complete' ? styles.complete : ""]}>{this.props.text}</div>
    )
  }
}
