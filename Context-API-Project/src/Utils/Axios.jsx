import axios from "axios";

// This is called "OutSourcing the API calling"

const instance = axios.create({
    baseURL:"https://fakestoreapi.com/",
    //withCredentials: true // use when need cookies
})

export default instance 

// this credential use when we want to change / Add anything when request going and coming, called Interceptors

// Add a request interceptor [Run this when data send and can add something else]
instance.interceptors.request.use(
  function (config) {
    console.log("request ----> ", config)
    // Do something before the request is sent
    return config;
  },
  function (error) {
    // Do something with the request error
    return Promise.reject(error);
  }
);

//[Run this when data come]
// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    console.log("response ----> ", response)
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that fall outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);