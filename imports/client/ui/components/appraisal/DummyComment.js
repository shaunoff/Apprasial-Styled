import React, { Component } from 'react';

import Radium from 'radium'

@Radium
export default class DummyComment extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      comment: ''
    }


  }
  
  render(){
    styles={
      box: {
        resize: 'none',
        fontFamily: 'quicksand',
        padding: '5px',
        fontSize: '14px',
        fontWeight: '500',
        color: "#aaa",
        minHeight: '77px',
        flex: '1',
        backgroundColor: "rgb(248, 250, 251)",
        border: '2px solid #ccc',
        borderRadius: '4px',
        margin: '10px',
        cursor: "not-allowed"

      }
    }
    return (
      <div style={styles.box}>
        {this.props.value}

      </div>
  )
  }
}
