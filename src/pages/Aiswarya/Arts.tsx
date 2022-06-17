import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

export class Arts extends Component <IProps> {

    state = { loading: true, culture: null, error: null };

    componentDidMount ( ) {

        axios.get('/todos')
            .then(response => {
                this.setState( { loading: false, culture: response.data, error: null} );
            })
            .catch(error => {
                this.setState( { loading: false, culture: null, error: error} );
            })  
        }

    renderLoading( ) {

        const loadingJSX = 
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading User Data..!!</div>
            </div>  
        return loadingJSX;
    }

    rendererror( ) {

        const message = this.state.error? this.state.error['message'] : '';
        const errorJSX = 
            <div>
                <h4>{ message }</h4>
            </div>
        return errorJSX;
    }

    renderUserdata( ) {
        
        const culture = this.state.culture ? this.state.culture : [ ];
        const DataJSX = culture.map( (cultures: any) => {
            return(
                <div key={ cultures.id } className="ui segment">
                   <h3>{ cultures.title}</h3>
                   <p> { cultures.body}</p>
                    </div>
            )
        });
    return DataJSX;
    }

    render( ) {

        return (
            <>
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                {
                    this.state.loading ? this.renderLoading( ):
                    this.state.culture ? this.renderUserdata( ):
                    <><h2> Error Data !!!!</h2>{this.rendererror( )}</>
                }
            </>
        )
    }
}
