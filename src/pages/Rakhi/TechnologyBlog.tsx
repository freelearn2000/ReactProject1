import { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from '../../axios';
import { userContext } from "../../context/global";
import { retriveDataFromRoute } from '../../utils/hoc';


interface IProps {
    title: any;
    location: any;
}

class TechnologyBlog extends Component<IProps> {

    state={ loading: true, technology: null, error: null };
    
    componentDidMount( ) {

        axios.get('/comments')
            .then(response => {
                this.setState( {loading: false, technology: (response.data).splice(0, 10), error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, technology: null, error: error} );
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

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX = 
        <div className='ui negative message'>
            <h4>{ message }</h4>
        </div>
        return errorJSX;
    }

    renderData( ) {

        const technology = this.state.technology ? this.state.technology : [ ];
        const dataJSX = technology.map( (data: any ) => {
           return( 
            <div key={ data.id } className="ui segment">
                <h4>{ data.name }</h4>
                <p>{ data.body }</p>
            </div>
           )
        });
        return dataJSX;
    }

    render( ) {

        return(
            <>
                <div className="ui segment block header inverted blue center aligned grid">
                    <userContext.Consumer>
                        { user =>
                            (
                                <> 
                                    {user.name}'s Blog
                                </>
                            )
                        }
                    </userContext.Consumer>
                </div>
                <h2 className="ui center aligned header red">{ this.props.title }</h2>
                <Link to='trending' className = "ui label red">Trending</Link>
                {
                    this.props.location.pathname.includes('trending')?<Outlet/>:
                    <>
                        {	
                            this.state.loading ? this.renderLoading( ) :
                            this.state.technology ? this.renderData( ) :
                            this.renderError( )
                        }
                    </>
                }
            </>
        )
    }
}

export default retriveDataFromRoute(TechnologyBlog);
