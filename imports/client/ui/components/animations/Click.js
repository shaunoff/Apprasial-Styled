import React from 'react';
import {TimelineMax} from "gsap";
import GSAP from 'react-gsap-enhancer'



function firstAnimation(args){
  var onComplete = () =>{
    this.tweenFromTo("startTest","endTest")
  }
  const {hand,inner,outer} = args.options
  var tl = new TimelineMax();


  return tl
  .add("startTest")
  .set(inner, {opacity: 0})
  .set(outer, {opacity: 0})
  .to(hand, 0.4, {scale: 1.2, ease: Power2.easeOut},0)
  .to(hand, 0.4, {scale: 1, ease: Power2.easeIn},0.4)
  .to(inner, 0.4, {opacity: 1},0.8)
  .to(outer, 0.4, {opacity: 1},0.9)
  .to(outer, 0.4, {opacity: 0},1.3)
  .to(inner, 0.4, {opacity: 0,onComplete: onComplete},1.5)

  .add("endTest")



}

class Click extends React.Component {
  componentDidMount(){
     this.anim = this.addAnimation(firstAnimation,this)
   }
  render(){
    const size = this.props.size || "30px"
    return(
      <svg ref={(ref) => {this.hand = ref;}} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1" x="0px" y="0px" viewBox="0 0 449.406 449.406" style={{width: `${size}`,enableBackground:'new 0 0 449.406 449.406'}} xmlSpace="preserve" width="100px" height="100px">
      <g>
        <path ref={(ref) => {this.outer = ref;}} d="M83.703,141.5c0-61.481,50.019-111.5,111.5-111.5s111.5,50.019,111.5,111.5c0,7.208-0.709,14.473-2.107,21.596l29.438,5.78   c1.771-9.023,2.67-18.233,2.67-27.376c0-78.023-63.477-141.5-141.5-141.5s-141.5,63.477-141.5,141.5   c0,32.037,11.021,63.434,31.031,88.406l23.41-18.76C92.155,191.191,83.703,167.108,83.703,141.5z" fill="#6bada7"/>
        <path ref={(ref) => {this.inner = ref;}} d="M195.203,80c33.911,0,61.5,27.589,61.5,61.5h30c0-50.453-41.047-91.5-91.5-91.5s-91.5,41.047-91.5,91.5   c0,15.842,4.138,31.479,11.966,45.223l26.068-14.849c-5.256-9.227-8.034-19.73-8.034-30.374C133.703,107.589,161.292,80,195.203,80   z" fill="#6bada7"/>
        <path  d="M354.203,215.951c-4.623,0-9.071,0.76-13.228,2.161c-5.117-17.12-21.011-29.635-39.772-29.635   c-4.887,0-9.576,0.855-13.934,2.414c-5.755-16.018-21.092-27.507-39.066-27.507c-3.99,0-7.845,0.578-11.5,1.634V141.5   c0-22.883-18.617-41.5-41.5-41.5s-41.5,18.617-41.5,41.5v87.36c-3.655-1.056-7.51-1.634-11.5-1.634   c-22.883,0-41.5,18.617-41.5,41.5v77.851c0,56.7,46.129,102.829,102.828,102.829h89.344c56.699,0,102.828-46.129,102.828-102.829   v-89.126C395.703,234.568,377.086,215.951,354.203,215.951z M365.703,346.578c0,40.158-32.671,72.829-72.828,72.829h-89.344   c-40.157,0-72.828-32.671-72.828-72.829v-77.851c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v60.572h30V141.5   c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v63.384v44.022v8.545h30v-8.545v-44.022c0-6.341,5.159-11.5,11.5-11.5   s11.5,5.159,11.5,11.5v52.567h30v-27.474c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5v27.474h30   c0-6.341,5.159-11.5,11.5-11.5s11.5,5.159,11.5,11.5V346.578z" fill="#888888"/>
      </g>

      </svg>

    )
  }
}
export default GSAP()(Click)
