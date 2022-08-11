import { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: string;
}
   

class Samara extends Component<IProps> {

    render( ) {
        return(
            <div>
                <h2 className="ui center aligned header message">{ this.props.title }</h2>
                <Link to='/' className="ui purple button">Home</Link>
                <Link to='/about/ContactNo/8456' className="ui purple button">About</Link>
                <div className="ui aligned grid">
                    <div className="four wide column">
                        <div className="ui secondary vertical menu">
                            <Link to='/samara/routing' className="active item"><b>Routing</b></Link>
                            <Link to='/samara/canadaweather' className="active item"><b>Axios - class</b></Link>
                            <Link to='/samara/polandweather' className="active item"><b>Axios - functional</b></Link>
                            <Link to='/samara/context' className="active item"><b>Context</b></Link>
                            <Link to='/samara/ref' className="active item"><b>Ref</b></Link>
                        </div>
                    </div>
                    <div className="twelve wide stretched column">
                        <div className="ui segment">
                            <Outlet/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default retriveDataFromRoute( Samara );