import Image from '../Santhosh/Resources/img-2.jpg';
import { Component } from 'react';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    routeData: any;
}

class Routings extends Component<IProps> {

    render( ) {
        return(
            <div>     
                <h3>{ this.props.routeData.id }</h3>
                <img className="ui fluid image" src={ Image } alt=""/>
            </div>
        );
    }
}  


export default retriveDataFromRoute( Routings );