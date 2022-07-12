import  { Component, createContext, useContext } from 'react';
import axios from '../../axios';


// Create Context object
const MyContext = createContext('');

interface IProps {
    
}

interface IState {
	loading: boolean;
	products: { } [ ] | null;
	error: { message: string } | null;
}

export class Grocery extends Component<IProps, IState> {

    state = { loading: true, products: null, error: null };

	componentDidMount( ) {

		axios.get('/posts')
			.then(response => {
				this.setState( {loading: false, products: response.data.splice(0,8), error: null} );
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

	renderProductData( ) {

		const datas = this.state.products ? this.state.products : [ ];
		const dataJSX = datas.map( (product: {id: number, title: string} ) => {
			return(
				<div key={ product.id } className='ui segment'>
					<p>{product.title}</p>
				</div>
			
			);
		});

		return dataJSX;
	}

	render( ) {

		return(
            <div>
                <h2 className="ui horizontal divider header">List of Groceries</h2> 
					<MyContext.Provider value={'Healthcare'}>
                    	<Healthcare/>
                	</MyContext.Provider> 
					
					{	this.state.loading ? this.renderLoading( ) :
                		this.state.products ? this.renderProductData( ) :
               			this.renderError( )	}                       
			</div>
        )		
	}	
}


class Healthcare extends Component {

    render( ) {

        return(
            <Babycare/>
        );
    }
}

// a.Consumer
const Babycare = (props: any) => {

    const context = useContext(MyContext);

    return(
        <>
        <h5>Context value: {context}</h5>
        </>
    );
}
