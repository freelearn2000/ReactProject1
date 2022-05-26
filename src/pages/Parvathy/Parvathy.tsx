import { Component } from "react";
import axios from 'axios';


interface IProps {

}
interface IState {
    Loading: boolean,
    news: {}[] | null,
    error: { message: string } | null;

}
export class Parvathy extends Component<IProps, IState> {

    state = { name: `Parvathy`, Loading: true, news: null, error: null };

    // initialization
    componentDidMount() {

        // Intitiate API call from here
        axios.get('https://jsonplaceholder.typicode.com/postss')
            .then(response => {
                // console.log('Success data :', response.data);
                this.setState({ Loading: false, news: response.data, error: null });
            })
            .catch(error => {
                // console.log('Error :', error);
                this.setState({ Loading: false, news: null, error: error });
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
                <h2>This is {this.state.name}'s Component</h2>
                <h4>{message}</h4>
            </div>
        return errorJSX;
    }

    renderNews() {
        const newsJSX = <h4>List all data here....</h4>
        return newsJSX;
    }

    render() {
        if (this.state.Loading) {
            return this.renderLoading();
        } else if (this.state.error) {
            return this.renderError();
        } else {
            return this.renderNews();
        }
    }
} 