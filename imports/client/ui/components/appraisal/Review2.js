import React from 'react';
import ReviewIcon from '../animations/ReviewIcon.js'
import pdfReview from '../../utilities/pdfReview.js'
import Button from '../button/Button.js'

export default class Review2 extends React.Component {


handleClick(id){
  console.log("clicked")
  Meteor.call('addReview', id, (err, res) => {
      if(err) {
        console.log('error')
      }
      if(!err) {
        console.log('Success')

      }
    });
  this.props.advance()
}
printPdf(){
  pdfReview(this.props.targetUser)
}

render(){
  const styles={
    wrapper: {
    position:  'absolute',
     display: 'flex',
     overflow: 'scroll',
     height: "calc(100vh - 95px)",
     flexDirection: 'column',
     margin: '15px',
     width: "calc(100vw - 380px)",
     display: 'flex',
     border: "2px solid #ccc",
     borderRadius: '8px',background: "white"
   }
  }

  return(
    <div ref={(ref) => {this.reviewWrapper = ref}} style={styles.wrapper}>
      <div style={{fontSize: '18px', fontWeight: '700',padding: '20px', color: '#6bada7'}}>Assessment Complete</div>
      <div style={{display: 'flex',flex: 1,minWidth: '600px', flexDirection: "column",alignItems: 'center'}}>
            <div style={{fontSize: '16px', fontWeight: '700',padding: '20px',color: '#6bada7',color: '#585858'}}>Your Manager has completed your assessment!</div>
            <div style={{margin: '40px',width: '80px'}}>
                <ReviewIcon/>
            </div>
            <Button click={this.printPdf.bind(this)} style={{marginTop: "20px"}} type="button" >Click Here to View</Button>
          <div style={{fontSize: '16px', fontWeight: '700',padding: '20px',color: '#6bada7',color: '#585858'}}>This should be reviewed before your face-toface meeting.</div>
      </div>
          <div style={{display: 'flex',margin: '10px'}}>
            <div style={{flex: '1'}}></div>
            <Button  type="button" click={this.handleClick.bind(this,this.props.targetUser._id)}>Next</Button>
          </div>
    </div>

  )
}
}
