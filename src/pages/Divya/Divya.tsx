import  { Component } from 'react'
import	axios from 'axios';


interface IProps {
    title: any;
}
interface IState {
	loading: boolean;
	project: [] | null;
	error: {message: string} | null;

}
export class Divya extends Component<IProps, IState> {

    state = {loading: true, project: null, error: null};

	componentDidMount( ) {
		// initiage API Calls from here
		axios.get(`https://jsonplaceholder.typicode.com/users`)
		.then(response => {
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
		const loadingJSX = <h4 className="ui secondary elastic loading button">Loading</h4> 
		return loadingJSX;
	}

	renderError( ) {

		const message = this.state.error? this.state.error[`message`] : '';
		const errorJSX = 
		<div>
			<h4 className="negative ui button" >{message}</h4>
		</div>
		return errorJSX;
	}

	renderProject( ) {

		const project = this.state.project ? this.state.project : [ ];
			const projectJSX = project.map( ( project: { id: number, name: string, email: string}, index ) => {
				return(
					<div key={project.id + index} className ='ui segment'>
						<table className="ui definition table">
	 						<tbody>
	   							<tr>
	 								<td className="five wide column" key={project.id}>Name : {project.name}</td>
									<td key={project.id + 'a'}>Email : {project.email}</td>
	   							</tr>
							</tbody>
							</table>
					</div>
				);
			});
		
		return projectJSX;
	}
	render( ) {
		
		return(
            <div>
                <h2 className="ui horizontal divider header">{this.props.title}'s Component</h2> 
                { this.state.loading ? this.renderLoading( ) :
                this.state.project ? this.renderProject( ) :
                this.renderError( ) } 	
            </div>
        )
			
	}	
}