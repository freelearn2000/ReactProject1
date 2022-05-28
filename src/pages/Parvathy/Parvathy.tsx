import { Component } from "react";
import axios from 'axios';

interface IProps {
    title: string;
}
interface IState {
    Loading: boolean,
    books: {}[] | null,
    error: { message: string } | null;

}
export class Parvathy extends Component<IProps, IState> {

    state = { Loading: true, books: null, error: null };

    // initialization
    componentDidMount() {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log('Success data :', response.data);
                this.setState({ Loading: false, books: response.data, error: null });
            })
            .catch(error => {
                console.log('Error :', error);
                this.setState({ Loading: false, books: null, error: error });
            })
    }

    renderLoading() {
        const loadingJSX = <h4>Loading....</h4>
        return loadingJSX;
    }

    renderError() {
        const message = this.state.error ? this.state.error['message'] : '';
        const errorJSX =
            <div>
                <br/>
                <h4>{message}</h4>
            </div>
        return errorJSX;
    }

    renderBooks() {

        const books = this.state.books ? this.state.books : [];
        const dataJSX = books.map((item: any) => {
            let hNo = item.id;
            let pNo = item.id + `a`;

            return (
                <>
                    <h4 key={hNo}>{item.name}</h4>
                    <p key={pNo}>Email : {item.email}</p>
                </>
            );
        });

        return dataJSX;
    }

    render() {
        return (
            <div className="ui small message">
                <h2 className="ui center aligned header message">{this.props.title}</h2>
                {
                    this.state.Loading ? this.renderLoading() :
                        this.state.books ? <><h2>User Details</h2>{this.renderBooks()}</> :
                            <>{this.renderError()}</>
                }
            </div>
        )
    }
}

