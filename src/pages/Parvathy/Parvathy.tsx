import { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


interface IProps {
    title: string;
}

interface IState {
    loading: boolean,
    books: { } [ ] | null,
    error: { message: string } | null;

}

export class Parvathy extends Component<IProps, IState> {

    state = { loading: true, books: null, error: null };

    // initialization
    componentDidMount() {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({ loading: false, books: response.data, error: null });
            })
            .catch(error => {
                this.setState({ loading: false, books: null, error: error });
            });
    }

    renderLoading() {

        const loadingJSX = <h4>Loading....</h4>
        return loadingJSX;
    }

    renderError() {

        const message = this.state.error ? this.state.error['message'] : '';
        const errorJSX =
            <div>
                <br />
                <h4>{message}</h4>
            </div>
        return errorJSX;
    }

    renderBooks() {

        const books = this.state.books ? this.state.books : [ ];
        const dataJSX = books.map( (item: any) => {
            let bno = item.id + `b`;
            return (
                <div key = { bno } className = "ui center aligned message">
                    <h4>{ item.name }</h4>
                    <p>Email : { item.email }</p>
                </div>
            );
        });
        return dataJSX;
    }

    render( ) {

        return (
            <div>
                <h2 className = "ui center aligned header message">{ this.props.title }</h2>
                <Link to='/' className="ui teal basic tag label">Goto HomePage</Link>
                &nbsp;&nbsp;
                {
                    this.state.loading ? this.renderLoading( ):
                    this.state.books ? <><Link to='/news/7' className="ui  basic olive tag label">News</Link>{ this.renderBooks( ) }</>:
                    this.renderError( )
                }
            </div>
        )
    }
}