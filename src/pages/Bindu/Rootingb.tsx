import { Component } from "react";
import { Outlet } from "react-router-dom";
import { retriveDataFromRoute } from "../../utils/hoc";


interface IProps {
    title: any
    routeData: any;
}

interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null;
}

class Rootingb extends Component <IProps, IState> {


   render( ) { 

        return( 
                <>            
                    { 
                        this.props.routeData.id ?
                            <>  
                                <h2 className="ui center aligned header">{ this.props.title }</h2>
                                <h3 className='ui header blue'>Route Data: { this.props.routeData.id }</h3>
                            </>:
                            <Outlet/>
                                
                    }
                </>
        )
   }    
} 

export default retriveDataFromRoute ( Rootingb );
