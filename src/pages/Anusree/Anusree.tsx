import { Component } from 'react';
import { Link, Outlet } from "react-router-dom";
import { retriveDataFromRoute } from '../../utils/hoc';
import BlogImage from '../Anusree/Images/blog-image.jpg';


interface IProps {
    title: any;
    routeData: any;
    location: any;
}

interface IState {
    loading: boolean;
    users: { } [ ] | null;
    error: { message: string } | null;
}

class Anusree extends Component<IProps, IState> {
    
    render( ) {
        
        return(
                <>  
                    <h2 className="ui center aligned block header">{ this.props.title }</h2>
                    
                    <div className="ui two item menu">
                        {/* <Link to='/' className="item"><i className="home icon"></i>Home</Link>
                        <Link to='/about/contact/hr@abc.com' className="item"><i className="file alternate outline icon"></i>About</Link> */}
                        <Link to='travelblog' className={ this.props.location.pathname.includes('travel')? 'active item': 'item'}>
                            <i className="car icon"></i>Travell Blog</Link>
                        <Link to='foodblog' className={ this.props.location.pathname.includes('food')? 'active item': 'item'}><i className="mug hot icon"></i>Food Blog</Link>
                    </div>
                    <div className="segment">
                    { (this.props.location.pathname.includes('food')||this.props.location.pathname.includes('travel'))||
                    <img className="ui fluid image" alt="Foodimage" src={ BlogImage }/> }
                        <Outlet/>
                    </div>   
                    { this.props.routeData.id && <h3 className='ui header blue'>Route Data: { this.props.routeData.id }</h3> }
                </>
        )
    }
}

export default retriveDataFromRoute( Anusree );
