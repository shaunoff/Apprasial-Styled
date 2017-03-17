import React from 'react';
import {TimelineMax} from "gsap";
import GSAP from 'react-gsap-enhancer'

function firstAnimation(args){
  var onComplete = () =>{
    this.tweenFromTo("startTest","endTest")
  }
  const {arrow,lock} = args.options
  var tl = new TimelineMax();


  return tl
  .add("startTest")
  .to(arrow, 1, {y: -130, ease: Power4.easeIn})
  .to(arrow, 0.5, {opacity: 0, ease: Power1.easeIn},'-=0.5')
  .fromTo(lock, 0.8, {opacity: 0},{opacity:1,ease: Power1.easeOut},'-=0.2')
  .to(lock, 0.5, {opacity: 1,onComplete: onComplete})
  .add("endTest")



}


class SummaryModalBody extends React.Component {
  componentDidMount(){
     this.anim = this.addAnimation(firstAnimation,this)
   }
  render(){
    console.log(this.props)
    return(
      <div style={{height: '100%',display: 'flex',alignItems: 'center',justifyContent:'center'}}>
        <div style={{display: 'flex', flexDirection: "column",alignItems: 'center'}}>
        <div style={{fontSize: '20px', fontWeight: '700',padding: '20px', color: '#6bada7'}}>{`Save ${this.props.section}?`}</div>
        <div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          	 viewBox="0 0 423.3 423.3" style={{width: '80px',enableBackground:"new 0 0 423.3 423.3"}} xmlSpace="preserve">
          <style type="text/css">
          	{'.st0{fill:#888888;}'}
          	{'.st1{fill:#6BADA7;stroke:#6BADA7;stroke-width:6;stroke-miterlimit:10;}'}
          	{'.st2{fill:#6BADA7;stroke:#6BADA7;stroke-width:7;stroke-miterlimit:10;}'}
          </style>
          <g id="Capa_1">
          	<g>
          		<path className="st0" d="M325.7,259.3H88c-44,0-79.9-35.8-79.9-79.8c0-43.4,34.8-78.9,78-79.8c15.4-53.4,64-90.2,119.9-90.2
          			c46.3,0,88,25.1,109.9,65.8c3.2-0.3,6.5-0.5,9.7-0.5c50.9,0,92.3,41.4,92.3,92.3C418,217.9,376.6,259.3,325.7,259.3z M89,112.1
          			c-38.3,0-68.5,30.2-68.5,67.4c0,37.2,30.3,67.4,67.5,67.4h237.7c44.1,0,79.9-35.9,79.9-79.9s-35.9-79.9-79.9-79.9
          			c-3.9,0-7.8,0.3-11.6,0.8c-2.8,0.8-5.8-0.5-7.1-3.2c-19.2-38.8-57.8-62.9-100.9-62.9c-51.9,0-96.8,35.2-109.1,85.6
          			c-0.7,2.8-3.2,4.7-6,4.7c0,0-0.1,0-0.2,0l-1.6-0.1C89.1,112.1,89.1,112.1,89,112.1z"/>
          		<path className="st0" d="M325.7,263.3H88c-46.2,0-83.9-37.6-83.9-83.8c0-22,8.5-42.9,24-58.6c14.7-15.1,34.2-23.9,55.1-25.1
          			c8.1-25.9,23.7-48.1,45.3-64.4C151,14.4,177.8,5.5,206.1,5.5c46.6,0,89.3,25.1,112.2,65.6c2.5-0.2,5-0.3,7.5-0.3
          			c53.1,0,96.3,43.2,96.3,96.3c0,25.7-10,49.9-28.2,68.1C375.6,253.3,351.4,263.3,325.7,263.3z M206.1,13.5
          			c-54.4,0-101,35.1-116,87.3l-0.8,2.8l-2.9,0.1c-40.9,0.9-74.1,34.9-74.1,75.8c0,41.8,34,75.8,75.9,75.8h237.7
          			c23.6,0,45.7-9.2,62.4-25.9S414,190.6,414,167c0-48.7-39.6-88.3-88.3-88.3c-3,0-6.2,0.2-9.3,0.5l-2.7,0.3l-1.3-2.4
          			C291.3,37.9,250.5,13.5,206.1,13.5z M325.7,250.9H88c-39.4,0-71.5-32-71.5-71.4c0-19.1,7.5-37,21.1-50.5
          			c13.5-13.4,31.6-20.8,50.9-20.9l0.2,0l2.3,0.1c1,0,1.9-0.7,2.1-1.7c12.8-52.2,59.3-88.6,113-88.6c44.6,0,84.6,25,104.5,65.1
          			c0.5,0.9,1.5,1.4,2.5,1.1l0.5-0.1c4-0.6,8.1-0.9,12.2-0.9c46.3,0,83.9,37.6,83.9,83.9C409.6,213.3,372,250.9,325.7,250.9z
          			 M89.2,116.1c-0.1,0-0.1,0-0.2,0c-35.6,0-64.5,28.4-64.5,63.4c0,35,28.5,63.4,63.5,63.4h237.7c41.9,0,75.9-34,75.9-75.9
          			c0-41.8-34.1-75.9-75.9-75.9c-3.6,0-7.3,0.3-10.9,0.7c-4.6,1.1-9.4-1.1-11.5-5.4c-18.5-37.4-55.7-60.7-97.3-60.7
          			c-50,0-93.3,33.9-105.3,82.5c-1.1,4.6-5.2,7.8-9.9,7.8l-0.4,0L89.2,116.1z M89,108.1v4V108.1C89,108.1,89,108.1,89,108.1L89,108.1
          			z"/>
          	</g>
          	<path ref={(ref) => {this.arrow = ref;}} className="st1" d="M201.2,315.2c-4.2,4.4-8.3,8.9-12.6,13.2c-3,3-6.6,4-10.5,2.4c-5.8-2.3-8-9.8-3.7-14.3
          		c10.2-10.8,20.8-21.2,31.5-31.6c3.5-3.4,8.5-3.1,12.2,0.5c10.3,10,20.4,20.2,30.4,30.5c3.7,3.8,3.4,9.2-0.1,12.8
          		c-3.6,3.7-9.2,4-13.1,0.2c-4.5-4.3-8.6-9-12.9-13.5c-0.4,0.2-0.7,0.4-1.1,0.6c-0.1,1.3-0.2,2.7-0.2,4c0,18.8,0,37.7,0,56.5
          		c0,1-0.1,2.1,0,3.1c0.5,8.6-4.9,11.9-9.4,12c-5.9,0-9.4-4.5-9.4-12c0-20,0-40,0-60c0-1.2,0-2.5,0-3.7
          		C201.9,315.7,201.6,315.4,201.2,315.2z"/>
          </g>
          <g id="Layer_2">
          	<path ref={(ref) => {this.lock = ref;}}  className="st2" d="M243.9,122.3h-0.9v-5.7c0-16.9-13.7-30.6-30.6-30.6c-16.9,0-30.6,13.7-30.6,30.6v5.7h-0.9
          		c-6.3,0-11.4,5.1-11.4,11.4v52.5c0,6.3,5.1,11.4,11.4,11.4h62.9c6.3,0,11.4-5.1,11.4-11.4v-52.5
          		C255.3,127.5,250.2,122.3,243.9,122.3z M194.2,116.7c0-10,8.1-18.2,18.2-18.2c10,0,18.2,8.1,18.2,18.2v5.7h-36.3V116.7z"/>
          </g>
          </svg>
        </div>
        <div style={{fontSize: '16px', fontWeight: '700',padding: '10px',color: '#6bada7',color: '#585858'}}>If you click confirm your inputs cannot be edited.</div>
      </div>
    </div>
    )
  }
}
export default GSAP()(SummaryModalBody)
