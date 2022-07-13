import { createContext } from "react";
import { start } from "repl";


export const CounterContext = createContext(0);

export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const ContextWeather = createContext('');

export const MyMusic = createContext('');

export const  SportsContext = createContext('');

export const PetsWorldContext = createContext('1');