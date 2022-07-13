import { createContext } from "react";
import { start } from "repl";


export const CounterContext = createContext(0);

export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const User = createContext({name:'Guest', userRole:'Guest'});

export const ContextWeather = createContext('');

// Radhika
export const MyMusic = createContext('');

// Santhosh 
export const LoginContext = createContext({name:'',type:''});

export const  SportsContext = createContext('');

export const PetsWorldContext = createContext('1');

export const YogaContext = createContext({instructor:'', type:''});
