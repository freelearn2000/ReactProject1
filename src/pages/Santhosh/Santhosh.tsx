import { Link, Outlet, useLocation } from 'react-router-dom';


const Santhosh = ( props: any ) => {
    const location = useLocation();

        return (
            <div>
                <h2 className="ui center aligned blue header message">This is Santhosh's Component  </h2>         
                <div className="ui grid" style={{ backgroundColor: 'lightblue'}}>
                    <div className="four wide column">
                        <div className="ui secondary vertical menu">                         
                        { (location.pathname.includes(`/axios`))?
                            <Link to='/Santhosh/axios' className="active item">Axios</Link>
                        :   <Link to='/Santhosh/axios' className="item">Axios</Link>}
                        { (location.pathname.includes(`/Context`))?
                            <Link to='/Santhosh/Context' className="active item">Context</Link>
                        :   <Link to='/Santhosh/Context' className="item">Context</Link>}
                        { (location.pathname.includes(`/Ref`))?
                            <Link to='/Santhosh/Ref' className="active item">Ref</Link>
                        :   <Link to='/Santhosh/Ref' className="item">Ref</Link>}                    
                        </div>
                    </div>
                <div className="twelve wide stretched column">
                    <div className="ui segment">                     
                        <Outlet/>                  
                    </div>
                </div>
                </div> 
            </div>     
        )   
}

export default Santhosh;