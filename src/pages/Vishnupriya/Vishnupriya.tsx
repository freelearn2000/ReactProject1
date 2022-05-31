import { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


interface IProps {
    title: string;
}

interface IState {
    loading: boolean;
    blogs: { } [ ] | null;
    error: { message: string } | null;
}

export class Vishnupriya extends Component<IProps, IState> {

    state = { loading: true, blogs: null, error: null };

    componentDidMount( ) {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState( {loading: false, blogs: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, blogs: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX = 
            <div>
                <h2>{ this.props.title }</h2>
                <div className = "ui segment">
                    <p>Loading...</p>
                    <div className = "ui active dimmer">
                        <div className = "ui loader">Please wait...</div>
                    </div>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error ? this.state.error[ `message` ] : '';
        const errorJSX =
            <div>
                <div className = "ui negative message">
                <i className = "close icon"></i>
                    { message }
                </div>
            </div>
        return errorJSX;
    }

    renderBlogData( ) {

        const blogs = this.state.blogs ? this.state.blogs : [ ];
        const blogJSX = blogs.map( (items: {id: number, name: string, email: string}) => {
            return (
                <div key= { items.id } className = 'ui two segment'>
                    <h5>Name: { items.name }</h5>
                    <p>Email: { items.email }</p>
                </div>
            )
        });
        return blogJSX;
    }

    render( ) {

        return (
            <div>
                <h2 className = "ui center aligned blue header">{this.props.title}</h2>
                <br/>
                <button className = "ui button"><Link to='/' className="item">Home</Link></button>
                <button className = "ui button"><Link to='/about' className="item">About</Link></button>
                <br/>
                {
                    this.state.loading ? this.renderLoading( ) :
                    this.state.blogs ? this.renderBlogData( ) :
                    this.renderError( )    
                }
            </div>
        )   
    }
}