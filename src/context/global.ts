import { createContext } from "react";

// Rakhi
export const CounterContext = createContext(0);

// Rakhi
export const UserContext = createContext({name:'Guest', viewMode:'Guest'});

export const User = createContext({name:'Guest', userRole:'Guest'});

// Samara
export const ContextWeather = createContext('');

export const ContextRain = createContext( {place: 'Canada', weather: 'Rainy'} );

// Radhika
export const MyMusic = createContext('');

// Santhosh 
export const LoginContext = createContext({name:'',type:''});

// Bindu
export const  SportsContext = createContext('');

// Parvathy
export const PetsWorldContext = createContext('1');

// Dhanya
export const ContextTravel = createContext('Ruveneimi');
// Manooja
export const YogaContext = createContext({instructor:'', type:''});

export const ColorContext = createContext({color:'', type:''});

export const NewContext = createContext('User');

export const NewTheme = createContext('Dark theme');
