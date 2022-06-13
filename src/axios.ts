import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';


const instance = axios.create( {
    baseURL: 'https://jsonplaceholder.typicode.com/'
} );

//Request interceptor
instance.interceptors.request.use( (request: AxiosRequestConfig) => {

    console.log('Request interceptor', request);

    return request;

}, (error) => {

    console.log('Request interceptor error', error)
} );

//Response interceptor
instance.interceptors.response.use( (response : AxiosResponse) => {

    console.log('Response interceptor', response);

    return response;

}, (error) => {

    console.log('Response interceptor error', error)
} );


export default instance;