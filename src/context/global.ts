import { createContext } from "react";


export const counterContext = createContext(0);

export const userContext = createContext({name:'Guest', viewMode:'Guest'});

export const ContextWeather = createContext('');

export const MyMusic = createContext('');

export const PetsWorldContext = createContext('1');