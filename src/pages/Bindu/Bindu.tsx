import { Component } from 'react';
import { Link, Outlet } from "react-router-dom";


interface IProps {
    title: string;
}

export class Bindu extends Component<IProps> {

    render( ) {
        return (
            <div className="ui internally celled grid">
                <div className="row">
                    <div className="sixteen wide column">
                        <h2 className="ui center aligned brown header message">{this.props.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="three wide column">
                        <div className="ui vertical text menu">

                            <Link to='/bindu/bhome' className="ui pink basic tag label">Home</Link>
                            <br/>
                            <br/>
                            <Link to='/bindu/health' className="ui pink basic tag label">Health</Link>
                            <br/>
                            <br/>
                            <Link to='/bindu/sports' className="ui pink basic tag label">Sports</Link>
                        </div>
                    </div>
                    <div className="thirteen wide column">
                        <Outlet/>
                    </div>
                </div>
            </div>
        );
    }
}
