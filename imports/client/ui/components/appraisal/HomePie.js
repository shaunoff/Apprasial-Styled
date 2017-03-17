import React from 'react';

import {Doughnut} from 'react-chartjs-2';
import SubHeader from '../progressSidebar/SubHeader.js';
import Radium from 'radium'

@Radium
export default class HomePie extends React.Component {
  render(){
    const {stage} = this.props
    const complete = stage - 1;
  	const incomplete = stage > 9 ? 0 : 9 - stage;
  	const inProgress = stage > 9 ? 0 : 1;


    const data = {
  		labels: [
  			'Complete',
  			'Incomplete',
  			'In Progress'
  		],
  	  legend: {

  	  },
  		datasets: [{
  			data: [complete, inProgress, incomplete],
  			backgroundColor: [
  			'#6bada7',
  			'#007681',
  			'#ccc'
  			],
  			hoverBackgroundColor: [
  			'#007681',
  			'#6bada7',
  			'#ccc'
  			]
  		}]
  	};
    const styles={
      percent: {
        height: '0px',
        width: '40px',
        margin: 'auto',
        flex: '1',
        textAlign:'center',
        position: 'relative',
        top: '10px',
        color: '#007681',
        fontSize:'14px'
      },
        pieLegend: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'center',
        marginRight: '15px'
      },
      legendWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: '10px'
      },
      legendBullet: {
        width: '20px',
        height: '20px',
        borderRadius: '30px',
        background: "#007681",
        marginRight: '8px'
      },
      legendSub:{
        fontSize: '12px',
        fontWeight: '700',
        color: '#007681'
      }

    }
    return(
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',margin: '0px 15px 15px 0px'}}>

            <Doughnut
              width={150}
              height={150}
              data={data}
              options={{
                maintainAspectRatio: false,
                legend: {
                  display: false
                }
              }}
            />

        </div>
        <div style={styles.pieLegend}>
          <div style={styles.legendWrapper}>
            <div style={[styles.legendBullet, {background: '#6bada7'}]}></div>
              <div style={[styles.legendSub, {color: '#6bada7'}]}>: Complete</div>
          </div>
          <div style={styles.legendWrapper}>
            <div style={styles.legendBullet}></div>
              <div style={styles.legendSub}>: In Progress</div>
          </div>
          <div style={styles.legendWrapper}>
            <div style={[styles.legendBullet, {background: '#ccc'}]}></div>
              <div style={[styles.legendSub, {color: '#ccc'}]}>: Incomplete</div>
          </div>

        </div>
      </div>
    )
  }
}
