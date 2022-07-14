import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';


interface IProps {
    title: string;   
}

class Santhosh extends Component<IProps> {

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned blue header message">{ this.props.title }</h2>         
                <div className="ui grid" style={{ backgroundColor: 'lightblue'}}>
                    <div className="four wide column">
                        <div className="ui secondary vertical menu">
                            <Link to='/santhosh' className="item">Home</Link>
                            <Link to='/santhosh/users' className="item">Users</Link>
                            <Link to='/santhosh/posts' className="item">Posts</Link> 
                            <Link to='/santhosh/Login' className="item">Context</Link> 
                            <Link to='/santhosh/Ref' className="item">Ref</Link> 
                            <Link to='/' className="item">SignOut</Link> 
                        </div>
                    </div>
                <div className="twelve wide stretched column">
                    <div className="ui segment">                     
                        <Outlet/>                  
                    </div>
                </div>
                </div> 
            </div>     
        )   
    }
}

export default Santhosh;