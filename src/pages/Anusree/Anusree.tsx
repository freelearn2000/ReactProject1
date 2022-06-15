import { Component } from 'react';
import { Link, Outlet } from "react-router-dom";
import axios from '../../axios';
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: any;
    routeData: any;
}

interface IState {
    loading: boolean;
    users: { } [ ] | null;
    error: { message: string } | null;
}

class Anusree extends Component<IProps, IState> {

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
                    <Link to='/' className="ui blue label"><i className="home icon"></i>Home</Link>
                    <Link to='/about/contact/hr@abc.com' className="ui violet label"><i className="file alternate outline icon"></i>About</Link>
                    <Link to='/anusree/travellblog' className="ui purple label"><i className="car icon"></i>Travell Blog</Link>
                    <Link to='/anusree/foodblog' className="ui pink label"><i className="mug hot icon"></i>Food Blog</Link>
                    {
                        this.props.routeData.id ?
                            <>
                                <h2 className="ui center aligned header">{ this.props.title }</h2>
                                <h3 className='ui header blue'>Route Data: { this.props.routeData.id }</h3>
                                    {
                                        this.state.loading ? this.renderLoading( ):
                                        this.state.users ? <><h2>Employee Details</h2>{ this.renderUserdata( ) }</>:
                                        <><h2>Error Data</h2>{ this.renderError( )}</>
                                    }
                            </>:
                            <Outlet/>
                    }    
                </>
        )
    }
}

export default retriveDataFromRoute( Anusree );
