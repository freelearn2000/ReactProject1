import { useEffect, useState } from "react";
import axios from '../../axios';


// Axios in Functional Component
export const PolandWeather = ( props: any ) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect( ( ) => {

        axios.get('/albums')
            .then( response => { 
                setLoading(false);
                setData(response.data);
                setError(null)})
            .catch( error => { 
                setLoading(false);
                setData(null);
                setError(error)} )

    }, [] );


    const renderLoading = ( ) => {

        const loadingJSX = 
            <div className = "ui segment">
                <div className = "ui active inverted dimmer">
                    <div className = "ui text loader">Loading</div>
                </div>
            </div>
        return loadingJSX;
    }

    const renderError = ( ) => {

        const message = error? error[ 'message' ] : '';
        const errorJSX = 
            <div>
                <h3 className = "ui red message">{ message }</h3>
            </div>
        return errorJSX;
    }

    const renderData = ( ) => {

        const datas = data ? data : [ ];
        const dataJSX = datas.map( (item: any) => {
            if ( item.id < 6 ) {
                return (
                    <div key = { item.id } className="ui floating message">
                        <h4>ID : { item.id }</h4>
                        <p>Title : { item.title }</p>
                    </div>
                );
            }
        });
        return dataJSX
    }

    return (

        <div>
            <h2 className="ui center aligned header">{ props.title }</h2>
                {
                    loading ? renderLoading( ):
                    data ? <>{ renderData( ) }</>:
                    <><h2>Error Data</h2>{ renderError( )}</>
                }
        </div>
    );
}
