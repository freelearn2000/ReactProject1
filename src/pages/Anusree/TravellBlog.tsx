import { Component } from "react";
import axios from '../../axios';

interface IProps {
    title: any;
}

export class TravellBlog extends Component<IProps> {

    state={ loading: true, datas: null, error: null };
    
    componentDidMount( ) {

        axios.get('/comments')
            .then(response => {
                this.setState( {loading: false, datas: (response.data).splice(0,10), error: null} );
            })
            .catch(error => {
                this.setState( {loading: false, datas: null, error: error} );
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

        const datas = this.state.datas ? this.state.datas : [ ];
        const dataJSX = datas.map( (data: any ) => {
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
                <h2 className="ui center aligned header">{ this.props.title }</h2>
                    {
                        this.state.loading ? this.renderLoading( ):
                        this.state.datas ? <>{ this.renderUserdata( ) }</>:
                        <><h2>Error Data</h2>{ this.renderError( )}</>
                    }
            </>
        )
    }
}