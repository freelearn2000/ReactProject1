import { Component } from 'react';
import axios from 'axios';
import 	{ Link } from 'react-router-dom';


interface IProps {
    title: any;
}
interface IState {
    loading: boolean;
    data: {}[] | null;
    error: {message: string} | null
}

export class Dhanya extends Component<IProps, IState> {

    state = {loading: true, data: null, error: null};

    componentDidMount( ) {

        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => this.setState({loading: false, data: response.data, error: null}))
            .catch(error => this.setState({loading: false, data: null, error: error}));
    }

    renderLoading( ) {
        const loadingJSX = <h4>Loading...</h4>
        return loadingJSX;
    }

    renderData( ) {
        const data = this.state.data? this.state.data : [];

        const dataJSX = data.map( (item: any) => {
            return (
                <div className="card">
                    <div className="content">
                        {/* <img className="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
                        <div className="header">
                           {item.name}
                        </div>
                        <div className="meta">
                           Email : {item.email}
                        </div>
                        <div className="description">
                           City : {item.address.city}
                        </div>
                    </div>
                </div>
            );
        });
        const data1JSX = (
            <div className="ui cards">
                {dataJSX}
            </div>
        );
        return data1JSX;
    }

    renderError( ) {
        const message = this.state.error ? this.state.error[`message`] : '';
        const errorJSX = (
            <div className="ui warning message">
                {/* <i className="close icon"></i> */}
                <div className="header">
                   {message}
                </div>
            </div>
        );
        return errorJSX;
    }

    render( ) {
      return (
        <div>
            <h2 className="ui horizontal divider header">{this.props.title}</h2> 
            <br/>
            <Link to='/' className="active item">Home</Link>
            <br/>
            {	this.state.loading ? this.renderLoading( ) :
                this.state.data ? this.renderData( ) :
                this.renderError( ) 
            } 	
        </div>
      );
    }
}