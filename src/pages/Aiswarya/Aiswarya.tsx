import { Component } from "react";
import axios from '../../axios';
import { Link } from "react-router-dom";
import { retriveDataFromRoute } from "../../utils/hoc";


interface IProps {
    title: any;
    routeData: any;
}

interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null;
} 

 class Aiswarya extends Component <IProps, IState> {

    state = { loading: true, users: null, error: null };

    componentDidMount ( ) {

        axios.get('/users')
            .then(response => {
                this.setState( { loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( { loading: false, users: null, error: error} );
            })  
        }

    renderLoading( ) {

        const loadingJSX = 
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading User Data..!!</div>
            </div>  
        return loadingJSX;
    }

    rendererror( ) {

        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <h4>{ message }</h4>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {
        
        const users = this.state.users ? this.state.users : [ ];
        const DataJSX = users.map( (user: {name: number, email: string, id: number, phone: number} ) => {
            return(
                <div className="ui segment" key={ user.id } >
                    <h4 ><b>Name :</b>{ user.name }</h4>
                    <p><b>Email :</b>{ user.email }</p>
                    <p><b>Contact No :</b>{ user.phone }</p>
                    </div>
            )
        });
    return DataJSX;
    }

    render( ) {

        return (  
            <div>
                <h2 className = "ui center aligned header">{ this.props.title }</h2>
                    <br/>
                    <h4 className="ui header blue">Route Data: { this.props.routeData.id }</h4>
                    <button className="ui purple basic button"><Link to='/' className="item">Home</Link></button>
                    <button className="ui purple basic button"><Link to='/news/latestnews' className="item">News</Link></button>
                    <br/>
                {
                    this.state.loading ? this.renderLoading( ):
                    this.state.users ? this.renderUserdata( ):
                    <><h2> Error Data !!!!</h2>{this.rendererror( )}</>
                }
            </div>
        )
    }
}

export default retriveDataFromRoute( Aiswarya );