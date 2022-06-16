import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

export class Posts extends Component<IProps> {

    state={ loading: true, foods: null, error: null };
    
    componentDidMount( ) {

        axios.get('/posts')
            .then(response => {
                this.setState( {loading: false, foods: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, foods: null, error: error} );
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

        const foods = this.state.foods ? this.state.foods : [ ];
        const dataJSX = foods.map( (food: any ) => {
           return( 
            <div key={ food.id } className="ui segment">
                <h4>{ food.title }</h4>
                <p>{ food.body }</p>
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
                        this.state.foods ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}