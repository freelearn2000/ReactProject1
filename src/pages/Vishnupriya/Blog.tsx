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

export class Blog extends Component<IProps, IState> {

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

    renderBlogData( ) {

        const datas = this.state.content ? this.state.content : [ ];
        const blogJsx = datas.map( ( item: {id: number, name: string, body: string} ) => {
            return (
                <div key={ item.id } className="ui two segment">
                    <h5>Name: { item.name }</h5>
                    <p>Body: { item.body }</p>
                </div>
            )
        });
        return blogJsx;
    }

    render( ) {

        return (
            <div>
                <h4 className="ui center aligned header">{ this.props.title }</h4>
                
                {
                    this.state.loading ? this.renderLoading( ) :
                    this.state.content ? this.renderBlogData( ) :
                    this.renderError( )    
                }
            </div>
        )   
    }
}