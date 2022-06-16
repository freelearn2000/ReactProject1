import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';


interface IProps {
    title: string;   
}

class Vishnupriya extends Component<IProps> {

    render( ) {

        return (
            <div>
                <h2 className="ui center aligned gray header message">{ this.props.title }</h2>
                <div className="ui internally celled grid">
                    <div className="column">
                        <div className="three wide raw">
                            <Link to='/vishnupriya/products' className="ui teal label"><i className="fa-brands fa-product-hunt icon"></i>Products</Link>
                            <Link to='/vishnupriya/blog' className="ui blue label"><i className="blog icon"></i>Blog</Link>         
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

export default Vishnupriya;