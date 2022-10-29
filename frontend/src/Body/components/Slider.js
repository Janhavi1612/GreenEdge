import { Slider } from 'antd';

import React, { useState } from 'react';
import 'antd/dist/antd.min.css';


const RangeSlider = () => {
  
  let min = 0;
  let max=100;
  let disabled = false
  const marks = {
    0: {
        label: <strong>0</strong>,
      },
    10:'',
    20:'',
    30:'',
    40:'',
    50:'',
    60:'',
    70:'',
    80:'',
    90:'',
    100: {
      label: <strong>100</strong>,
    },
  };
  return (
    <div>
      <Slider step={10} marks = {marks} range={true} defaultValue={[0, 100]} included={true} disabled={disabled} />
    </div>
  );

// return(
//     <div>
// <Slider
//           className="slider-main-div"
//           min={min}
//           max={max}
          
//           range={true}
//           defaultValue={[min, max]}
//           value={[min, max]}
//         />
//     </div>
// )
};
export default RangeSlider;


