import { Component } from "react";
import axios from '../../axios';
//import { retriveDataFromRoute } from '../../utils/hoc';

interface IProps {
    title: any;
}

export class Products extends Component<IProps> {

    state={ loading: true, product: null, error: null };
    
    componentDidMount( ) {

        axios.get('/users')
            .then(response => {
                this.setState( {loading: false, product: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, product: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX =
        <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading user data...</div>
        </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
        <div className='ui negative message'>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const product = this.state.product ? this.state.product : [ ];
        const dataJSX = product.map( (product: any ) => {
           return( 
            <div key={ product.id } className="ui segment">
                <h4>{ product.title }</h4>
                <p>{ product.body }</p>
            </div>
           )
        });
        return dataJSX;
    }

    render( ) {

        return(
            <>
                <h1 className="ui center aligned blue message">{ this.props.title }</h1>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.product ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}

//export default retriveDataFromRoute(Products);