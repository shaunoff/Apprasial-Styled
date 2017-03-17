import React, { Component } from 'react';

import Radium from 'radium'

@Radium
export default class DummyRating extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      rating: this.props.value ? this.props.value : ''
    }
  }

  render(){
    const popAnimation = Radium.keyframes({
      '50%': { transform: 'scale(1.4)' }
    })
    const styles={
      normal: {
        marginLeft: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: this.props.size ? this.props.size : '20px',
        height: this.props.size ? this.props.size : '20px',
        borderRadius: this.props.size ? this.props.size : '20px',
        border: '2px solid #ccc',
        background: "#ccc",
        marginRight: '8px',
        zIndex: '3',
        

      },
      scored: {
        border: '2px solid #6bada7',
        background: "#6bada7",
      },
      number: {
        color: "white",
        fontSize: '16px',
        fontWeight: '700'
      }

    }

    return (
      <div style={{display: 'flex'}}>
        <div key="1"  style={[styles.normal, this.state.rating >= 1 && styles.scored]}>
          <div style={styles.number}>1</div>
        </div>
        <div key="2"  style={[styles.normal, this.state.rating >= 2 && styles.scored]}>
          <div style={styles.number}>2</div>
        </div>
        <div key="3"  style={[styles.normal, this.state.rating >= 3 && styles.scored]}>
          <div style={styles.number}>3</div>
        </div>
        <div key="4"  style={[styles.normal, this.state.rating >= 4 && styles.scored]}>
          <div style={styles.number}>4</div>
        </div>
        <div key="5"  style={[styles.normal, this.state.rating >= 5 && styles.scored]}>
          <div style={styles.number}>5</div>
        </div>
    </div>
  )
  }
}
