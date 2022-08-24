import { Component } from 'react';
import { Link,  Outlet } from "react-router-dom";
import { retriveDataFromRoute } from '../../utils/hoc';


interface IState {
    loading: boolean,
    users: { } [ ] | null,
    error: { message: string } | null, 
}

interface IProps {
    title: string;
    routeData: any;
    location: any;
}

class Routing1 extends Component<IProps, IState> {

    render( ) {

        return( 
            <>            
              <div className="ui two item menu"  style={{ backgroundColor: 'pink'}}>
                        <>  
                        <Link to='/manooja/routing1/business' className={ this.props.location.pathname.includes('Business')? 'active item': 'item'}>Business</Link>
                        <Link to='/manooja/routing1/education' className={ this.props.location.pathname.includes('Education')? 'active item': 'item'}>Education</Link> 
                        </>
                </div>
                        
                <Outlet/>
            </>
    )
    }
}

export default retriveDataFromRoute( Routing1 );