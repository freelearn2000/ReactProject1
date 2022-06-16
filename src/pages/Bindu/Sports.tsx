import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

export class Sports extends Component<IProps> {

    state={ loading: true, sports: null, error: null };
    
    componentDidMount( ) {

        axios.get('/todos')
            .then(response => {
                this.setState( {loading: false, sports: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, sports: null, error: error} );
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

        const message = this.state.error ? this.state.error[ 'message' ] : '';
        const errorJSX = 
        <div className='ui negative message'>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const sports = this.state.sports ? this.state.sports : [ ];
        const dataJSX = sports.map( (sports: any ) => {
           return( 
            <div key={ sports.id } className="ui segment">
                <h4>{ sports.title }</h4>
            </div>
           )
        });
        return dataJSX;
    }

    render( ) {

        return(
            <>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.sports ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}