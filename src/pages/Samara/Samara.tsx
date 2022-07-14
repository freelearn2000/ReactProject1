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
                            <Link to='/samara/canadaweather' className="active item">Canada</Link>
                            <Link to='/samara/polandweather' className="active item">Poland</Link>
                            <Link to='/samara/context' className="active item">Context</Link>
                            <Link to='/samara/createref' className="active item">createRef</Link>
                            <Link to='/samara/useref' className="active item">useRef</Link>
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