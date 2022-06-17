import { Component } from 'react';
import axios from '../../axios';
import { retriveDataFromRoute } from '../../utils/hoc';
import TravelImage from '../Anusree/Images/travell-blog.jpg';

interface IProps {
    title: any;
    routeData: any;
    location: any;
}

interface IState {
    loading: boolean;
    users: { } [ ] | null;
    error: { message: string } | null;
}

class TravellBlog extends Component<IProps, IState> {

    state={ loading: true, users: null, error: null };
    
    componentDidMount( ) {

        axios.get('/users')
            .then(response => {
                this.setState( {loading: false, users: response.data, error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, users: null, error: error} );
            })
    }

    renderLoading( ) {

        const loadingJSX =

            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading user data...</div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error ? this.state.error[ 'message' ] : '';
        const errorJSX = 

            <div className='ui negative message'>
                <h4>{ message }</h4>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {
        //console.log(this.props.routeData)
        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( (user: {name: string, email: string, id: number} ) => {
           return( 
                <div key={ user.id } className="ui segment">
                    <h4>{ user.name }</h4>
                    <p>{ user.email }</p>
                </div>
           )
        });
        return dataJSX;
    }
    
    render( ) {
        
        return(
                <>  
                    <h2 className="ui center aligned header">{ this.props.title }</h2>
                    <img className="ui fluid image" alt="TravelImage" src={ TravelImage }/>       
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.users ? this.renderUserdata( ):
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
                </>
        )
    }
}

export default retriveDataFromRoute( TravellBlog );
