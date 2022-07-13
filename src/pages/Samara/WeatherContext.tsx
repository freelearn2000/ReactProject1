import { Component } from 'react';
import { useContext } from 'react';
import { ContextWeather, ContextRain } from '../../context/global';


// Provider
export class WeatherContext extends Component {

    render( ) {
        return(
            <>
                < ContextWeather.Provider value={'Rainy'}>
                    <Middle/>
                </ ContextWeather.Provider>
                <Child/>
            </>
        );
    }
}

export class Middle extends Component {

    render( ) {
        return(
            <>
                <Child2/>
            </>
        );
    }
}

// a. Consumer
export class Child extends Component {

    render( ) {
        return(
            <>
                <ContextRain.Consumer>
                {
                    value => (
                        <h3> Context value accessed from Child : { value.place }'s weather is { value.weather }</h3>
                    )
                }
                </ContextRain.Consumer>
                
            </>
        );
    }
}
// b. Consumer
export class Child1 extends Component {

    static contextType = ContextRain;

    render( ) {
        return(
            <>Context value accessed from Child1 : { this.context }</>
        );
    }
}

//c. Consumer
export const Child2 = ( props: any ) => {

    const context = useContext(ContextWeather);

    return(
        <h3>Context value accessed from Child2 : { context }</h3>
    );
} 


