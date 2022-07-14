import { Component, createRef, useRef, useEffect } from "react";

export class SearchReff extends Component {

    searchRef: any = null;

    constructor( props: any ) {

        super(props);

        this.searchRef = createRef( );

    }

    render( ) {

        return ( 
            <>
                <h3>Find the Details</h3>
                <div className="ui inverted segment">
                    <div className="ui inverted input">
                        <input type="text" placeholder="Search..." ref={ this.searchRef } />
                    </div>
                </div>
            </>
        );
    }

    componentDidMount( ) {

        this.searchRef.current.focus();
    }
}



export const  SearchReff1 = ( ) => {

    const searchRef: any = useRef( );

    useEffect( ( ) => {

        searchRef.current = searchRef.current.focus();
         }, [] );
    
    return(
        <>
            <h3>Website details</h3>
            <div className="ui labeled input">
                <div className="ui label">
                     http:// 
                </div>
                <input type="text" placeholder="mysite.com" ref = { searchRef } />
            </div>
        </>
    )
}
