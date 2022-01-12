import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // url = base url + request url
  // timeout: 5000 // request timeout
});

// request interceptor do something before request is sent
service.interceptors.request.use(
  (config) => {
    var userData = JSON.parse(localStorage.getItem("userData"));
    config.headers = {
      "content-type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
    };
    if (userData && userData.token) {
      config.headers.Authorization = "Bearer " + userData.token;
      }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    if (response.data.hasOwnProperty("isSuccess") && !response.data.isSuccess) {
      if(response.data.status === 401){
        localStorage.clear();
        alert('Ýour session is expired.Please login again');
        window.location.href = "/";
      } 
      return Promise.reject(response.data);
    } else {
      return response.data;
    }
    
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
