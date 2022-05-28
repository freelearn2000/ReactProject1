import { Component } from "react";
import axios from 'axios';


interface IProps {
    title: string;
}
interface IState {
    loading: boolean;
    blogs: {} [] | null;
    error: {message: string} | null;
}

export class Vishnupriya extends Component<IProps, IState> {

    state = {loading: true, blogs: null, error: null};

    componentDidMount( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // console.log(`Success data:`, response.data);
                this.setState( {loading: false, blogs: response.data, error: null} );
            })
            .catch(error => {
                // console.log(`Error:`, error);
                this.setState( {loading: false, blogs: null, error: error} );
            })
    }

    componentDidUpdate( ) {
        // console.log('componentDidUpdate')
     }
 
     componentWillUnmount( ) {
        // console.log('componentWillUnmount')
     }

    renderLoading( ) {
        const loadingJSX = 
            <div>
                <h2>{this.props.title}</h2>
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
        const message = this.state.error ? this.state.error[`message`] : '';
        const errorJSX =
            <div>
                <div className="ui negative message">
                <i className="close icon"></i>
                {message}
                </div>
            </div>
        return errorJSX;
    }

    renderBlogData( ) {
        const blogs = this.state.blogs ? this.state.blogs : [];
        const blogJSX = blogs.map( (items: {id: number, name: string, email: string}, index) => {
            return (
                <div key= {index + items.id} className ='ui two segment'>
                    <h5 key={items.id}>Name: {items.name}</h5>
                    <p key={'#' + items.id}>Email: {items.email}</p>
                </div>
            )
        });
        return blogJSX;
    }

    render( ) {
        return (
            <div>
                <h2 className="ui center aligned blue header">{this.props.title}</h2>
                {
                    this.state.loading ? this.renderLoading( ) :
                    this.state.blogs ? this.renderBlogData( ) :
                    this.renderError( )    
                }
            </div>
        )   
    }
}