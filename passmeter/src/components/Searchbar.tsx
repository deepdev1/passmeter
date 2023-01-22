import { render } from "@testing-library/react";
import { callApi, getInputDataStrength } from "../services/AppService";
import {DebounceInput} from 'react-debounce-input';
import "./App.scss";


const Searchbar = () => {
  function handleChange(event:any) {
    // console.log(event.target.value);
    callApi(event.target.value);
  }
  
  return (
    <div className="searchbar">
        <DebounceInput
          minLength={1}
          debounceTimeout={500}
          onChange={handleChange} />
    </div>
  )

}


export default Searchbar;