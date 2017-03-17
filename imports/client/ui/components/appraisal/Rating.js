import React, { Component } from 'react';
import {HOC} from 'formsy-react';
import Radium from 'radium'

@Radium
class Rating extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      rating: this.props.value ? this.props.value : ''
    }
  }
  ratingChange(data){
    this.setState({rating: data})
    this.props.setValue(data)
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
        cursor: 'pointer',
        ':hover': {
          animation: 'x 0.8s ease',
          animationName: popAnimation
        },
      },
      scored: {
        border: '2px solid #007681',
        background: "#007681",
      },
      number: {
        color: "white",
        fontSize: '16px',
        fontWeight: '700'
      }

    }

    return (
      <div style={{display: 'flex'}}>
        <div key="1" onClick={this.ratingChange.bind(this,1)} style={[styles.normal, this.state.rating >= 1 && styles.scored]}>
          <div style={styles.number}>1</div>
        </div>
        <div key="2" onClick={this.ratingChange.bind(this,2)} style={[styles.normal, this.state.rating >= 2 && styles.scored]}>
          <div style={styles.number}>2</div>
        </div>
        <div key="3" onClick={this.ratingChange.bind(this,3)} style={[styles.normal, this.state.rating >= 3 && styles.scored]}>
          <div style={styles.number}>3</div>
        </div>
        <div key="4" onClick={this.ratingChange.bind(this,4)} style={[styles.normal, this.state.rating >= 4 && styles.scored]}>
          <div style={styles.number}>4</div>
        </div>
        <div key="5" onClick={this.ratingChange.bind(this,5)} style={[styles.normal, this.state.rating >= 5 && styles.scored]}>
          <div style={styles.number}>5</div>
        </div>
    </div>
  )
  }
}
export default HOC(Rating);
