import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';
import  ImLogo  from '../Vishnupriya/images/logo.png';


interface IProps {
    title: string;   
}

class Vishnupriya extends Component<IProps> {

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned gray header message">{ this.props.title }</h2>
                    <div className="column">
                            <div className="ui stackable container menu">
                                <div className="item">
                                    <img src={ImLogo}></img>
                                </div>
                                <Link to='/vishnupriya/shoppingcart' className="ui blue button">Shopping Cart</Link>
                                <Link to='/vishnupriya/home' className="ui teal button">Home</Link>
                                <Link to='/vishnupriya/electronics' className="ui green button">Electronics</Link>
                            </div>
                        <div className="four wide raw">
                            <Outlet/>
                        </div>
                    </div>
            </div>
        )   
    }
}

export default retriveDataFromRoute( Vishnupriya );