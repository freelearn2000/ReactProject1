import { Component } from "react";
import 	{ Link, Outlet } from 'react-router-dom';
import axios from '../../axios';
import ProImage from '../Divya/Images/Product.png';
import GroImage from '../Divya/Images/ImGro.png';
import SkinImage from '../Divya/Images/ImSkin.png';


interface IProps {
    title: any;
}

export class Product extends Component<IProps> {

    state = { loading: true, products: null, error: null };

	componentDidMount( ) {

		axios.get(`/posts`)
			.then(response => {
				this.setState( {loading: false, products: response.data, error: null} );
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

	renderData( ) {

		const products = this.state.products ? this.state.products : [ ];
		const dataJSX = products.map( (product: any) => {
			return(
				<div key={ product.id } className='ui segment'>
					<h4>{ product.title }</h4>
                    <p>{ product.body }</p>
				</div>
			);
		} );
		return dataJSX;
	}

	render( ) {

		return(
            <>
                <h2 className="ui horizontal divider header">{this.props.title}</h2> 
                <div className="ui interenally celled grid">
                    <div className="row">
                        <div className="three wide  column">
                            <div className="ui vertical fluid menu">
								<Link to='/divya/product/grocery' className="item"> <img alt={GroImage} src={GroImage} /> <br/> Grocery </Link>
								<Link to='/divya/product/skincare' className="item"><img alt={SkinImage} src={SkinImage} /> <br/> SkinCare</Link>
                            </div>
                        </div>
                        <div className="twelve wide  column"> 	
						    <Outlet/>		
						 	<p>Let Us Help You With Your Need! </p>
						 	<img alt={ProImage} src={ProImage}/>  
                        </div>
                    </div>
                </div>         
            </>
        )		
	}	
}

