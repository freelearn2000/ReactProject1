import { Component } from 'react';
import axios from  '../../axios';
import { Link } from 'react-router-dom';
import { retriveDataFromRoute } from '../../utils/hoc';
 

interface IState {
    loading: boolean, 
    users: { } [ ] | null, 
    error: { message: string } | null;
}

interface IProps {
    title: String;
    routeData: any;
}

class Santhosh extends Component<IProps, IState> {

    state = { loading: true, users: null, error: null };

    componentDidMount( ) {

        axios.get('/users')
            .then(response => {
                this.setState( { loading: false, users: response.data, error: null } );
            })
            .catch(error => {
                this.setState( { loading: false, users: null, error: error } );
            })                  
    }
    
    renderLoading( ) {

        const loadingJSX = 
        <div className="ui icon message">
            <i className="notched circle loading icon"></i>
            <h4>Loading Please wait.. </h4>
        </div>         
        return loadingJSX;
    }

    renderError( ) {

        const message = this.state.error? this.state.error[ 'message' ] : '';
        const errorJSX =
        <div>                  
            <h3 className="ui red message">{ message }</h3>
        </div> 
        return errorJSX;
    }
    
    renderNews( ) {      

        const users = this.state.users? this.state.users : [ ] ;        
        const newsJSX = users.map( ( item: { id: number, name: string, email: any } )=> {            
            return (
                <tr key={ item.id }> 
                    <td className="negative">{ item.id }</td>         
                    <td className="negative">{ item.name }</td>                   
                    <td className="negative">{ item.email }</td>                   
                </tr>
            );
        }); 
        return newsJSX;
    }
 
    render( ) {        
           
        return (
            <div>              
                <h3 className="ui center aligned red header">{ this.props.title }</h3>
                <h4>Route Data: {this.props.routeData.id}</h4>    
                <br/>
                <Link to='/' className="ui blue label"><i className="home icon"></i> Home</Link>
                <Link to='/news/latest' className="ui red label"><i className="file alternate outline icon"></i> News</Link>                
                <br/>              
                {
                    this.state.loading ? this.renderLoading( ) :              
                    this.state.users ? <>
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <td className="orange" align = "center" ><h4>ID</h4></td>
                                <td className="orange" align = "center" ><h4>Name</h4></td>
                                <td className="orange" align = "center" ><h4>Email</h4></td>
                            </tr>
                        </thead>
                        <tbody>{ this.renderNews( ) }</tbody>
                    </table> </> : 
                    this.renderError( )
                }  
            </div>
        )        
    }
} 

export default retriveDataFromRoute( Santhosh );