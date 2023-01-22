import axios from "axios";
import { Subject } from "rxjs";
import { AppConfig } from "../assets/config";
import { ApiRequest, ApiResponse } from "../models/model";


const subject:Subject<ApiResponse> = new Subject<ApiResponse>();

export const getInputDataStrength = () => {
  return subject;
}


export  const callApi = async (data: string): Promise<ApiResponse> => {
  const apiRequest:ApiRequest = { password: data }
  return await axios({
    baseURL: AppConfig.api.baseUrl,
    url: AppConfig.api.baseUrl + AppConfig.api.evaluate,
    method: "post",
    data: apiRequest
  })
  .then ( (response) => {
    const _res:ApiResponse =  {
      status: response.status,
      data: response.data
    }
    subject.next(_res);
    return _res;
  }).catch((error) => {
      // console.log(error)
      const res:ApiResponse = {
          status: error.status,
          data: error.response
      }
      return res;
  })
}


