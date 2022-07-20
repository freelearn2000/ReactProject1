import { useEffect, useState } from "react";
import axios from '../../axios';
import { retriveDataFromRoute } from '../../utils/hoc';



interface IProps {
    title: string;
}

// Axios in Functional Component
export const Cats = ( props: any ) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<any>(null);
    const [error, setError] = useState<any>(null);

   

    useEffect( ( ) => {

        axios.get('/users')
            .then( response => { 
                setLoading(false);
                setUsers(response.data.slice(0,5));
                setError(null)})
            .catch( error => { 
                setLoading(false);
                setUsers(null);
                setError(error)} )

    }, [] );

    const renderLoading = ( ) => {

        const loadingJSX =
        <div className="ui segment">
                <p>Please wait a little...</p>
                <div className="ui active inverted dimmer">
                    <div className="ui green text loader">Loading</div>
                </div>
            </div>
            
        return loadingJSX;
    }

    const renderData = ( ) => {

        const users1 = users ? users : [];
        const dataJSX = users1.map( (item: { name: string, id: number } ) => {
            return (
                <div key={ item.id } className="ui center aligned message">
                    <h4>{ item.name }</h4>
                </div>
            );
        });
        return dataJSX;
    }

    const renderError = ( ) => {

        const message = error ? error[ 'message' ] : '';
        const errorJSX =
            <div>
                <br />
                <h4>{ message }</h4>
            </div>
        return errorJSX;
    }

    return(
        <div>
                <h2 className="ui center aligned header">{ props.title }</h2>
                {
                    loading ? renderLoading() :
                    users ? renderData() : renderError()         
                }
            </div>
        
    )
}

export default retriveDataFromRoute(Cats);