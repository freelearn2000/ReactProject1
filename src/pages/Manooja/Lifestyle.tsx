import { Component } from "react";
import axios from '../../axios';


interface IProps {
    title: any;
}

export class Lifestyle extends Component<IProps> {

    state={ loading: true, lifedata: null, error: null };
    
    componentDidMount( ) {

        axios.get('/lifedata')
            .then(response => {
                this.setState( {loading: false, lifedata: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, lifedata: null, error: error} );
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

        const datas = this.state.lifedata ? this.state.lifedata : [ ];
        const dataJSX = datas.map( (life: any ) => {
           return( 
            <div key={ life.id } className="ui segment">
                <h4>{ life.title }</h4>
                <p>{ life.body }</p>
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
                        this.state.lifedata ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}
