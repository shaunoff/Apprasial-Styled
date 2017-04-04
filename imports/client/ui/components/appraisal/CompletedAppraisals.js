import React from 'react';
import moment from 'moment'
import Radium from 'radium'
import { Line, Circle } from 'rc-progress';
import {averageScore} from '../../utilities/averageScore'
import pdfReview from '../../utilities/pdfReview.js'
@Radium
export default class CompletedAppraisals extends React.Component {
 printPdf(data){
   pdfReview(data,'final')
 }
  render(){
    const styles={
      wrapper: {
        display: 'flex',
        alignItems: 'center',
        margin: '10px',
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        borderTop: '1px solid #ccc',
        borderLeft: "6px solid #6bada7",
        height: '90px'
      },
      year: {
        fontSize: "16px",
        fontWeight: '700',
        color: '#585858',
        padding:"10px"
      },
      scoreContainer: {
        flex: '2',
        display: 'flex',
        flexDirection: "column",
        fontSize: "12px",
        fontWeight: '700',
        color: '#585858',
        margin:"10px"
      }
    }
    const {appraisal,user} = this.props
    const appData = {}
    appData.currentAppraisal = appraisal
    appData.profile = user[0].profile
    

    return(
      <div style={styles.wrapper}>
        <div style={styles.year}>
           {moment(appraisal.completed).format('YYYY')}
        </div>
        <div style={styles.scoreContainer}>
            <div>Self Assessment: <span style={{fontWeight: '700', color: "#007681"}}>{averageScore(appraisal,"employee")}</span></div>
           <Line style={{marginBottom: '10px'}} percent={averageScore(appraisal,"employee","percent")} trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
           <div>Manager's Assessment: <span style={{fontWeight: '700', color: "#007681"}}>{averageScore(appraisal,"manager")}</span></div>
          <Line style={{marginBottom: '10px'}} percent={averageScore(appraisal,"manager","percent")} trailWidth="3" strokeWidth="3" strokeColor="#6bada7" />
        </div>
        <div style={{padding:"10px"}}>
          <img onClick={this.printPdf.bind(this,appData)} style={{ width: '40px'}} src="/icons/pdf.svg"/>
        </div>
      </div>
    )
  }
}
