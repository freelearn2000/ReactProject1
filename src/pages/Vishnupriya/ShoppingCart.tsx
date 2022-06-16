import { Component } from "react";
import { Link, Outlet } from 'react-router-dom';
import axios from '../../axios';


interface IProps {
    title: string;
}

interface IState {
    loading: boolean;
    content: { } [ ] | null;
    error: { message: string } | null;
}

export class ShoppingCart extends Component<IProps, IState> {

    state = { loading: true, content: null, error: null };

    componentDidMount( ) {

        axios.get('/comments')
            .then(response => {
                this.setState( {loading: false, content: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, content: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX = 
            <div>
                <h2>{ this.props.title }</h2>
                <div className="ui segment">
                    <p>Loading...</p>
                    <div className="ui active dimmer">
                        <div className="ui loader">Please wait...</div>
                    </div>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error ? this.state.error[ `message` ] : '';
        const errorJsx =
            <div>
                <div className="ui negative message">
                <i className="close icon"></i>
                    { message }
                </div>
            </div>
        return errorJsx;
    }

    renderCartData( ) {

        const datas = this.state.content ? this.state.content : [ ];
        const CartJsx = datas.map( ( item: {id: number, name: string, body: string} ) => {
            return (
                // <div key={ item.id } className="ui two segment">
                //     <h5>Name: { item.name }</h5>
                //     <p>Body: { item.body }</p>
                // </div>
                    
                <>
                    <h2 className="ui horizontal divider header">{this.props.title}</h2> 
                    <div className="ui interenally celled grid">
                        <div className="row">
                            <div className="three wide  column">
                                <div className="ui vertical fluid menu">
                                    <Link to='/vishnupriya/shoppingcart/electronics' className="item"> Electronis </Link>
                                    <Link to='/vishnupriya/shoppingcart/fashion' className="item"> Fashion </Link>
                                </div>
                            </div>
                            <div className="twelve wide  column"> 	
                                <Outlet/>		
                            </div>
                        </div>
                    </div>         
                </>
            )
        });
        return CartJsx;
    }

    render( ) {

        return (
            <div>
                <h4 className="ui center aligned header">{ this.props.title }</h4>
                
                {
                    this.state.loading ? this.renderLoading( ) :
                    this.state.content ? this.renderCartData( ) :
                    this.renderError( )    
                }
            </div>
        )   
    }
}