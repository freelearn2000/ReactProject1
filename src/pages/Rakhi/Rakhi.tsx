import { Component } from 'react';
import axios from '../../axios';
import { Link, Outlet } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: string;
    routeData: any;
    location: any;
}

interface IState {
    loading: boolean;
    users: {}[] | null;
    error: {message: string} | null;
}

class Rakhi extends Component<IProps, IState> {

    state = {loading: true, users: null, error: null};
    
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
            <div className = "ui icon message">
                <i className = "notched circle loading icon"></i>
                <div className = "content">
                    <div className = "header">
                        Just one second
                    </div>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
        return loadingJSX;
    }

    renderError( ) {

        const errorMessage = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <div className = "ui negative message">
                    <p>{ errorMessage }</p>
                </div>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {

        const users = this.state.users ? this.state.users : [ ];
        const dataJSX = users.map( ( user: { id: number, name: string, email: string}, index ) => {
            return(
                <div key={user.id + index} className = 'ui segment'>
                    <h4>Name: {user.name}</h4>
                    <p>Email: {user.email}</p>
                </div>
            );
        });
        return dataJSX;
    }

    render( ) {

        return(
            <div className= "ui basic segments">
                <h1 className = "ui white ui  inverted header header center aligned segment">{ this.props.title }</h1><br/>
                <Link to='/' className = "ui label black left aligned">Home</Link>
                <Link to='/news/trending' className = "ui label black">News</Link>
                {
                    this.props.routeData.id&&
                    <h4 className='ui header blue'>Route Data: {this.props.routeData.id}</h4>
                }
                <div className= "ui segments grid">
                    <div className= "ui segment six wide column ">
                        <div className="ui inverted vertical pointing menu">
                            <Link className={ this.props.location.pathname.includes('science')? 'active item': 'item'} to='/rakhi/science'>Science<i className="atom icon"></i></Link>
                            <Link className={ this.props.location.pathname.includes('technology')? 'active item': 'item'} to='/rakhi/technology'>Technology<i className="keyboard outline icon"></i></Link>
                        </div>
                    </div>
                    <div className= "ten wide column">
                    {
                        this.props.routeData.id?
                            <>
                                {
                                    this.state.loading ? this.renderLoading( ) :
                                    this.state.users ? <><h2 className= "ui center aligned header red">User Information </h2>{ this.renderUserdata( ) }</> :
                                    this.renderError( )
                                }
                            </>
                        :   
                        <Outlet/>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default retriveDataFromRoute( Rakhi );


