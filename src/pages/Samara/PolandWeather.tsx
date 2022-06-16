import { Component } from 'react';
import axios from '../../axios';


interface IProps {
    title: string;
}

interface IState {
    loading: boolean;
    data: { } [ ] | null;
    error: { message: string } | null;
}

export class PolandWeather extends Component<IProps, IState> {

    state = { loading: true, data: null, error: null };

    componentDidMount( ) {

        axios.get('/albums')
        .then(response => {
            this.setState( {loading: false, data: response.data, error: null} );
        })
        .catch(error => {
            this.setState( {loading: false, data: null, error: error} );
        })
    }

    renderLoading( ) {

        const loadingJSX = 
            <div className = "ui segment">
                <div className = "ui active inverted dimmer">
                    <div className = "ui text loader">Loading</div>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
            <div>
                <h3 className = "ui red message">{ message }</h3>
            </div>
        return errorJSX;
    }

    renderData( ) {

        const data = this.state.data ? this.state.data : [ ];
        const dataJSX = data.map( (item: any ) => {
            return (
                <div key = { item.id } className="ui floating message">
                    <h4>ID : { item.id }</h4>
                    <p>Title : { item.title }</p>
                </div>
            );
        });
        return dataJSX
    }
    
    render( ) {
        
        return(
            <div>
                <br/>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.data ? <>{ this.renderData( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </div>
        );
    }
}