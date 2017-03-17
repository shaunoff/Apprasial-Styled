import React from 'react';
import {Line} from 'rc-progress';


const OverallProgress = ({stage}) => {
  const percent = Math.round(((stage-1)/9)*100)
  return <div style={{display: 'flex', flexDirection: 'column',marginRight: '20px'}}>

            <div ><Line percent={percent} strokeWidth="6" strokeColor="#007681" trailWidth="6" trailColor='#ccc'/></div>
            <div style={{flex: '1', fontSize: '12px'}}>{`${percent} %`}</div>

        </div>
}


export default OverallProgress;
