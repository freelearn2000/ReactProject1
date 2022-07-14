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
                            <Link to='' className="item">Home</Link>
                            <Link to='users' className="item">Users</Link>
                            <Link to='posts' className="item">Posts</Link> 
                            <Link to='login' className="item">Context</Link>                            
                            <Link to='cref' className="item">CreateRef</Link> 
                            <Link to='uref' className="item">UseRef</Link> 
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