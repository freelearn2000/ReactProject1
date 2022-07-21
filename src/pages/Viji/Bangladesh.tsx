import { useState, useEffect } from "react";
import axios from '../../axios';

     
//Axios - Functional Component

export const Bangladesh = ( props: any ) => {

    const [loading, setLoading] = useState<any>(true);
    const [content, setContent] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect( () => {
        axios.get('/todos')
            .then(response => {
                setLoading(false);
                setContent(response.data.splice(1,5));
                setError(null);
            })
            .catch(error => {
                setLoading(false);
                setContent(null);
                setError(error);
            })
    }, [] ) 

    const renderLoading = ( ) => {

        const loadingJSX = 
            <div>
                {/* <h2>{ props.title }</h2> */}
                <div className="ui segment">
                    <p>Loading...</p>
                    <div className="ui active dimmer">
                        <div className="ui loader">Please wait...</div>
                    </div>
                </div>
            </div>
        return loadingJSX;
    }

    const renderError = ( ) => {

        const message = error ? error[ `message` ] : '';
        const errorJSX =
            <div>
                <div className="ui negative message">
                <i className="close icon"></i>
                    { message }
                </div>
            </div>
        return errorJSX;
    }

    const renderData = ( ) => {

        const data = content ? content : [ ];
        const dataJsx = data.map( ( item: {id: number, title: string} ) => {
            return (
                <div key={ item.id } className="ui two segment">
                    <h5>Id: { item.id }</h5>
                    <p>Title: { item.title }</p>
                </div>
            )
        });
        return dataJsx;
    }

    return(
        <div>
            <h4 className="ui center aligned header">{ props.title }</h4>
                
                {
                    loading ? renderLoading( ) :
                    content ? renderData( ) :
                    renderError( )    
                }
        </div>
    );
}