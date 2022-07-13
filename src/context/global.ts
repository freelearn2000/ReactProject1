import { createContext } from "react";


export const counterContext = createContext(0);

export const userContext = createContext({name:'Guest', viewMode:'Guest'});

export const ContextWeather = createContext('');

// Radhika
export const MyMusic = createContext('');

// Santhosh 
export const LoginContext = createContext({name:'',type:''});