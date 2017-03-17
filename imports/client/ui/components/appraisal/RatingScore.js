import React, { Component } from 'react';
import Radium from 'radium'

const popAnimation = Radium.keyframes({
  '50%': { transform: 'scale(1.2)' }
})
const styles = {
  base: {
    fontFamily: 'quicksand',
    fontSize: '16px',
    fontWeight: '500',
    background: '#6bada7',
    borderRadius: '4px',
    border: '0px',
    color: 'white',
    padding: '5px 15px 5px 15px',
    ':hover': {
      animation: 'x 0.8s ease',
      animationName: popAnimation
    },
    ':disabled': {
      background: '#ccc',
      color: "white",
      cursor: "not-allowed"
    },
  },
  block: {
  fontSize: "20px",
  color: 'red'
  }
};

@Radium
class RatingScore extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        disabled={this.props.disabled}
        style={[
          styles.base,
          this.props.block && styles.block
        ]}>
        {this.props.children}
      </button>
    );
  }
}
export default Button
