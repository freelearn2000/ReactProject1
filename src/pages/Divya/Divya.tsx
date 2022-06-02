import	axios from 'axios';
import  { Component } from 'react';
import 	{ Link } from 'react-router-dom';


interface IProps {
    title: any;
}

interface IState {
	loading: boolean;
	project: { } [ ] | null;
	error: { message: string } | null;
}

export class Divya extends Component<IProps, IState> {

    state = { loading: true, project: null, error: null };

	componentDidMount( ) {

		axios.get(`https://jsonplaceholder.typicode.com/users`)
			.then(response => {
				this.setState( {loading: false, project: response.data, error: null} );
			})
			.catch(error => {
				this.setState( {loading: false, project: null, error: error} );
		});   
    }

	renderLoading( ) {

		const loadingJSX = <h4 className="ui secondary elastic loading button">Loading</h4> 
		return loadingJSX;
	}

	renderError( ) {

		const message = this.state.error? this.state.error[ 'message' ] : '';
		const errorJSX = 
			<div>
				<h4 className = "negative ui button">{ message }</h4>
			</div>
		return errorJSX;
	}

	renderProject( ) {

		const project = this.state.project ? this.state.project : [ ];
		const projectJSX = project.map( (project: {id: number, name: string, email: string}) => {
			return(
				<div key = { project.id } className ='ui segment'>
					<table className = "ui definition table">
						<tbody>
							<tr>
								<td className = "five wide column">Name : { project.name }</td>
								<td>Email : { project.email }</td>
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
                <h2 className="ui horizontal divider header">{this.props.title}</h2> 
				<br/>
				<Link to='/' className="ui button">Home</Link>
				<Link to='/news/3' className="ui button">News</Link>
				<br/>
                {	this.state.loading ? this.renderLoading( ) :
                	this.state.project ? this.renderProject( ) :
               		this.renderError( ) 
				} 	
            </div>
        )		
	}	
}