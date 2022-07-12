import { createContext } from "react";


export const counterContext = createContext(0);

export const userContext = createContext({name:'Guest', viewMode:'Guest'});
