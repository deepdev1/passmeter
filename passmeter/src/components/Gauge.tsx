import { useState } from 'react';
import GaugeChart from 'react-gauge-chart';
import { getInputDataStrength } from '../services/AppService';

const Gauge = () => {

  const [score, setScore] = useState(0);

  // let score:number = 0;
  getInputDataStrength().subscribe( (data) => {
    // let response:any = data;
    if(data.data["score"]) {
      setScore(data.data["score"] / 4);
    }
    // console.log("Gauge", data.data);
  })
  
  
  return (
    <div>
      <GaugeChart id="gauge-chart2" 
        nrOfLevels={25}
        formatTextValue={value => value+"/4"}
        percent={score} />
    </div>
  )
}

export default Gauge;