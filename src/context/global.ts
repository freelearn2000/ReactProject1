import { createContext } from "react";


export const CounterContext = createContext(0);


export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const User = createContext({name:'Guest', userRole:'Guest'});

// Samara
export const ContextWeather = createContext('');

export const ContextRain = createContext( {place: 'Canada', weather: 'Rainy'} );

// Radhika
export const MyMusic = createContext('');

// Santhosh 
export const LoginContext = createContext({name:'',type:''});

export const  SportsContext = createContext('');

export const PetsWorldContext = createContext('1');

// Manooja
export const YogaContext = createContext({instructor:'', type:''});

export const ColorContext = createContext({color:'', type:''});

export const NewContext = createContext('User');

export const NewTheme = createContext('Dark theme');
