import  { Component } from 'react';
import axios from '../../axios';


interface IProps {
    title: any;
    
}

// Axios implemented through Class Component

export class Business extends Component<IProps> {

    state = { loading: true, products: null, error: null }

	componentDidMount( ) {

		axios.get('/posts')
			.then(response => {
				this.setState( {loading: false, products: response.data.splice(0,5), error: null} );
			})
			.catch(error => {
				this.setState( {loading: false, products: null, error: error} );
		});   
    }

	renderLoading( ) {

		const loadingJSX = 
			<div className="ui horizontal divider header">
				<h4 className="ui secondary elastic loading button">Loading....</h4> 
			</div>
		return loadingJSX;
	}

	renderError( ) {

		const message = this.state.error? this.state.error[ 'message' ] : '';
		const errorJSX = 
			<div>
				<h4 className="negative ui button">{ message }</h4>
			</div>
		return errorJSX;
	}

	renderServicesData( ) {

		const datas = this.state.products ? this.state.products : [ ];
		const dataJSX = datas.map( (products: {id: number, title: string}) => {
			return(
				<div key={ products.id } className='ui segment'>
					<p>{products.title}</p>
				</div>
			);	
		});
		return dataJSX;
	}

	render( ) {

		return(
            <div>
                <h2 className="ui center aligned header">List of Business Centers</h2> 
				
					{	this.state.loading ? this.renderLoading( ) :
                		this.state.products ? this.renderServicesData( ):
               			this.renderError( )
					}                        
			</div>
        )		
	}	
}