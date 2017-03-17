import React, { Component } from 'react';
import {HOC} from 'formsy-react';
import Radium from 'radium'

@Radium
class Comment extends React.Component {
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
        color: "#585858",
        flex: '1',
        border: '2px solid #ccc',
        borderRadius: '4px',
        margin: '10px',
        ':focus': {
          border: '2px solid #6bada7',
          outline: '0',
          boxShadow: '0 0 5px #6bada7'
        },
      }
    }
    return (
      <textarea
        style={styles.box}
        placeholder={this.props.placeholder}
        value={this.props.getValue()}
        name={this.props.name}
        type="text"
        rows={this.props.rows}
        onFocus={this.props.onFocus}
        onChange={(e) => this.props.setValue(e.target.value)}
      />
  )
  }
}
export default HOC(Comment);
