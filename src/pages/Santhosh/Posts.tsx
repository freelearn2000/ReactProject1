import { Component, useEffect, useState } from "react";
import axios from '../../axios';

//  Axios in Functional component
export const Posts  = ( props: any ) => {

    const [loading, setloading] = useState(true);
    const [data, setdata] = useState(null);
    const [error, seterror ] = useState(null);

    useEffect( ( ) => {
        axios.get('/posts')
        .then(response => {
            setloading(false);
            setdata(response.data);
            seterror(null);
        })
        .catch(error => {
            setloading(false);
            setdata(null);
            seterror(error);
        })
    }, []);


    const renderLoading = ( ) => {
        const loadingJSX =  
            <div className = "ui icon message">
                <i className = "notched circle loading icon"></i>
                <div className = "content">
                    <div className = "header">
                        Just one second
                    </div>
                    <p>We're fetching that content for you.</p>
                </div>
            </div>
        return loadingJSX;

    }
    const renderUserdata = ( ) => {
        const data1 = data ? data : [ ];
        const dataJSX = data1.map( ( item: any ) => {
            if( item.id < 6) {
                return(
                    <div key={ item.id } className = 'ui segment'>
                        <h4>Id: {item.id}</h4>
                        <p>Title: {item.title}</p>
                    </div>
                );
            }
        });
        return dataJSX;

        
    }
    const renderError = ( ) => {
        const errorMessage = error? error['message'] : '';
        const errorJSX = 
            <div>
                <div className = "ui negative message">
                    <p>{ errorMessage }</p>
                </div>
            </div>
        return errorJSX;

    }

    return(
        <>
        <h1 className="ui center aligned blue message">{ props.title }</h1>                                         
            {
                loading ? renderLoading( ):
                data ? <> { renderUserdata( ) }</>:
                <><h2>Error Data</h2>{ renderError( )}</>
            }          
        </>
    );
}