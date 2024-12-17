import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RadialSeparators from "./RadialSeparators";
import { color } from 'chart.js/helpers';


const percentage = 80;


const Status = () => {
  return (
    <div className='w-[8rem]'>   
    <CircularProgressbarWithChildren
      value={100-percentage}
      text={`${percentage}%`}
      strokeWidth={10}
      styles={buildStyles({
        pathColor: "#f3f3f3",
        trailColor: "#0086AD",
        strokeLinecap: "inner-rounded"
      })}
    >
      <RadialSeparators
        count={12}
        style={{
          background: "#fff",
          width: "2px",
          // This needs to be equal to props.strokeWidth
          height: `${10}%`
        }}
      />
    </CircularProgressbarWithChildren>
</div>
  )
}

export default Status