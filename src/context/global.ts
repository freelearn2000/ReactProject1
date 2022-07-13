import { createContext } from "react";


export const CounterContext = createContext(0);

export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const ContextWeather = createContext('');

export const MyMusic = createContext('');

export const  SportsContext = createContext('');
