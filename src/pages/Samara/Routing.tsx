import WeatherImage from '../Samara/weather.jpg';
import { Component } from 'react';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    routeData: any;
}

class Routing extends Component<IProps> {

    render( ) {
        return(
            <div>     
                <h3>RouteData: { this.props.routeData.id }</h3>
                <img className="ui fluid image" src={ WeatherImage } alt=""/>
            </div>
        );
    }
}  


export default retriveDataFromRoute( Routing );
