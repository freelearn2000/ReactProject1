import { Component } from 'react';
import { retriveDataFromRoute } from '../../utils/hoc';
import { Link, Outlet } from 'react-router-dom';


interface IProps {
    routeData: any;
}

class Routing extends Component<IProps> {

    render( ) {
        return(
            <div>  
                <div>     
                    <Link to='/samara/routing/class' className="ui blue button">Canada Weather</Link>
                    <Link to='/samara/routing/functional' className="ui blue button">Poland Weather</Link>
                </div>
                <br/>
                <div >
                    <Outlet/> 
                </div>
            </div>      
        );
    }
}  


export default retriveDataFromRoute( Routing );
