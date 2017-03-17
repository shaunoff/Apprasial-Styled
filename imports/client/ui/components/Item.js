import React, { Component } from 'react';
import Appraisals from '../../../api/appraisals/appraisals';

export default class Item extends Component {


  render() {
    return (
      <div className='item'>
        <div >
          <h3>{this.props.appraisal.name}</h3>
        </div>
      </div>
    )
  }
}
