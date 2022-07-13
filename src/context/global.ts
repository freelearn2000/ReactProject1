import { createContext } from "react";


export const CounterContext = createContext(0);
export const User = createContext({name:'Guest', userRole:'Guest'})
export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const ContextWeather = createContext('');

export const MyMusic = createContext('');

export const PetsWorldContext = createContext('1');
