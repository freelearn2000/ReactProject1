import { Component } from "react";
import axios from 'axios';


interface Iprops {

}
interface Istate {
    loading: boolean;
    blog: {} [] | null;
    error: {message: string} | null;
}

export class Vishnupriya extends Component<Iprops, Istate> {

    state = {title: `This is Vishnupriya's Component`, loading: true, blog: null, error: null};

    componentDidMount( ) {
        // console.log('componentDidMount');

        // initiate api call from here
        axios.get('https://jsonplaceholder.typicode.com/userss')
            .then(response => {
                console.log(`Success data:`, response.data);
                this.setState( {loading: false, blog: response.data, error: null} );
            })
            .catch(error => {
                console.log(`Error:`, error);
                this.setState( {loading: false, blog: null, error: error} );
            })
    }

    componentDidUpdate( ) {
        console.log('componentDidUpdate')
     }
 
     componentWillUnmount( ) {
        console.log('componentWillUnmount')
     }

    renderLoading( ) {
        const loadingJSX = 
            <div>
                <h1>{this.state.title}</h1>
                <h4>Loading....</h4>
            </div>
        return loadingJSX;
    }

    renderError( ) {
        const message = this.state.error?this.state.error[`message`] : '';
        const errorJSX =
            <div>
                <h1>{this.state.title}</h1>
                <h4>{ message }</h4>
            </div> 
        return errorJSX;
    }

    renderBlog( ) {
        const blogJSX = 
            <div>
                <h1>{this.state.title}</h1>
                <h4>List all blogs here...</h4>
            </div>
        return blogJSX;
    }

    render( ) {
        // console.log('render');
        if (this.state.loading) {
            return this.renderLoading( );
        } else if (this.state.error) {
            return this.renderError( );
        }
    }
}