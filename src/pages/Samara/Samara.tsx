import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: string;
}
   

class Samara extends Component<IProps> {

    render( ) {
        
        return(
            <>
                <div>  
                    <h2 className="ui center aligned header message">{ this.props.title }</h2>
                    <Link to='/' className="ui purple button">Home</Link>
                    <Link to='/about/ContactNo/8456' className="ui purple button">About</Link>
                    &emsp;&emsp;&emsp;&emsp;
                    <Link to='/samara/canadaweather' className="ui teal button">Canada</Link>
                    <Link to='/samara/polandweather' className="ui teal button">Poland</Link>
                    &emsp;&emsp;&emsp;&emsp;
                    <Link to='/samara/context' className="ui purple button">Context</Link>

                </div>  
                    <br/>  
                    <Outlet/>
            </>        
        );
    }
}


export default retriveDataFromRoute( Samara );