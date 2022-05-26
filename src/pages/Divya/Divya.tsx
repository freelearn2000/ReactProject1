import  { Component } from 'react'
import	axios from 'axios';


interface IProps {

}
interface IState {
	loading: boolean;
	project: [] | null;
	error: {message: string} | null;

}
export class Divya extends Component<IProps, IState> {

    state = {name: 'Divya', loading: true, project: null, error: null};

	componentDidMount( ) {
		// initiage API Calls from here
		axios.get(`https://jsonplaceholder.typicode.com/postss`)
		.then(response => {
			//console.log(`Success Data: `, response.data);
			this.setState( {loading: false, project: response.data, error: null} )
		})
		.catch(error =>{
			//console.log(`Error: `, error);
			this.setState( {loading: false, project: null, error: error} )
		})

        
    }

     componentDidUpdate( ) {
        //console.log('componentDidUpdate')
     }

     componentWillUnmount( ) {
        //console.log('componentWillUnmount')
     }

	renderLoading( ) {
		const loadingJSX = <h4>Loading..</h4> 
		return loadingJSX;
	}

	renderError( ) {
		const message = this.state.error? this.state.error[`message`] : '';
		const errorJSX = <div>
			<h2>{this.state.name}'s Component</h2>
			<h4>{message}</h4>
			</div>
		
		return errorJSX;
	}

	renderProject( ) {
		const projectJSX = <div>
			<h2>{this.state.name}'s Component</h2>
			<h4>List all projects here</h4>
			</div>
		
		return projectJSX;
	}
   
	render( ) {
		if ( this.state.loading ) {
			return this.renderLoading( );
		} else if ( this.state.error ) {
			return this.renderError( );
		} else {
			return this.renderProject( );
		}
	}	
}
