import { Link } from 'react-router-dom';

export const Home = ( props: any ) => {  

    return (
        <div>
            <h3>Welcome to Home Page</h3>  
            <div className="ui buttons">
                <Link to='/Santhosh'  className="ui blue button">Cancel</Link> 
                <div className="or"></div>                             
                <Link to='/Santhosh/Login' className="ui green button">Login....</Link> 
            </div>
        </div>
    );
}