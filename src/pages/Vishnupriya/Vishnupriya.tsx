import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';
import { User } from "../../context/global";
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
                                <img src={ImLogo} alt={ImLogo} ></img>
                            </div>
                            <Link to='/vishnupriya/shoppingcart' className="ui teel button">Shopping Cart</Link>
                            <Link to='/vishnupriya/axiosp' className="ui teel button">Axios</Link>
                            <Link to='/vishnupriya/electronics' className="ui teel button">Routing</Link>
                            <Link to='/vishnupriya/contextz' className = "ui teel button">Context</Link>
                            <Link to='/vishnupriya/refz' className="ui teel button">Ref</Link>
                            </div>
                        <div className="four wide raw">
                            <User.Provider value={{name:"Vishnupriya", userRole:'Admin'}}>
                                <Outlet/>
                            </User.Provider>
                        </div>
                    </div>
            </div>
        )   
    }
}

export default retriveDataFromRoute( Vishnupriya );