import { Link, Outlet, useLocation } from 'react-router-dom';


export const Samara = ( props: any) => {

    const location = useLocation();

    return(
        <div>
            <h2 className="ui center aligned header message">{ props.title }</h2>
            <Link to='/' className="ui purple button">Home</Link>
            <Link to='/about/ContactNo/8456' className="ui purple button">About</Link>
            <div className="ui aligned grid">
            <div className="four wide column">
                    <div className="ui secondary vertical menu">                         
                        { (location.pathname.includes(`/routing`))?
                            <Link to='/samara/routing' className="active item"><b>Routing</b></Link>
                        :   <Link to='/samara/routing' className="item"><b>Routing</b></Link>}
                        { (location.pathname.includes(`/axios`))?
                            <Link to='/samara/axios' className="active item"><b>Axios</b></Link>
                        :   <Link to='/samara/axios' className="item"><b>Axios</b></Link>}
                        { (location.pathname.includes(`/context`))?
                            <Link to='/samara/context' className="active item"><b>Context</b></Link>
                        :   <Link to='/samara/context' className="item"><b>Context</b></Link>}
                        { (location.pathname.includes(`/ref`))?
                            <Link to='/samara/ref' className="active item"><b>Ref</b></Link>
                        :   <Link to='/samara/ref' className="item"><b>Ref</b></Link>}    
                    </div>
                </div>
                <div className="twelve wide stretched column">
                    <div className="ui segment">
                        <Outlet/> 
                    </div>
                </div>
            </div>
        </div>
    );
}



