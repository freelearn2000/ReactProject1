import { Component } from "react";
import axios from '../../axios';


interface IProps {
    title: string;
}

interface IState {
    loading: boolean;
    content: { } [ ] | null;
    error: { message: string } | null;
}

export class Nepal extends Component<IProps, IState> {

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

    renderData( ) {

        const datas = this.state.content ? this.state.content : [ ];
        const userJsx = datas.map( ( item: {id: number, name: string, email: string} ) => {
            return (
                <div key={ item.id } className="ui two segment">
                    <h5>Name: { item.name }</h5>
                    <p>Email: { item.email }</p>
                </div>
            )
        });
        return userJsx;
    }

    render( ) {

        return (
            <div>
                {
                    this.state.loading ? this.renderLoading( ) :
                    this.state.content ? this.renderData( ) :
                    this.renderError( )    
                }
            </div>
        )   
    }
}