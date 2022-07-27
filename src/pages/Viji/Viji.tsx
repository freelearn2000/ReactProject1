import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: string;   
}

class Viji extends Component<IProps> {

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned gray header message">{ this.props.title }</h2>
                <div className="ui internally celled grid">
                    <div className="column">
                        <div className="three wide raw">
                            <Link to='/Viji/gis' className="ui teal label">Map</Link>
                            <Link to='/viji/nepal' className="ui teal label">Axios - Class</Link>
                            <Link to='/viji/bangladesh' className="ui teal label">Axios - Functional</Link>  
                            <Link to='/viji/contextcolor' className="ui teal label">Context</Link> 
                            <Link to='/viji/MyRefExample' className="ui teal label">Ref</Link>  
                        </div>
                        <div className="three wide raw">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        )   
    }
}

export default retriveDataFromRoute( Viji );
//export default Viji;