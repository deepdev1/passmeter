import { useState } from "react";
import { ApiResponse, ZxcbnResult } from "../models/model";
import { getInputDataStrength } from "../services/AppService";
import "./App.scss";

const Metrics = () => {

  const [result, setResult] = useState<ZxcbnResult>();

  // let score:number = 0;
  getInputDataStrength().subscribe( (data) => {
    // let response:any = data;
    if(data.data) {
      setResult(data.data);
    }
    console.log("Metrics", data.data);
  })

  return (
    <div className="metrics-container">

      <div className="warnings">{result?.feedback.warning}</div>
      <ul className="suggestions">
        {result?.feedback.suggestions.map((suggestion,i) => 
          <li key={i}>{suggestion}</li>
        )}
      </ul>

      <div className="guesses-container">
          <div className="guesses">{result?.guesses}</div>
          <div className="crack-times">
            <div className="metrics-container">
              <div className="heading" id="online">online</div>
              <div className="kpi" id="online">
              <div className="metric" id="first"><div className="value">{result?.crack_times_display.online_throttling_100_per_hour}</div><div className="label">with throttling</div></div>
              <div className="metric" id="second"><div className="value">{result?.crack_times_display.online_no_throttling_10_per_second}</div><div className="label">without throttling</div></div>
              </div>
            </div>
            <div className="metrics-container">
              <div className="heading" id="offline">offline</div>
              <div className="kpi" id="offline">
              <div className="metric" id="first"><div className="value">{result?.crack_times_display.offline_fast_hashing_1e10_per_second}</div><div className="label">fast hashing</div></div>
              <div className="metric" id="second"><div className="value">{result?.crack_times_display.offline_slow_hashing_1e4_per_second}</div><div className="label">slow hashing</div></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )

  
}

export default Metrics;