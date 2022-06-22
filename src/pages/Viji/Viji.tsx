import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';

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
                            <Link to='/viji/nepal' className="ui teal label">Nepal</Link>
                            <Link to='/viji/bangladesh' className="ui teal label">Bangladesh</Link>         
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

export default Viji;